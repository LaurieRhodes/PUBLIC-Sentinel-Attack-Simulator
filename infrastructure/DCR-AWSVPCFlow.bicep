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
  name: 'writeto-AWSVPCFlow'
  location: location
  properties: {
    dataCollectionEndpointId: dataCollectionEndpointId
    streamDeclarations: {
      'Custom-AWSVPCFlow': {
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
            name: 'Action'
            type: 'string'
          }
          {
            name: 'Protocol'
            type: 'int'
          }
          {
            name: 'End'
            type: 'datetime'
          }
          {
            name: 'InstanceId'
            type: 'string'
          }
          {
            name: 'Region'
            type: 'string'
          }
          {
            name: 'Version'
            type: 'int'
          }
          {
            name: 'SubnetId'
            type: 'string'
          }
          {
            name: 'AccountId'
            type: 'string'
          }
          {
            name: 'InterfaceId'
            type: 'string'
          }
          {
            name: 'SrcAddr'
            type: 'string'
          }
          {
            name: 'DstAddr'
            type: 'string'
          }
          {
            name: 'SrcPort'
            type: 'int'
          }
          {
            name: 'DstPort'
            type: 'int'
          }
          {
            name: 'Packets'
            type: 'int'
          }
          {
            name: 'Bytes'
            type: 'long'
          }
          {
            name: 'LogStatus'
            type: 'string'
          }
          {
            name: 'VpcId'
            type: 'string'
          }
          {
            name: 'TcpFlags'
            type: 'int'
          }
          {
            name: 'TrafficType'
            type: 'string'
          }
          {
            name: 'PktSrcAddr'
            type: 'string'
          }
          {
            name: 'PktDstAddr'
            type: 'string'
          }
          {
            name: 'AzId'
            type: 'string'
          }
          {
            name: 'SublocationType'
            type: 'string'
          }
          {
            name: 'SublocationId'
            type: 'string'
          }
          {
            name: 'PktSrcAwsService'
            type: 'string'
          }
          {
            name: 'PktDstAwsService'
            type: 'string'
          }
          {
            name: 'FlowDirection'
            type: 'string'
          }
          {
            name: 'TrafficPath'
            type: 'string'
          }
        ]
      }
    }
    destinations: {
      logAnalytics: [
        {
          workspaceResourceId: workspaceResourceId
          name: 'Sentinel-AWSVPCFlow'
        }
      ]
    }
    dataFlows: [
      {
        streams: [
          'Custom-AWSVPCFlow'
        ]
        destinations: [
          'Sentinel-AWSVPCFlow'
        ]
        transformKql: 'source | project TenantId= toguid(TenantId), TimeGenerated, SourceSystem, Action, Protocol, End, InstanceId, Region, Version, SubnetId, AccountId, InterfaceId, SrcAddr, DstAddr, SrcPort, DstPort, Packets= toint(Packets), Bytes, LogStatus, VpcId, TcpFlags, TrafficType, PktSrcAddr, PktDstAddr, AzId, SublocationType, SublocationId, PktSrcAwsService, PktDstAwsService, FlowDirection, TrafficPath'
        outputStream: 'Microsoft-AWSVPCFlow'
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
