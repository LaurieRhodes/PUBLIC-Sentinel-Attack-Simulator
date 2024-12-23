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
  name: 'writeto-GCPAuditLogs'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-GCPAuditLogs': {
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
            name: 'Status'
            type: 'string'
          }
          {
            name: 'SourceSystem'
            type: 'string'
          }
          {
            name: 'Severity'
            type: 'string'
          }
          {
            name: 'Response'
            type: 'string'
          }
          {
            name: 'StatusMessage'
            type: 'string'
          }
          {
            name: 'Request'
            type: 'string'
          }
          {
            name: 'ServiceName'
            type: 'string'
          }
          {
            name: 'Timestamp'
            type: 'datetime'
          }
          {
            name: 'ProjectId'
            type: 'string'
          }
          {
            name: 'AuthenticationInfo'
            type: 'dynamic'
          }
          {
            name: 'AuthorizationInfo'
            type: 'dynamic'
          }
          {
            name: 'RequestMetadata'
            type: 'dynamic'
          }
          {
            name: 'Metadata'
            type: 'dynamic'
          }
          {
            name: 'PrincipalEmail'
            type: 'string'
          }
          {
            name: 'LogName'
            type: 'string'
          }
          {
            name: 'GCPResourceType'
            type: 'string'
          }
          {
            name: 'Subscription'
            type: 'string'
          }
          {
            name: 'ResourceLocation'
            type: 'dynamic'
          }
          {
            name: 'ResourceOriginalState'
            type: 'dynamic'
          }
          {
            name: 'ServiceData'
            type: 'dynamic'
          }
          {
            name: 'InsertId'
            type: 'string'
          }
          {
            name: 'MethodName'
            type: 'string'
          }
          {
            name: 'GCPResourceName'
            type: 'string'
          }
          {
            name: 'NumResponseItems'
            type: 'string'
          }
        ]
      }
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-GCPAuditLogs'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-GCPAuditLogs'
        ]
        destinations: [
          'Sentinel-GCPAuditLogs'
        ]
        transformKql: 'source | project TenantId= toguid(TenantId), TimeGenerated, Status, SourceSystem, Severity, Response, StatusMessage, Request, ServiceName, Timestamp, ProjectId, AuthenticationInfo, AuthorizationInfo, RequestMetadata, Metadata, PrincipalEmail, LogName, GCPResourceType, Subscription, ResourceLocation, ResourceOriginalState, ServiceData, InsertId, MethodName, GCPResourceName, NumResponseItems'
        outputStream: 'Microsoft-GCPAuditLogs'
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
