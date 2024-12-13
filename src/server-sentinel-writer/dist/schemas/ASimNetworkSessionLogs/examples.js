// schemas/anomalies/examples.js
export const examples = {
  basic: [ 
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "NetworkSession",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Contoso Firewall",
      "EventVendor": "Contoso",
      "EventSchema": "Network",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.1",
      "DvcHostname": "Firewall01",
      "DvcOs": "ContosoOS 5.0",
      "SrcIpAddr": "10.0.0.5",
      "SrcPortNumber": 12345,
      "SrcHostname": "ClientDevice01",
      "SrcMacAddr": "00:1A:2B:3C:4D:5E",
      "SrcGeoCountry": "US",
      "SrcGeoCity": "Seattle",
      "SrcGeoLatitude": "47.6062",
      "SrcGeoLongitude": "-122.3321",
      "DstIpAddr": "172.16.0.10",
      "DstPortNumber": 80,
      "DstHostname": "WebServer01",
      "DstMacAddr": "00:1A:2B:3C:4D:5F",
      "DstGeoCountry": "US",
      "DstGeoCity": "Redmond",
      "DstGeoLatitude": "47.6740",
      "DstGeoLongitude": "-122.1215",
      "Protocol": "TCP",
      "EventStartTime": "2023-12-12T08:22:00Z",
      "EventEndTime": "2023-12-12T08:23:00Z",
      "EventDuration": 60,
      "EventCount": 1,
      "SrcBytes": 1500,
      "DstBytes": 3000,
      "SrcPackets": 10,
      "DstPackets": 20,
      "EventMessage": "Network session established from 10.0.0.5:12345 to 172.16.0.10:80 over TCP."
  }
  ],
  advanced: [ 
    {
      "TimeGenerated": "2023-12-12T10:45:15Z",
      "EventType": "NetworkSession",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "Contoso Firewall",
      "EventVendor": "Contoso",
      "EventSchema": "Network",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.1",
      "DvcHostname": "Firewall01",
      "DvcOs": "ContosoOS 5.0",
      "SrcIpAddr": "203.0.113.10",
      "SrcPortNumber": 54321,
      "SrcHostname": "UntrustedHost",
      "SrcMacAddr": "00:1A:2B:3C:4D:5F",
      "SrcGeoCountry": "RU",
      "SrcGeoCity": "Moscow",
      "SrcGeoLatitude": "55.7558",
      "SrcGeoLongitude": "37.6173",
      "DstIpAddr": "10.0.0.10",
      "DstPortNumber": 3389,
      "DstHostname": "RemoteDesktopServer",
      "DstMacAddr": "00:1A:2B:3C:4D:60",
      "DstGeoCountry": "US",
      "DstGeoCity": "Seattle",
      "DstGeoLatitude": "47.6062",
      "DstGeoLongitude": "-122.3321",
      "Protocol": "TCP",
      "EventStartTime": "2023-12-12T10:40:00Z",
      "EventEndTime": "2023-12-12T10:45:00Z",
      "EventDuration": 300,
      "EventCount": 5,
      "SrcBytes": 1024000,
      "DstBytes": 2048000,
      "SrcPackets": 200,
      "DstPackets": 400,
      "ThreatIndicators": {
          "ThreatType": "SuspiciousConnection",
          "Indicators": [
              "Connection from high-risk geolocation",
              "Targeting RDP port (3389)"
          ]
      },
      "ExtendedProperties": {
          "DetectionSource": "ThreatIntelligence",
          "ConfidenceScore": 0.9,
          "ConnectionType": "Inbound",
          "SessionAnomalyType": "Unusual Geolocation Access",
          "FirewallAction": "Allowed"
      },
      "EventMessage": "High-severity network session established from 203.0.113.10:54321 (Moscow, RU) to 10.0.0.10:3389 (Seattle, US) over TCP targeting RDP port."
  }  
  ],
  errorCases: []
};