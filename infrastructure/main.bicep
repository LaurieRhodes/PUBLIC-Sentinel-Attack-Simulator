param location string = resourceGroup().location

// Sentinel Workspace Parameters
param workspaceResourceId string 

// Data Collection Endpoint 
param dataCollectionEndpointName string

@description('The Principal ID of the Service Principal')
param servicePrincipalObjectId string



// Data Collection Endpoint Resource
resource dataCollectionEndpoint 'Microsoft.Insights/dataCollectionEndpoints@2022-06-01' = {
  name: dataCollectionEndpointName
  location: location
  properties: {
    networkAcls: {
      publicNetworkAccess: 'Enabled' // Or 'Disabled' if you want to restrict access
    }
  }
}



// Deploy Data Collection Rules
module DCRAnomalies 'DCR-Anomalies.bicep' = {
  name: 'Anomalies'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}


module DCRASimAuditEventLogs 'DCR-ASimAuditEventLogs.bicep' = {
  name: 'ASimAuditEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}


module DCRASimAuthenticationEventLogs 'DCR-ASimAuthenticationEventLogs.bicep' = {
  name: 'DCRASimAuthenticationEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimDhcpEventLogs 'DCR-ASimDhcpEventLogs.bicep' = {
  name: 'ASimDhcpEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimDnsActivityLogs 'DCR-ASimDnsActivityLogs.bicep' = {
  name: 'ASimDnsActivityLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimFileEventLogs 'DCR-ASimFileEventLogs.bicep' = {
  name: 'ASimFileEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimNetworkSessionLogs 'DCR-ASimNetworkSessionLogs.bicep' = {
  name: 'ASimNetworkSessionLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimProcessEventLogs 'DCR-ASimProcessEventLogs.bicep' = {
  name: 'ASimProcessEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimRegistryEventLogs 'DCR-ASimRegistryEventLogs.bicep' = {
  name: 'ASimRegistryEventLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimUserManagementActivityLogs 'DCR-ASimUserManagementActivityLogs.bicep' = {
  name: 'ASimUserManagementActivityLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRASimWebSessionLogs 'DCR-ASimWebSessionLogs.bicep' = {
  name: 'ASimWebSessionLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRAWSCloudTrail 'DCR-AWSCloudTrail.bicep' = {
  name: 'DeployDCRAWSCloudTrail'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRAWSCloudWatch 'DCR-AWSCloudWatch.bicep' = {
  name: 'DeployDCRAWSCloudWatch'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRAWSGuardDuty 'DCR-AWSGuardDuty.bicep' = {
  name: 'DeployDCRAWSGuardDuty'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRAWSVPCFlow 'DCR-AWSVPCFlow.bicep' = {
  name: 'DeployDCRAWSVPCFlow'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRCommonSecurityLog 'DCR-CommonSecurityLog.bicep' = {
  name: 'DeployDCRCommonSecurityLog'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRGCPAuditLogs 'DCR-GCPAuditLogs.bicep' = {
  name: 'DeployDCRGCPAuditLogs'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRGoogleCloudSCC 'DCR-GoogleCloudSCC.bicep' = {
  name: 'DeployDCRGoogleCloudSCC'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}


module DCRSecurityEvent 'DCR-SecurityEvent.bicep' = {
  name: 'DeployDCRSecurityEvent'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRSyslog 'DCR-Syslog.bicep' = {
  name: 'DeployDCRSyslog'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}

module DCRWindowsEvent 'DCR-WindowsEvent.bicep' = {
  name: 'DeployDCRWindowsEvent'
  params: {
    location: location
    workspaceResourceId: workspaceResourceId
    dataCollectionEndpointId: dataCollectionEndpoint.id
    servicePrincipalObjectId: servicePrincipalObjectId
  }
}





//output storageAccountName string = TransactStorageAccount.outputs.storageAccountName
//output resourceGroupName string = resourceGroup().name

output DCE_ENDPOINT string = dataCollectionEndpoint.properties.logsIngestion.endpoint

output DCR_ANOMALIES_ID string = DCRAnomalies.outputs.immutableId
output DCR_ASIMAUDITEVENTLOGS_ID string = DCRASimAuditEventLogs.outputs.immutableId
output DCR_ASIMAUTHENTICATIONEVENTLOGS_ID string = DCRASimAuthenticationEventLogs.outputs.immutableId
output DCR_ASIMDHCPEVENTLOGS_ID string = DCRASimDhcpEventLogs.outputs.immutableId
output DCR_ASIMDNSACTIVITYLOGS_ID string = DCRASimDnsActivityLogs.outputs.immutableId
output DCR_ASIMFILEEVENTLOGS_ID string = DCRASimFileEventLogs.outputs.immutableId
output DCR_ASIMNETWORKSESSIONLOGS_ID string = DCRASimNetworkSessionLogs.outputs.immutableId
output DCR_ASIMPROCESSEVENTLOGS_ID string = DCRASimProcessEventLogs.outputs.immutableId
output DCR_ASIMREGISTRYEVENTLOGS_ID string = DCRASimRegistryEventLogs.outputs.immutableId
output DCR_ASIMUSERMANAGEMENTACTIVITYLOGS_ID string = DCRASimUserManagementActivityLogs.outputs.immutableId
output DCR_ASIMWEBSESSIONLOGS_ID string = DCRASimWebSessionLogs.outputs.immutableId
output DCR_AWSCLOUDTRAIL_ID string = DCRAWSCloudTrail.outputs.immutableId
output DCR_AWSCLOUDWATCH_ID string = DCRAWSCloudWatch.outputs.immutableId
output DCR_AWSGUARDDUTY_ID string = DCRAWSGuardDuty.outputs.immutableId
output DCR_AWSVPCFLOW_ID string = DCRAWSVPCFlow.outputs.immutableId
output DCR_COMMONSECURITYLOG_ID string = DCRCommonSecurityLog.outputs.immutableId
output DCR_GCPAUDITLOGS_ID string = DCRGCPAuditLogs.outputs.immutableId
output DCR_GOOGLECLOUDSCC_ID string = DCRGoogleCloudSCC.outputs.immutableId
output DCR_SECURITYEVENT_ID string = DCRSecurityEvent.outputs.immutableId
output DCR_SYSLOG_ID string = DCRSyslog.outputs.immutableId
output DCR_WINDOWSEVENT_ID string = DCRWindowsEvent.outputs.immutableId
