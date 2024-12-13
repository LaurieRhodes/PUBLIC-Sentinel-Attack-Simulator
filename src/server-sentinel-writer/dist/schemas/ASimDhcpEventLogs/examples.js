// schemas/anomalies/examples.js
export const examples = {
  basic: [ 
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "LeaseGranted",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Microsoft DHCP Server",
      "EventVendor": "Microsoft",
      "EventSchema": "DHCP",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.1",
      "DvcHostname": "DHCPServer01",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2019",
      "SrcIpAddr": "192.168.1.100",
      "SrcHostname": "ClientDevice01",
      "SrcMacAddr": "00:1A:2B:3C:4D:5E",
      "DhcpLeaseDuration": 86400,
      "EventMessage": "DHCP lease granted to ClientDevice01 (192.168.1.100) with MAC address 00:1A:2B:3C:4D:5E for 86400 seconds."
  }  
  ],
  advanced: [ 
    {
      "TimeGenerated": "2023-12-12T10:45:15Z",
      "EventType": "LeaseDenied",
      "EventResult": "Failure",
      "EventResultDetails": "AddressPoolExhausted",
      "EventSeverity": "High",
      "EventProduct": "Microsoft DHCP Server",
      "EventVendor": "Microsoft",
      "EventSchema": "DHCP",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.1",
      "DvcHostname": "DHCPServer01",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2019",
      "SrcIpAddr": "192.168.1.150",
      "SrcHostname": "Unknown",
      "SrcMacAddr": "00:1A:2B:3C:4D:5F",
      "SrcMacVendor": "Intel Corporation",
      "DhcpLeaseDuration": null,
      "DhcpScopeName": "MainOfficeScope",
      "DhcpRelayAgent": "192.168.0.254",
      "AnomalyDetails": {
          "AnomalyType": "MACAddressSpoofing",
          "Confidence": 0.85,
          "DetectionMethod": "BehavioralAnalysis"
      },
      "ExtendedProperties": {
          "MaxLeasesInScope": 100,
          "CurrentLeasesInScope": 100,
          "ClientClass": "Unknown"
      },
      "EventMessage": "DHCP lease denied for MAC address 00:1A:2B:3C:4D:5F due to address pool exhaustion. Anomaly detected: MAC address spoofing attempt with high confidence."
  }   
  ],
  errorCases: [ 
    {
      "TimeGenerated": "2023-12-12T11:15:45Z",
      "EventType": "Error",
      "EventResult": "Failure",
      "EventResultDetails": "ServerConfigurationError",
      "EventSeverity": "Critical",
      "EventProduct": "Microsoft DHCP Server",
      "EventVendor": "Microsoft",
      "EventSchema": "DHCP",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.1",
      "DvcHostname": "DHCPServer01",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2019",
      "SrcIpAddr": null,
      "SrcHostname": null,
      "SrcMacAddr": null,
      "DhcpScopeName": "MainOfficeScope",
      "ErrorDetails": {
          "ErrorCode": "DHCP_SERVER_UNAVAILABLE",
          "ErrorMessage": "The DHCP server failed to start due to a misconfigured IP address exclusion range.",
          "ErrorSource": "ConfigurationService",
          "LastActionAttempted": "Load DHCP Scope Configuration",
          "FailureTimestamp": "2023-12-12T11:14:30Z"
      },
      "ExtendedProperties": {
          "ExcludedIpRange": "192.168.1.1 - 192.168.1.255",
          "ScopeConfiguredIpRange": "192.168.1.1 - 192.168.1.255",
          "ScopeConflictDetected": true
      },
      "EventMessage": "Critical error on DHCPServer01: The DHCP service failed to start due to a misconfigured IP exclusion range, causing a conflict in MainOfficeScope."
  }
  
  ]
};