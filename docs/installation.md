# Installation Guide

This guide provides detailed instructions for installing and setting up the Sentinel Writer Model Context Protocol (SWMCP) tool.

## Prerequisites

### Required Software

1. **Windows Operating System**
2. **Node.js**
   - Download and install from [nodejs.org](https://nodejs.org)
   - Minimum version required: 14.x
3. **Azure CLI**
   - Required for deployment of Azure resources
4. **Claude Desktop**
   - Must be installed and configured

### Required Azure Resources

- Azure subscription with contributor access
- Microsoft Sentinel workspace
- Appropriate permissions to create and manage Data Collection Rules

## Installation Steps

### 1. Claude Desktop

Download and install Claude Desktop from [Download - Claude](https://claude.ai/download).

### 2. Node.js Dependencies

```bash
# Install the Model Context Protocol dependencies
npm install @modelcontextprotocol/server-brave-search
npm install @modelcontextprotocol/sdk
npm install node-fetch
```

### 3. Azure Resource Deployment

Customise the Bicep parameters.json file with the location of your intended deployment, Log Analytics workspace ID and Service Principal Object ID.

Claude Desktop will need An Entra Application Registration created with an associated key.  Application Registrations are directly linked to an "Enterprise Application" which is also known as a "Service Principal".  The required Service Principal Object ID is found on the Enterprise Application object, not the Application Registration!

Deploy the required Data Collection Rules using the provided Bicep templates:

```powershell
# Deploy main template
az deployment group create --resource-group <your-resource-group> --template-file main.bicep --parameters parameters.json
```

The deployment will create:

- Data Collection Rules for each supported log type
- A data Data Collection Endpoint
- Necessary IAM roles and permissions

The Bicep output will list element IDs required with the Claude Desktop configuration file:

```json
    "outputs": {
      "dcE_ENDPOINT": {
        "type": "String",
        "value": "https://simulatordce-c12v.australiasoutheast-1.ingest.monitor.azure.com"
      },
      "dcR_ANOMALIES_ID": {
        "type": "String",
        "value": "dcr-53295834471905348921345744719021"
      },
      "dcR_ASIMAUDITEVENTLOGS_ID": {
        "type": "String",
        "value": "dcr-b8d153295834471905348921d8c63f9"
      },
```

### 4. Claude Desktop Configuration

1. Navigate to the Claude Desktop configuration directory:
   
   ```
   C:\\Users\\[Username]\\AppData\\Roaming\\Claude
   ```

2. Copy the default claude_desktop_config.json file from the /src folder to the the Claude Desktop configuration directory.  It is presumed that the the Sentinel Writer Model Context Protocol (SWMCP) tool will be used with the Brave Search tool (which is referenced in claude_desktop_config.json and requires its own key).
   
   Due to a current bug with the initial release of Claude Desktop support with Model Context Protocol, nde.exe is hardcoded to directly reference MCP servers as arguments.  
   
   ```json
   {
     "mcpServers": {
       "sentinel-writer": {
         "command": "C:\\Program Files\\nodejs\\node.exe",
         "args": [
           "C:\\Users\\[Username]\\node_modules\\@modelcontextprotocol\\server-sentinel-writer\\dist\\index.js"
         ],
         "env": {
           "TENANT_ID": "<your-tenant-id>",
           "APP_ID": "<your-app-id>",
           "APP_SECRET": "<your-app-secret>",
           "DCE_ENDPOINT": "<your-dce-endpoint>",
           // Add all required DCR IDs
         }
       }
     }
   }
   ```

3. Replace all placeholder values with your actual Azure configuration details.

### 5. Environment Configuration

Ensure all required environment variables are properly set in the claude_desktop_config.json file:

- TENANT_ID: Azure AD tenant ID
- APP_ID: Azure AD application ID
- APP_SECRET: Azure AD application secret
- DCE_ENDPOINT: Data Collection Endpoint URL
- DCR_*_ID: Data Collection Rule IDs for each log type (will be displayed at the completion of the infrastructure install using the Bicep file provided)

### 6. Verification

To verify the installation:

1. Start Claude Desktop
2. Check the MCP server status
3. Attempt to generate a test security event

## Troubleshooting

### Common Issues

1. **Node.js Path Issues**
   
   - Ensure Node.js is properly installed and in your system PATH
   - Verify the path in claude_desktop_config.json matches your Node.js installation

2. **Permission Issues**
   
   - Verify Azure credentials have appropriate permissions
   - Check if all required role assignments are in place

3. **Configuration File Issues**
   
   - Validate JSON syntax in claude_desktop_config.json
   - Ensure all required environment variables are properly set

### Getting Help

If you encounter issues not covered in this guide:

1. Check the GitHub issues page
2. Review the logs in Claude Desktop
3. Verify Azure resource deployment logs

## Next Steps

After successful installation:

1. Review the [Configuration Guide](configuration.md) for detailed setup options
2. Check the [Usage Guide](usage.md) for operation instructions
3. Review the [Architecture Overview](architecture.md) for system understanding