# Sentinel Writer MCP Server Implementation

## Overview

This document provides detailed documentation for the Model Context Protocol (MCP) server implementation that handles security event writing to Microsoft Sentinel. The server provides tools for writing security events and managing timestamps in a standardized format.

## Core Components

### Server Configuration

```javascript
const server = new Server({
    name: "security-simulation/sentinel-writer",
    version: "0.2.1"
});
```

The server implements two primary tools:

1. `write_security_event`: Writes security events to Microsoft Sentinel
2. `get_current_time`: Provides current time in ISO 8601 format

## Tool Definitions

### Write Security Event Tool

```javascript
const WRITE_SECURITY_EVENT_TOOL = {
    name: "write_security_event",
    description: (dcrType) => `...`,
    inputSchema: {
        type: "object",
        properties: {
            dcrType: {
                type: "string",
                enum: [/* supported DCR types */]
            },
            eventData: {
                type: "object"
            }
        }
    }
};
```

#### Supported DCR Types

1. ASIM Log Types
   
   - Anomalies
   - ASimAuditEventLogs
   - ASimAuthenticationEventLogs
   - ASimDhcpEventLogs
   - ASimDnsActivityLogs
   - ASimFileEventLogs
   - ASimNetworkSessionLogs
   - ASimProcessEventLogs
   - ASimRegistryEventLogs
   - ASimUserManagementActivityLogs
   - ASimWebSessionLogs

2. Cloud Provider Logs
   
   - AWSCloudTrail
   - AWSCloudWatch
   - AWSGuardDuty
   - AWSVPCFlow
   - GCPAuditLogs
   - GoogleCloudSCC

3. Traditional Security Logs
   
   - CommonSecurityLog
   - SecurityEvent
   - Syslog
   - WindowsEvent

### Get Current Time Tool

```javascript
const GET_CURRENT_TIME_TOOL = {
    name: "get_current_time",
    description: "Returns the current time in ISO 8601 format in UTC/Zulu time"
};
```

## Environment Configuration

### Required Environment Variables

```javascript
const requiredEnvVars = {
    TENANT_ID: process.env.TENANT_ID,
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    DCE_ENDPOINT: process.env.DCE_ENDPOINT
};
```

### DCR Configuration Variables

Each Data Collection Rule type requires its corresponding environment variable:

- `DCR_ANOMALIES_ID`
- `DCR_ASIMAUDITEVENTLOGS_ID`
- `DCR_ASIMAUTHENTICATIONEVENTLOGS_ID`
- etc.

## Core Functionality

### Table Schema Management

The server implements schema caching and validation:

```javascript
const tableRegistry = {
    Anomalies: {
        description: "...",
        schemaPath: "./schemas/Anomalies",
        relationships: [...]
    },
    // Additional table definitions
};
```

### Schema Loading

```javascript
async function loadTableSchema(tableName) {
    // Dynamically loads schema components:
    // - Schema definition
    // - Validation rules
    // - Examples
    // - Relationships (optional)
}
```

### Event Processing

#### Event Normalization

```javascript
function normalizeEventData(dcrType, eventData) {
    // Normalizes event data:
    // 1. Validates/normalizes TimeGenerated
    // 2. Adds TenantId if missing
    // 3. Ensures proper timestamp format
}
```

### Authentication

#### Token Management

```javascript
async function getAccessToken() {
    // Manages OAuth token lifecycle:
    // 1. Checks token cache
    // 2. Refreshes if needed
    // 3. Handles token expiration
}
```

### Event Writing

#### Security Event Writing Process

```javascript
async function writeSecurityEvent(dcrType, eventData) {
    // Main event writing workflow:
    // 1. Validates table existence
    // 2. Loads and validates schema
    // 3. Normalizes event data
    // 4. Sends to Azure endpoint
    // 5. Handles responses and errors
}
```

## Request Handling

### Tool Request Processing

```javascript
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    // Handles tool requests:
    // 1. get_current_time
    // 2. write_security_event
});
```

## Error Handling

### Error Categories

1. Schema Validation Errors
2. Authentication Errors
3. Network Errors
4. Configuration Errors

### Error Response Format

```javascript
{
    content: [{
        type: "text",
        text: `Error: ${errorMessage}`
    }],
    isError: true
}
```

## Server Startup

### Server Initialization

```javascript
async function runServer() {
    // 1. Creates StdioServerTransport
    // 2. Connects server to transport
    // 3. Handles startup errors
}
```

## Best Practices

### Event Writing

1. Always validate events against schema before sending
2. Ensure TimeGenerated is within 1 minute of current time
3. Include required fields for each event type
4. Handle authentication token expiration gracefully

### Error Handling

1. Provide detailed error messages
2. Log errors with appropriate context
3. Handle different error types appropriately
4. Implement proper error recovery

### Performance

1. Implement schema caching
2. Reuse authentication tokens
3. Handle connection issues gracefully
4. Log operations for debugging

## Troubleshooting

### Common Issues

1. **Authentication Failures**
   
   - Check environment variables
   - Verify Azure AD credentials
   - Check token expiration

2. **Schema Validation Errors**
   
   - Verify event data structure
   - Check required fields
   - Validate timestamp format

3. **Connection Issues**
   
   - Verify network connectivity
   - Check endpoint accessibility
   - Validate DCE configuration

## Security Considerations

### Authentication

- Secure storage of credentials
- Regular token rotation
- Proper error handling for auth failures

### Data Handling

- Input validation
- Secure transmission
- Proper error logging

## Monitoring and Logging

### Log Categories

1. Operational Logs
2. Error Logs
3. Debug Information
4. Performance Metrics

### Log Format

```javascript
console.error('Error details:', {
    status: response.status,
    statusText: response.statusText,
    responseBody: errorBody,
    requestUri: uri
});
```
