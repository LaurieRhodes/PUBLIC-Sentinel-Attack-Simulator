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
  name: 'writeto-Anomalies'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-Anomalies': {
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
            name: 'Id'
            type: 'string'
          }
          {
            name: 'UserPrincipalName'
            type: 'string'
          }
          {
            name: 'UserName'
            type: 'string'
          }
          {
            name: 'Description'
            type: 'string'
          }
          {
            name: 'StartTime'
            type: 'datetime'
          }
          {
            name: 'EndTime'
            type: 'datetime'
          }
          {
            name: 'ExtendedProperties'
            type: 'dynamic'
          }
          {
            name: 'RuleName'
            type: 'string'
          }
          {
            name: 'RuleId'
            type: 'string'
          }
          {
            name: 'WorkspaceId'
            type: 'string'
          }
          {
            name: 'VendorName'
            type: 'string'
          }
          {
            name: 'AnomalyTemplateId'
            type: 'string'
          }
          {
            name: 'AnomalyTemplateName'
            type: 'string'
          }
          {
            name: 'AnomalyTemplateVersion'
            type: 'string'
          }
          {
            name: 'RuleStatus'
            type: 'string'
          }
          {
            name: 'RuleConfigVersion'
            type: 'string'
          }
          {
            name: 'Score'
            type: 'string'
          }
          {
            name: 'ExtendedLinks'
            type: 'dynamic'
          }
          {
            name: 'Tactics'
            type: 'string'
          }
          {
            name: 'Techniques'
            type: 'string'
          }
          {
            name: 'SourceIpAddress'
            type: 'string'
          }
          {
            name: 'SourceLocation'
            type: 'dynamic'
          }
          {
            name: 'SourceDevice'
            type: 'string'
          }
          {
            name: 'DestinationIpAddress'
            type: 'string'
          }
          {
            name: 'DestinationLocation'
            type: 'dynamic'
          }
          {
            name: 'DestinationDevice'
            type: 'string'
          }
          {
            name: 'ActivityInsights'
            type: 'dynamic'
          }
          {
            name: 'DeviceInsights'
            type: 'dynamic'
          }
          {
            name: 'UserInsights'
            type: 'dynamic'
          }
          {
            name: 'AnomalyReasons'
            type: 'dynamic'
          }
          {
            name: 'Entities'
            type: 'dynamic'
          }
          {
            name: 'AnomalyDetails'
            type: 'dynamic'
          }
        ]
      }
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-Anomalies'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-Anomalies'
        ]
        destinations: [
          'Sentinel-Anomalies'
        ]
        transformKql: 'source | project TenantId= toguid(TenantId), TimeGenerated, SourceSystem, Id, UserPrincipalName, UserName, Description, StartTime, EndTime, ExtendedProperties, RuleName, RuleId, WorkspaceId, VendorName, AnomalyTemplateId, AnomalyTemplateName, AnomalyTemplateVersion, RuleStatus, RuleConfigVersion, Score= todouble(Score), ExtendedLinks, Tactics, Techniques, SourceIpAddress, SourceLocation, SourceDevice, DestinationIpAddress, DestinationLocation, DestinationDevice, ActivityInsights, DeviceInsights, UserInsights, AnomalyReasons, Entities, AnomalyDetails'
        outputStream: 'Microsoft-Anomalies'
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
output id string = dataCollectionRule.id
