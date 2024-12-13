# Microsoft Sentinel Writer MCP Server

A Model Context Protocol (MCP) server implementation that enables direct writing of security events to Microsoft Sentinel through Data Collection Rules (DCR).

## Features

- Write security events to Microsoft Sentinel using various schemas
- Support for multiple ASIM (Advanced Security Information Model) log types
- Ideal for security testing, attack simulation, and training data generation
- Automated event correlation and timestamp management

## Supported Event Types

The server supports writing to the following Data Collection Rule types:

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
- CommonSecurityLog
- SecurityEvent
- Syslog

## Installation

1. Copy the '**server-sentinel-writer'**  of this repo to your modelcontextprotocol directory.
   On Windows this default is currently:
   C:\Users\\<username>\node_modules\@modelcontextprotocol\

2. Deploy ASIM Data Collection Rules to your Azure subscription.

### Prerequisites

- Node.js 14.x or higher
- Ensure the modelcontextprotocol SDX is installed ( npm install @modelcontextprotocol/sdk node-fetch)
- Valid Microsoft Sentinel workspace
- Properly configured Data Collection Rules
- Authentication credentials with permissions to write to Sentinel

## Configuration

### Azure Setup

1. Create or identify your Microsoft Sentinel workspace
2. Set up Data Collection Rules for the event types you plan to use
3. Configure necessary permissions and access policies
4. Obtain required credentials (Client ID, Client Secret, Tenant ID)

### Environment Variables

The following environment variables need to be set:

```
AZURE_CLIENT_ID=your_client_id
AZURE_CLIENT_SECRET=your_client_secret
AZURE_TENANT_ID=your_tenant_id
SENTINEL_WORKSPACE_ID=your_workspace_id
SENTINEL_DCR_IMMUTABLE_ID=your_dcr_id
```

### Usage with Claude Desktop

Note that due to a bug with Windows and the current version of Claude Desktop, this tool refernces node.exe directly rather than npx.  Alter the path references for the command and arguments for your own environment.

Add this configuration to your `claude_desktop_config.json`:

```json
{
  "sentinel-writer": {
    "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": [
        "C:\\Users\\<your_path>\\node_modules\\@modelcontextprotocol\\server-sentinel-writer\\dist\\index.js"
      ],
    "env": {
      "AZURE_CLIENT_ID": "your_client_id",
      "AZURE_CLIENT_SECRET": "your_client_secret",
      "AZURE_TENANT_ID": "your_tenant_id",
      "SENTINEL_WORKSPACE_ID": "your_workspace_id",
      "DCE_ENDPOINT": "https://dce_endpoint_id.ingest.monitor.azure.com",          
      "DCR_ANOMALIES_ID": "your_data_collection_rule_id",
      "DCR_ASIMAUDITEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMAUTHENTICATIONEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMDHCPEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMDNSACTIVITYLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMFILEEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMNETWORKSESSIONLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMPROCESSEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMREGISTRYEVENTLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMUSERMANAGEMENTACTIVITYLOGS_ID": "your_data_collection_rule_id",
      "DCR_ASIMWEBSESSIONLOGS_ID": "your_data_collection_rule_id",
      "DCR_COMMONSECURITYLOG_ID": "your_data_collection_rule_id",
      "DCR_SECURITYEVENT_ID": "your_data_collection_rule_id",
      "DCR_SYSLOG_ID": "your_data_collection_rule_id"
    }
  }
}
```

## Example Usage

Claude may be directly asked to simulate different types of attacks in natural language.

### Writing an Authentication Event

```javascript
await write_security_event({
  dcrType: "ASimAuthenticationEventLogs",
  eventData: {
    EventType: "Logon",
    SrcIpAddr: "192.168.1.100",
    DvcHostname: "WIN-SERVER01",
    EventResult: "Success",
    EventMessage: "Successful logon",
    TimeGenerated: "2024-12-02T10:05:00Z",
    TargetUsername: "admin",
    EventOriginalType: 4624
  }
});
```

### Writing a Process Event

```javascript
await write_security_event({
  dcrType: "ASimProcessEventLogs",
  eventData: {
    EventType: "ProcessCreated",
    ProcessId: "4567",
    CommandLine: "powershell.exe -enc Base64EncodedCommand",
    DvcHostname: "WIN-SERVER01",
    TimeGenerated: "2024-12-02T10:06:00Z",
    ActingProcessName: "powershell.exe"
  }
});
```

## Best Practices

1. Always include proper timestamps in the TimeGenerated field
2. Use consistent identifiers (hostnames, IPs, usernames) for correlated events
3. Follow the schema requirements for each DCR type
4. Include relevant context in event messages
5. Use appropriate event types and results

## Error Handling

The server provides detailed error messages for common issues:

- Invalid event schema
- Authentication failures
- Rate limiting
- Network connectivity problems

## License

This MCP server is licensed under the MIT License. See the LICENSE file for details.
