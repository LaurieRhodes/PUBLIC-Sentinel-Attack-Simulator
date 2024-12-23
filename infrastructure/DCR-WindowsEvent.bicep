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
  name: 'writeto-WindowsEvent'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-WindowsEvent': {
        columns: [ 
          {
            name: 'TenantId'
            type: 'string'
          }
          {
            name: 'TimeGenerated'
            type: 'datetime'
          }
          {
            name: 'SourceSystem'
            type: 'string'
          }
          {
            name: 'Channel'
            type: 'string'
          }
          {
            name: 'Computer'
            type: 'string'
          }
          {
            name: 'Version'
            type: 'int'
          }
          {
            name: 'Data'
            type: 'string'
          }
          {
            name: 'Opcode'
            type: 'string'
          }
          {
            name: 'RawEventData'
            type: 'string'
          }
          {
            name: 'SystemUserId'
            type: 'string'
          }
          {
            name: 'TimeCreated'
            type: 'datetime'
          }
          {
            name: 'ManagementGroupName'
            type: 'string'
          }
          {
            name: 'Keywords'
            type: 'string'
          }
          {
            name: 'Correlation'
            type: 'string'
          }
          {
            name: 'SystemProcessId'
            type: 'int'
          }
          {
            name: 'SystemThreadId'
            type: 'int'
          }
          {
            name: 'EventRecordId'
            type: 'string'
          }
          {
            name: 'Provider'
            type: 'string'
          }
          {
            name: 'EventID'
            type: 'int'
          }
          {
            name: 'Task'
            type: 'int'
          }
          {
            name: 'EventOriginId'
            type: 'string'
          }
          {
            name: 'EventLevel'
            type: 'int'
          }
          {
            name: 'EventLevelName'
            type: 'string'
          }
          {
            name: 'EventData'
            type: 'string'
          }
        ]
      }
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-WindowsEvent'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-WindowsEvent'
        ]
        destinations: [
          'Sentinel-WindowsEvent'
        ]
        transformKql: 'source | project TenantId= toguid(TenantId), TimeGenerated, SourceSystem, Channel, Computer, Version, Data, Opcode, RawEventData, SystemUserId, TimeCreated, ManagementGroupName, Keywords, Correlation, SystemProcessId, SystemThreadId, EventRecordId, Provider, EventID, Task, EventOriginId, EventLevel, EventLevelName, EventData'
        outputStream: 'Microsoft-WindowsEvent'
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
