#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { validateAgainstSchema, getExampleRecord, generateToolDescription } from './validation/schemaValidator.js';
import { formatSentinelTimestamp, getCurrentTimeMs } from './utils/timeUtils.js';
import fetch from "node-fetch";

const WRITE_SECURITY_EVENT_TOOL = {
    name: "write_security_event",
    description: (dcrType) => `Writes security event data to Microsoft Sentinel through Data Collection Rules. 
Supports multiple event types and schemas based on Microsoft Sentinel's data collection rules.

${generateToolDescription(dcrType)}

CRITICAL FORMATTING REQUIREMENTS:
1. TimeGenerated and other datetime fields must be in ISO UTC/Zulu format (e.g., '2024-12-03T08:38:37.175Z')
2. Event data must follow the schema exactly - unknown fields will be rejected
3. All required fields must be provided
4. TimeGenerated should be within one minute of the current time

Used for generating security attack simulations and training data.`,
    inputSchema: {
        type: "object",
        properties: {
            dcrType: {
                type: "string",
                description: "The type of Data Collection Rule to use",
                enum: [
                    "Anomalies",
                    "ASimAuditEventLogs",
                    "ASimAuthenticationEventLogs",
                    "ASimDhcpEventLogs",
                    "ASimDnsActivityLogs",
                    "ASimFileEventLogs",
                    "ASimNetworkSessionLogs",
                    "ASimProcessEventLogs",
                    "ASimRegistryEventLogs",
                    "ASimUserManagementActivityLogs",
                    "ASimWebSessionLogs",
                    "AWSCloudTrail",
                    "AWSCloudWatch",
                    "AWSGuardDuty",
                    "AWSVPCFlow",
                    "CommonSecurityLog",
                    "GCPAuditLogs",
                    "GoogleCloudSCC",
                    "SecurityEvent",
                    "Syslog",
                    "WindowsEvent"
                ]
            },
            eventData: {
                type: "object",
                description: "The event data to write, following the schema for the specified DCR type"
            }
        },
        required: ["dcrType", "eventData"]
    }
};


const GET_CURRENT_TIME_TOOL = {
    name: "get_current_time",
    description: "Returns the current time in ISO 8601 format in UTC/Zulu time, " +
        "for use with security event timestamps and other time-sensitive operations.",
    inputSchema: {
        type: "object",
        properties: {},
        required: []
    }
};

const server = new Server({
    name: "security-simulation/sentinel-writer",
    version: "0.2.1",
}, {
    capabilities: {
        tools: {
            write_security_event: WRITE_SECURITY_EVENT_TOOL,
            get_current_time: GET_CURRENT_TIME_TOOL
        },
    },
});

const requiredEnvVars = {
    TENANT_ID: process.env.TENANT_ID,
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    DCE_ENDPOINT: process.env.DCE_ENDPOINT
};

Object.entries(requiredEnvVars).forEach(([name, value]) => {
    if (!value) {
        console.error(`Error: ${name} environment variable is required`);
        process.exit(1);
    }
});


const schemaCache = new Map();

async function getTableSchema(tableName) {
  if (schemaCache.has(tableName)) {
    return schemaCache.get(tableName);
  }
  
  const schema = await loadTableSchema(tableName);
  schemaCache.set(tableName, schema);
  return schema;
}


const tableRegistry = {
    Anomalies: {
      description: "This table contains anomalies generated by the active Anomaly analytics rules in Azure Sentinel.",
      schemaPath: "./schemas/Anomalies",
      relationships: ["SecurityEvent", "ASimAuthenticationEventLogs"]
    },
    ASimAuditEventLogs: {
      description: "Audit events normalized schema",
      schemaPath: "./schemas/ASimAuditEventLogs",
      relationships: ["SecurityEvent"]
    },
    ASimAuthenticationEventLogs: {
      description: "Authentication events normalized schema",
      schemaPath: "./schemas/ASimAuthenticationEventLogs",
      relationships: ["SecurityEvent"]
    },
    ASimDhcpEventLogs: {
      description: "DHCP events normalized schema",
      schemaPath: "./schemas/ASimDhcpEventLogs",
      relationships: ["ASimNetworkSessionLogs"]
    },
    ASimDnsActivityLogs: {
      description: "DNS activity normalized schema",
      schemaPath: "./schemas/ASimDnsActivityLogs",
      relationships: ["ASimNetworkSessionLogs"]
    },
    ASimFileEventLogs: {
      description: "File activity normalized schema",
      schemaPath: "./schemas/ASimFileEventLogs",
      relationships: ["SecurityEvent"]
    },
    ASimNetworkSessionLogs: {
      description: "Network session normalized schema",
      schemaPath: "./schemas/ASimNetworkSessionLogs",
      relationships: ["SecurityEvent", "CommonSecurityLog"]
    },
    ASimProcessEventLogs: {
      description: "Process activity normalized schema",
      schemaPath: "./schemas/ASimProcessEventLogs",
      relationships: ["SecurityEvent"]
    },
    ASimRegistryEventLogs: {
      description: "Registry events normalized schema",
      schemaPath: "./schemas/ASimRegistryEventLogs",
      relationships: ["SecurityEvent"]
    },
    ASimUserManagementActivityLogs: {
      description: "User management activity normalized schema",
      schemaPath: "./schemas/ASimUserManagementActivityLogs",
      relationships: ["SecurityEvent", "ASimAuthenticationEventLogs"]
    },
    ASimWebSessionLogs: {
      description: "Web session normalized schema",
      schemaPath: "./schemas/ASimWebSessionLogs",
      relationships: ["ASimNetworkSessionLogs"]
    },
    AWSCloudTrail: {
      description: "AWS CloudTrail logs",
      schemaPath: "./schemas/AWSCloudTrail",
      relationships: []
    },
    AWSCloudWatch: {
      description: "AWS CloudWatch logs",
      schemaPath: "./schemas/AWSCloudWatch",
      relationships: []
    },
    AWSGuardDuty: {
      description: "AWS GuardDuty findings",
      schemaPath: "./schemas/AWSGuardDuty",
      relationships: ["SecurityAlert"]
    },
    AWSVPCFlow: {
      description: "AWS VPC Flow logs",
      schemaPath: "./schemas/AWSVPCFlow",
      relationships: ["ASimNetworkSessionLogs"]
    },
    CommonSecurityLog: {
      description: "Common Security Log (CEF) format",
      schemaPath: "./schemas/CommonSecurityLog",
      relationships: ["SecurityEvent"]
    },
    GCPAuditLogs: {
      description: "Google Cloud Platform audit logs",
      schemaPath: "./schemas/GCPAuditLogs",
      relationships: []
    },
    GoogleCloudSCC: {
      description: "Google Cloud Security Command Center findings",
      schemaPath: "./schemas/GoogleCloudSCC",
      relationships: ["SecurityAlert"]
    },
    SecurityEvent: {
      description: "Windows Security Events",
      schemaPath: "./schemas/SecurityEvent",
      relationships: ["ASimAuthenticationEventLogs", "ASimProcessEventLogs"]
    },
    Syslog: {
      description: "Linux Syslog events",
      schemaPath: "./schemas/Syslog",
      relationships: ["SecurityEvent"]
    },
    WindowsEvent: {
      description: "Windows events",
      schemaPath: "./schemas/WindowsEvent",
      relationships: ["SecurityEvent"]
    }
  };

async function loadTableSchema(tableName) {
    if (!tableRegistry[tableName]) {
        throw new Error(`Unknown table: ${tableName}`);
    }
    
    try {
        const schemaPath = tableRegistry[tableName].schemaPath;
        
        // Dynamic imports for schema components
        const [schema, validation, examples] = await Promise.all([
            import(`${schemaPath}/schema.js`),
            import(`${schemaPath}/validation.js`),
            import(`${schemaPath}/examples.js`)
        ]);
        
        // Optional relationships import
        let relationships = {};
        try {
            relationships = await import(`${schemaPath}/relationships.js`);
        } catch (e) {
            // Relationships are optional, continue without them
            console.error(`No relationships defined for ${tableName}`);
        }
        
        return {
            schema,
            validation,
            examples,
            relationships
        };
    } catch (error) {
        throw new Error(`Failed to load schema for ${tableName}: ${error.message}`);
    }
}



//function getCurrentTimestamp() {
//    const now = new Date();
//    return now.toISOString().replace('Z', '0000Z');
//}



export function getCurrentTimestamp() {
    return formatSentinelTimestamp(getCurrentTimeMs());
}


function normalizeEventData(dcrType, eventData) {
    const normalizedEvent = { ...eventData };

    // Validate and normalize TimeGenerated
    if (normalizedEvent.TimeGenerated) {
        try {
            const timestamp = new Date(normalizedEvent.TimeGenerated);
            if (isNaN(timestamp.getTime())) {
                throw new Error('Invalid TimeGenerated format');
            }
            // Ensure it's within 1 minute of current time
            const now = Date.now();
            const eventTime = timestamp.getTime();
            if (Math.abs(now - eventTime) > 60000) {
                console.error('Warning: TimeGenerated is more than 1 minute from current time');
                normalizedEvent.TimeGenerated = getCurrentTimestamp();
            }
        } catch (error) {
            console.error('Invalid TimeGenerated, using current time:', error);
            normalizedEvent.TimeGenerated = getCurrentTimestamp();
        }
    } else {
        normalizedEvent.TimeGenerated = getCurrentTimestamp();
    }

    // Add TenantId if not present
    if (!normalizedEvent.TenantId) {
        normalizedEvent.TenantId = process.env.TENANT_ID || "00000000-0000-0000-0000-000000000000";
    }

    return normalizedEvent;
}

function getDcrImmutableId(dcrType) {
    const envVarName = `DCR_${dcrType.toUpperCase()}_ID`;
    const immutableId = process.env[envVarName];
    
    if (!immutableId) {
        throw new Error(`Missing environment variable ${envVarName} for DCR type ${dcrType}`);
    }
    
    return immutableId;
}

let accessToken = null;
let tokenExpiration = 0;

async function getAccessToken() {
    if (accessToken && Date.now() < tokenExpiration) {
        return accessToken;
    }

    const tokenUrl = `https://login.microsoftonline.com/${requiredEnvVars.TENANT_ID}/oauth2/v2.0/token`;
    const body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: requiredEnvVars.APP_ID,
        client_secret: requiredEnvVars.APP_SECRET,
        scope: "https://monitor.azure.com//.default"
    });

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });

    if (!response.ok) {
        throw new Error(`Failed to get access token: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    accessToken = data.access_token;
    tokenExpiration = Date.now() + (data.expires_in * 1000) - 300000; // 5 minutes before expiry
    return accessToken;
}

async function writeSecurityEvent(dcrType, eventData) {
    try {
        // Validate the table exists in our registry
        if (!tableRegistry[dcrType]) {
            throw new Error(`Unknown table type: ${dcrType}`);
        }

        // Load and validate against schema
        let tableSchema;
        try {
            tableSchema = await loadTableSchema(dcrType);
            await tableSchema.validation.validateEvent(eventData);
        } catch (error) {
            throw new Error(`Schema validation failed for ${dcrType}: ${error.message}`);
        }

        // Normalize only after successful validation
        const normalizedEvent = normalizeEventData(dcrType, eventData);
        
        // Send normalized event
        const dataToSend = `[${JSON.stringify(normalizedEvent)}]`;
        
        const token = await getAccessToken();
        const dcrImmutableId = getDcrImmutableId(dcrType);
        
        const uri = `${requiredEnvVars.DCE_ENDPOINT}/dataCollectionRules/${dcrImmutableId}/streams/Custom-${dcrType}?api-version=2021-11-01-preview`;
        
        console.error('Writing validated event:', {
            dcrType,
            uri: uri,
            sampleData: dataToSend.substring(0, 200) + '...'
        });

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        const response = await fetch(uri, {
            method: 'POST',
            headers: headers,
            body: dataToSend
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Error details:', {
                status: response.status,
                statusText: response.statusText,
                responseBody: errorBody,
                requestUri: uri
            });
            throw new Error(`Failed to write security event: ${response.status} ${response.statusText}`);
        }

        const result = await response.text();
        console.error('Successfully wrote event:', {
            dcrType,
            result
        });

        return result;

    } catch (error) {
        console.error('Error in writeSecurityEvent:', {
            error: error.message,
            stack: error.stack,
            dcrType
        });
        throw error;
    }
}

server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [WRITE_SECURITY_EVENT_TOOL, GET_CURRENT_TIME_TOOL],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
        const { name, arguments: args } = request.params;

        if (name === "get_current_time") {
            const nowUTC = new Date(Date.now());
            const timeString = nowUTC.toISOString().substring(0, 23) + 'Z';
            
            // Validation checks
            if (!timeString.endsWith('Z')) {
                throw new Error('Generated time is not in Zulu/UTC format');
            }
            
            return {
                content: [{
                    type: "text",
                    text: timeString
                }],
                isError: false,
            };
        }

        if (name === "write_security_event") {
            if (!args) {
                throw new Error("No arguments provided");
            }
            
            const { dcrType, eventData } = args;
            
            if (!dcrType || !eventData) {
                throw new Error("Both dcrType and eventData are required");
            }

            const result = await writeSecurityEvent(dcrType, eventData);
            
            return {
                content: [{
                    type: "text",
                    text: `Successfully wrote ${dcrType} event to Sentinel: ${result}`
                }],
                isError: false,
            };
        }

        return {
            content: [{ type: "text", text: `Unknown tool: ${name}` }],
            isError: true,
        };
    } catch (error) {
        return {
            content: [{
                type: "text",
                text: `Error: ${error instanceof Error ? error.message : String(error)}`,
            }],
            isError: true,
        };
    }
});

async function runServer() {
    try {
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("Sentinel Security Event Writer MCP Server running on stdio");
    } catch (error) {
        console.error("Error running server:", {
            message: error.message,
            stack: error.stack,
            details: error
        });
    }
}

runServer().catch((error) => {
    console.error("Fatal error running server:", {
        message: error.message,
        stack: error.stack,
        details: error
    });
    if (error.code === 'ECONNREFUSED' || error.code === 'EACCES') {
        process.exit(1);
    }
});