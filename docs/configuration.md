# Configuration Guide

This guide details the configuration options and settings for the Sentinel Writer Model Context Protocol (SWMCP) tool.

## Claude Desktop Configuration

### MCP Server Configuration

The claude_desktop_config.json file is the primary configuration file for the SWMCP tool. It should be located in:

```
C:\\Users\\[Username]\\AppData\\Roaming\\Claude\\claude_desktop_config.json
```

### Basic Configuration Structure

```json
{
  "mcpServers": {
    "sentinel-writer": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": [
        "C:\\Users\\[Username]\\node_modules\\@modelcontextprotocol\\server-sentinel-writer\\dist\\index.js"
      ],
      "env": {
            "DCE_ENDPOINT": "https://XXXXXXXXXX.ingest.monitor.azure.com",          
            "DCR_ANOMALIES_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMAUDITEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMAUTHENTICATIONEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMDHCPEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMDNSACTIVITYLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMFILEEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMNETWORKSESSIONLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMPROCESSEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMREGISTRYEVENTLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMUSERMANAGEMENTACTIVITYLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_ASIMWEBSESSIONLOGS_ID": "dcr-XXXXXXXXXX",
            "DCR_AWSCLOUDTRAIL_ID": "dcr-XXXXXXXXXX",
            "DCR_AWSCLOUDWATCH_ID": "dcr-XXXXXXXXXX",
            "DCR_AWSGUARDDUTY_ID": "dcr-XXXXXXXXXX",
            "DCR_AWSVPCFLOW_ID": "dcr-XXXXXXXXXX",            
            "DCR_COMMONSECURITYLOG_ID": "dcr-XXXXXXXXXX",
            "DCR_GCPAUDITLOGS_ID": "dcr-XXXXXXXXXX", 
            "DCR_GOOGLECLOUDSCC_ID": "dcr-XXXXXXXXXX", 
            "DCR_SECURITYEVENT_ID": "dcr-XXXXXXXXXX",
            "DCR_SYSLOG_ID": "dcr-XXXXXXXXXX",
            "DCR_WINDOWSEVENT_ID": "dcr-XXXXXXXXXX"
      }
    }
  }
}
```

## Environment Variables

### Required Variables

| Variable     | Description                  | Example                                    |
| ------------ | ---------------------------- | ------------------------------------------ |
| TENANT_ID    | Azure AD tenant ID           | "72f988bf-86f1-41af-91ab-2d7cd011db47"     |
| APP_ID       | Azure AD application ID      | "1234abcd-12ab-34cd-56ef-1234567890ab"     |
| APP_SECRET   | Azure AD application secret  | "your-secret-value"                        |
| DCE_ENDPOINT | Data Collection Endpoint URL | "https://example.ingest.monitor.azure.com" |

### Data Collection Rule IDs

Each supported log type requires its corresponding DCR ID configuration:

| Variable                              | Description                |
| ------------------------------------- | -------------------------- |
| DCR_ANOMALIES_ID                      | Anomalies events           |
| DCR_ASIMAUDITEVENTLOGS_ID             | ASIM audit events          |
| DCR_ASIMAUTHENTICATIONEVENTLOGS_ID    | ASIM authentication events |
| DCR_ASIMDHCPEVENTLOGS_ID              | ASIM DHCP events           |
| DCR_ASIMDNSACTIVITYLOGS_ID            | ASIM DNS activity          |
| DCR_ASIMFILEEVENTLOGS_ID              | ASIM file events           |
| DCR_ASIMNETWORKSESSIONLOGS_ID         | ASIM network sessions      |
| DCR_ASIMPROCESSEVENTLOGS_ID           | ASIM process events        |
| DCR_ASIMREGISTRYEVENTLOGS_ID          | ASIM registry events       |
| DCR_ASIMUSERMANAGEMENTACTIVITYLOGS_ID | ASIM user management       |
| DCR_ASIMWEBSESSIONLOGS_ID             | ASIM web sessions          |
| DCR_AWSCLOUDTRAIL_ID                  | AWS CloudTrail             |
| DCR_AWSCLOUDWATCH_ID                  | AWS CloudWatch             |
| DCR_AWSGUARDDUTY_ID                   | AWS GuardDuty              |
| DCR_AWSVPCFLOW_ID                     | AWS VPC Flow               |
| DCR_COMMONSECURITYLOG_ID              | Common Security Log        |
| DCR_GCPAUDITLOGS_ID                   | GCP Audit Logs             |
| DCR_GOOGLECLOUDSCC_ID                 | Google Cloud SCC           |
| DCR_SECURITYEVENT_ID                  | Security Events            |
| DCR_SYSLOG_ID                         | Syslog                     |
| DCR_WINDOWSEVENT_ID                   | Windows Events             |

## Azure Resource Configuration

### Data Collection Rules

The provided Bicep templates configure the following aspects for each DCR:

- Data source configuration
- Transform configuration
- Destination configuration
- Table configurations
- Stream configurations

Example DCR configuration (from Bicep):

```bicep
resource dcr 'Microsoft.Insights/dataCollectionRules@2021-09-01-preview' = {
  name: '${prefix}-${name}'
  location: location
  properties: {
    dataCollectionEndpointId: dce.id
    streamDeclarations: {
      // Stream configurations
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'destination-workspace'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          // Stream references
        ]
        destinations: [
          'destination-workspace'
        ]
        transformKql: // Transform queries
        outputStream: // Output configuration
      }
    ]
  }
}
```

## Performance Configuration

### Node.js Settings

- Recommended heap size: 4GB
- Garbage collection settings: Default
- Max old space size: 4096MB

### Rate Limiting

- Default rate limit: 100 requests per minute
- Configurable through Azure DCE settings

## Security Configuration

### Authentication

- Use Azure AD service principal authentication
- Implement least-privilege access
- Rotate APP_SECRET periodically

### Network Security

- Ensure proper network access to Azure endpoints
- Configure appropriate firewall rules
- Use private endpoints where possible

## Monitoring and Logging

### Log Locations

- Claude Desktop logs: Standard Claude Desktop log location
- Node.js server logs: Standard output/error streams
- Azure resource logs: Azure Monitor

### Metrics

- Monitor DCR ingestion rates
- Track event processing latency
- Monitor resource utilization

## Best Practices

1. **Security**
   
   - Regularly rotate credentials
   - Use managed identities where possible
   - Implement proper access controls

2. **Performance**
   
   - Monitor memory usage
   - Implement proper error handling
   - Use appropriate batch sizes for event generation

3. **Maintenance**
   
   - Regular updates to Node.js
   - Keep Claude Desktop updated
   - Monitor for new DCR schema versions

4. **Testing**
   
   - Validate configurations before production use
   - Test with small event volumes first
   - Verify event schema compliance