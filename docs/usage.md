# Usage Guide

This guide provides detailed instructions on how to use the Sentinel Writer Model Context Protocol (SWMCP) tool effectively.

## Getting Started

### Prerequisites
- Completed installation steps from [Installation Guide](installation.md)
- Configured environment as detailed in [Configuration Guide](configuration.md)
- Active Azure subscription with Sentinel workspace

## Basic Usage

### Starting the System

1. Start Claude Desktop
2. Verify MCP server status
3. Ensure Azure connectivity

### Generating Security Events

#### Basic Event Generation
```javascript
// Example of generating a basic security event
{
    "dcrType": "SecurityEvent",
    "eventData": {
        "Computer": "WIN-CLIENT01",
        "EventID": 4624,
        "Activity": "An account was successfully logged on",
        "SubjectUserName": "john.doe",
        "LogonType": 2,
        "Status": "0x0",
        "SubStatus": "0x0"
    }
}
```

#### ASIM Event Examples

1. **Authentication Event**
```javascript
{
    "dcrType": "ASimAuthenticationEventLogs",
    "eventData": {
        "TimeGenerated": "[TIMESTAMP]",
        "EventType": "Logon",
        "TargetUsername": "alice.smith",
        "TargetUserType": "Regular",
        "EventResult": "Success",
        "LogonType": "Interactive"
    }
}
```

2. **Process Event**
```javascript
{
    "dcrType": "ASimProcessEventLogs",
    "eventData": {
        "TimeGenerated": "[TIMESTAMP]",
        "EventType": "ProcessCreated",
        "ActingProcessName": "cmd.exe",
        "TargetProcessName": "powershell.exe",
        "CommandLine": "powershell.exe -NoProfile -WindowStyle Hidden",
        "EventResult": "Success"
    }
}
```

### Advanced Usage

#### Batch Event Generation
```javascript
// Example of generating multiple events
[
    {
        "dcrType": "SecurityEvent",
        "eventData": {
            // Event 1 data
        }
    },
    {
        "dcrType": "SecurityEvent",
        "eventData": {
            // Event 2 data
        }
    }
]
```

#### Using Event Templates

1. **Windows Security Event Template**
```javascript
const securityEventTemplate = {
    "dcrType": "SecurityEvent",
    "eventData": {
        "Computer": "${computerName}",
        "EventID": "${eventId}",
        "Activity": "${activity}",
        "SubjectUserName": "${userName}",
        "LogonType": "${logonType}",
        "Status": "${status}",
        "SubStatus": "${subStatus}"
    }
}
```

2. **AWS CloudTrail Template**
```javascript
const cloudTrailTemplate = {
    "dcrType": "AWSCloudTrail",
    "eventData": {
        "EventName": "${eventName}",
        "EventType": "${eventType}",
        "AWSRegion": "${region}",
        "SourceIPAddress": "${sourceIP}",
        "UserIdentity": {
            "Type": "${userType}",
            "PrincipalId": "${principalId}"
        }
    }
}
```

### Error Handling

#### Common Error Scenarios

1. **Authentication Errors**
```javascript
// Handle authentication failure
if (error.code === 'AUTH_FAILED') {
    // Verify credentials
    // Check token expiration
    // Validate permissions
}
```

2. **Schema Validation Errors**
```javascript
// Handle invalid event data
if (error.code === 'SCHEMA_VALIDATION_FAILED') {
    // Check event format
    // Verify required fields
    // Validate data types
}
```

### Best Practices

1. **Event Generation**
   - Use appropriate timestamps
   - Include all required fields
   - Follow schema specifications
   - Use realistic data values

2. **Performance**
   - Batch similar events
   - Monitor resource usage
   - Implement rate limiting
   - Handle errors gracefully

3. **Security**
   - Use secure credentials
   - Monitor access patterns
   - Log important operations
   - Regular security reviews

## Advanced Topics

### Custom Event Types

#### Creating Custom Events
```javascript
const customEvent = {
    "dcrType": "CustomLogType",
    "eventData": {
        // Custom fields and values
    }
}
```

### Integration Examples

#### PowerShell Integration
```powershell
# Example PowerShell script for event generation
$eventData = @{
    dcrType = "SecurityEvent"
    eventData = @{
        Computer = "WIN-CLIENT01"
        EventID = 4624
        # Additional fields
    }
}
```

#### Python Integration
```python
# Example Python script for event generation
event_data = {
    "dcrType": "SecurityEvent",
    "eventData": {
        "Computer": "WIN-CLIENT01",
        "EventID": 4624,
        # Additional fields
    }
}
```

### Troubleshooting

#### Common Issues and Solutions

1. **Connection Issues**
   - Verify network connectivity
   - Check Azure status
   - Validate endpoints
   - Review firewall rules

2. **Event Processing Issues**
   - Validate event schema
   - Check DCR configuration
   - Review transformation rules
   - Monitor ingestion pipeline

3. **Performance Issues**
   - Monitor resource usage
   - Check batch sizes
   - Review rate limits
   - Optimize queries

### Monitoring and Maintenance

#### Health Checks
- Server status
- Event processing rates
- Error rates
- Resource utilization

#### Maintenance Tasks
1. Regular updates
2. Log rotation
3. Performance optimization
4. Security reviews

## Additional Resources

### Reference Documentation
- [Azure Monitor Documentation](https://docs.microsoft.com/en-us/azure/azure-monitor/)
- [Microsoft Sentinel Documentation](https://docs.microsoft.com/en-us/azure/sentinel/)
- [ASIM Documentation](https://docs.microsoft.com/en-us/azure/sentinel/asim-overview)

### Support
- GitHub Issues
- Documentation Updates
- Community Forums