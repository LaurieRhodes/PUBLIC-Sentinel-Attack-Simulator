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
  name: 'writeto-AWSCloudWatch'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-AWSCloudWatch': {
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
            name: 'Message'
            type: 'string'
          }
          {
            name: 'ExtractedTime'
            type: 'datetime'
          }
        ]
      }
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-AWSCloudWatch'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-AWSCloudWatch'
        ]
        destinations: [
          'Sentinel-AWSCloudWatch'
        ]
        transformKql: 'source | project TenantId= toguid(TenantId), TimeGenerated, SourceSystem, Message, ExtractedTime'
        outputStream: 'Microsoft-AWSCloudWatch'
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
