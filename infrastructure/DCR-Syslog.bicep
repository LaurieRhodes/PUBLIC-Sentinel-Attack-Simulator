@description('The location of the resources')
param location string 

@description('The name of the Data Collection Endpoint Id')
param dataCollectionEndpointId string

@description('The Log Analytics Workspace Id used for Sentinel')
param workspaceResourceId string

@description('The Service Pricipal Object ID of the Entra App')
param servicePrincipalObjectId  string

// Define the roleDefinitionResourceId using subscriptionResourceId
var roleDefinitionResourceId = subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '3913510d-42f4-4e42-8a64-420c390055eb')

resource dataCollectionRule 'Microsoft.Insights/dataCollectionRules@2022-06-01' = {
  name: 'writeto-Syslog'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-Syslog': {
        columns: [
          {
            name: 'TenantId'
            type: 'string'
          }          
          {
            name: 'SourceSystem'
            type: 'string'
          }
          {
            name: 'TimeGenerated'
            type: 'datetime'
          }
          {
            name: 'Computer'
            type: 'string'
          }
          {
            name: 'EventTime'
            type: 'datetime'
          }
          {
            name: 'Facility'
            type: 'string'
          }
          {
            name: 'HostName'
            type: 'string'
          }
          {
            name: 'SeverityLevel'
            type: 'string'
          }
          {
            name: 'SyslogMessage'
            type: 'string'
          }
          {
            name: 'ProcessID'
            type: 'int'
          }
          {
            name: 'HostIP'
            type: 'string'
          }
          {
            name: 'ProcessName'
            type: 'string'
          }
          {
            name: 'CollectorHostName'
            type: 'string'
          }
          {
            name: 'Type'
            type: 'string'
          }
        ]
      }
    }
    dataSources: {}
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-Syslog'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-Syslog'
        ]
        destinations: [
          'Sentinel-Syslog'
        ]
        transformKql: 'source | project TenantId = toguid(TenantId), SourceSystem, TimeGenerated, Computer, EventTime, Facility, HostName, SeverityLevel, SyslogMessage, ProcessID, HostIP, ProcessName, CollectorHostName, Type'
        outputStream: 'Microsoft-Syslog'
      }
    ]
  }
}


// Role Assignment to the DCR
resource roleAssignment 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  scope: dataCollectionRule // Reference to the Data Collection Rule resource
  name: guid(resourceGroup().id, roleDefinitionResourceId, dataCollectionRule.name) // Ensure uniqueness by including dataCollectionRule.name
  properties: {
    roleDefinitionId: roleDefinitionResourceId // Fully qualified role definition ID
    principalId: servicePrincipalObjectId // Principal ID of the Service Pricipals
    principalType: 'ServicePrincipal' // Correct principal type for Service Pricipals
  }
}

output immutableId string = dataCollectionRule.properties.immutableId