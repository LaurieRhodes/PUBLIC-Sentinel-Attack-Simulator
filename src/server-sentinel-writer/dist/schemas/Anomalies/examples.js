// schemas/anomalies/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-10-12T14:35:20.123Z",
      "Id": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
      "RuleId": "rule-1234-5678-90ef-ghij-klmnopqrstuv",
      "RuleName": "High CPU Usage Anomaly Detection",
      "RuleConfigVersion": "1.0",
      "RuleStatus": "Production",
      "AnomalyTemplateId": "template-1234-5678-90ef-ghij-klmnopqrstuv",
      "AnomalyTemplateName": "CPU Usage Spike Detection",
      "AnomalyTemplateVersion": "1.0",
      "AnomalyDetails": {
          "Algorithm": "Spike Detection",
          "Sensitivity": "High"
      },
      "AnomalyReasons": [
          {
              "Reason": "CPU usage exceeded threshold",
              "MetricValue": 85.0,
              "Threshold": 80.0
          }
      ],
      "Score": "0.92",
      "StartTime": "2023-10-12T14:30:00.000Z",
      "EndTime": "2023-10-12T14:35:00.000Z",
      "Entities": [
          {
              "Type": "virtualMachine",
              "Id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVirtualMachine",
              "Name": "MyVirtualMachine"
          }
      ],
      "ActivityInsights": {
          "User": "admin_user",
          "Operation": "VM Scale Set"
      },
      "DeviceInsights": {
          "OS": "Windows Server 2019",
          "Region": "eastus"
      },
      "UserInsights": {
          "UserName": "admin_user",
          "UserPrincipalName": "admin_user@contoso.com"
      },
      "ExtendedProperties": {
          "AdditionalInfo": "CPU usage anomaly detected during peak hours."
      },
      "ExtendedLinks": [
          {
              "Description": "Detailed Metrics",
              "Url": "https://portal.azure.com/#blade/MetricsBlade"
          }
      ],
      "SourceSystem": "Azure",
      "TenantId": "11111111-1111-1111-1111-111111111111",
      "WorkspaceId": "22222222-2222-2222-2222-222222222222",
      "Type": "Anomalies"
  }  
  ],
  advanced: [ 
    {
      "TimeGenerated": "2023-11-20T09:45:30.567Z",
      "Id": "complex-anomaly-5678-1234-abcd-efghijklmnop",
      "RuleId": "rule-complex-9876-5432-abcd-efghijklmnop",
      "RuleName": "Multi-Resource Latency Spike Detection",
      "RuleConfigVersion": "2.1",
      "RuleStatus": "Production",
      "AnomalyTemplateId": "template-complex-4321-8765-abcd-efghijklmnop",
      "AnomalyTemplateName": "Network Latency Multi-Region Detection",
      "AnomalyTemplateVersion": "1.5",
      "AnomalyDetails": {
          "Algorithm": "Advanced Spike Detection",
          "Sensitivity": "Medium",
          "ModelId": "model-advanced-4321"
      },
      "AnomalyReasons": [
          {
              "Reason": "Latency exceeded threshold",
              "MetricValue": 350.0,
              "BaselineValue": 120.0,
              "Threshold": 300.0,
              "Resource": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/publicIPAddresses/IP1"
          },
          {
              "Reason": "Packet loss exceeded threshold",
              "MetricValue": 25.0,
              "BaselineValue": 5.0,
              "Threshold": 20.0,
              "Resource": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/virtualNetworks/VNet1"
          }
      ],
      "Score": "0.95",
      "StartTime": "2023-11-20T09:30:00.000Z",
      "EndTime": "2023-11-20T09:45:00.000Z",
      "Entities": [
          {
              "Type": "publicIPAddress",
              "Id": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/publicIPAddresses/IP1",
              "Name": "IP1",
              "Region": "eastus"
          },
          {
              "Type": "virtualNetwork",
              "Id": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/virtualNetworks/VNet1",
              "Name": "VNet1",
              "Region": "eastus"
          },
          {
              "Type": "applicationGateway",
              "Id": "/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/applicationGateways/AppGateway1",
              "Name": "AppGateway1",
              "Region": "eastus"
          }
      ],
      "ActivityInsights": {
          "RecentConfigurationChanges": [
              {
                  "Resource": "IP1",
                  "Change": "Updated DNS settings",
                  "TimeStamp": "2023-11-20T09:00:00.000Z"
              },
              {
                  "Resource": "VNet1",
                  "Change": "Added new subnet",
                  "TimeStamp": "2023-11-19T22:15:00.000Z"
              }
          ]
      },
      "DeviceInsights": {
          "Region": "eastus",
          "NetworkDevicesImpacted": 3,
          "PrimaryDevice": "AppGateway1"
      },
      "UserInsights": {
          "InitiatedByUser": "network_admin",
          "UserPrincipalName": "network_admin@contoso.com",
          "AffectedUsersCount": 1500
      },
      "ExtendedProperties": {
          "Service": "Azure Networking",
          "DetailedAnalysisLink": "https://portal.azure.com/#blade/MetricsBlade/resourceId=/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.Network/publicIPAddresses/IP1"
      },
      "ExtendedLinks": [
          {
              "Description": "Root Cause Analysis Report",
              "Url": "https://analysis.contoso.com/reports/complex-anomaly-report"
          }
      ],
      "SourceSystem": "Azure",
      "TenantId": "22222222-2222-2222-2222-222222222222",
      "WorkspaceId": "33333333-3333-3333-3333-333333333333",
      "Type": "Anomalies"
  }  
   ],
  errorCases: [ 
    {
      "TimeGenerated": "2023-11-20T15:12:45.001Z",
      "Id": "error-case-9876-5432-abcd-efghijklmnop",
      "RuleId": "rule-error-4321-5678-abcd-efghijklmnop",
      "RuleName": "Disk Usage Anomaly Detection",
      "RuleConfigVersion": "3.0",
      "RuleStatus": "Error",
      "AnomalyTemplateId": "template-error-5432-1234-abcd-efghijklmnop",
      "AnomalyTemplateName": "Disk Usage Spike Detection",
      "AnomalyTemplateVersion": "2.1",
      "AnomalyDetails": {
          "Algorithm": "Spike Detection",
          "Sensitivity": "High"
      },
      "ErrorDetails": {
          "ErrorCode": "ANOMALY_PROCESSING_FAILURE",
          "ErrorMessage": "The anomaly detection process failed due to insufficient data points.",
          "FailureReason": "DataIngestionLag",
          "AffectedResources": [
              "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVM"
          ]
      },
      "Score": null,
      "StartTime": "2023-11-20T14:45:00.000Z",
      "EndTime": "2023-11-20T15:00:00.000Z",
      "Entities": [
          {
              "Type": "virtualMachine",
              "Id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/MyResourceGroup/providers/Microsoft.Compute/virtualMachines/MyVM",
              "Name": "MyVM",
              "Region": "eastus"
          }
      ],
      "ActivityInsights": {
          "RecentConfigurationChanges": [
              {
                  "Resource": "MyVM",
                  "Change": "Scheduled disk resize",
                  "TimeStamp": "2023-11-20T14:30:00.000Z"
              }
          ]
      },
      "ExtendedProperties": {
          "ProcessingStatus": "Failed",
          "RetryCount": 3
      },
      "SourceSystem": "Azure",
      "TenantId": "22222222-2222-2222-2222-222222222222",
      "WorkspaceId": "33333333-3333-3333-3333-333333333333",
      "Type": "Anomalies"
  }  
  ]
};