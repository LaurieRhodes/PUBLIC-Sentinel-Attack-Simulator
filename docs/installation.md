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

### 1. Node.js Dependencies

```bash
# Install the Model Context Protocol dependencies
npm install @modelcontextprotocol/server-brave-search
npm install @modelcontextprotocol/server-sentinel-writer
```

### 2. Azure Resource Deployment

Deploy the required Data Collection Rules using the provided Bicep templates:

```powershell
# Deploy main template
az deployment group create --resource-group <your-resource-group> --template-file main.bicep --parameters parameters.json
```

The deployment will create:

- Data Collection Rules for each supported log type
- Required Data Collection Endpoints
- Necessary IAM roles and permissions

### 3. Claude Desktop Configuration

1. Navigate to the Claude Desktop configuration directory:
   
   ```
   C:\\Users\\[Username]\\AppData\\Roaming\\Claude
   ```

2. Create or modify the claude_desktop_config.json file:
   
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

### 4. Environment Configuration

Ensure all required environment variables are properly set in the claude_desktop_config.json file:

- TENANT_ID: Azure AD tenant ID
- APP_ID: Azure AD application ID
- APP_SECRET: Azure AD application secret
- DCE_ENDPOINT: Data Collection Endpoint URL
- DCR_*_ID: Data Collection Rule IDs for each log type

### 5. Verification

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