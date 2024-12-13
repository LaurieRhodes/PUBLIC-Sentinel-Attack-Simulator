// schemas/AWSVPCFlow/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "FlowDirection": "Ingress",
      "Protocol": "TCP",
      "SrcIpAddr": "192.168.1.5",
      "SrcPortNumber": 443,
      "DstIpAddr": "203.0.113.15",
      "DstPortNumber": 12345,
      "Packets": 20,
      "Bytes": 2000,
      "Action": "ACCEPT",
      "LogStatus": "OK",
      "EventMessage": "Network flow from 192.168.1.5:443 to 203.0.113.15:12345 accepted over TCP."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "FlowDirection": "Egress",
      "Protocol": "TCP",
      "SrcIpAddr": "198.51.100.10",
      "SrcPortNumber": 8080,
      "DstIpAddr": "192.0.2.25",
      "DstPortNumber": 3389,
      "Packets": 5000,
      "Bytes": 500000,
      "Action": "REJECT",
      "LogStatus": "OK",
      "ThreatIndicators": {
        "ThreatType": "SuspiciousRDPConnection",
        "Indicators": [
          "Large volume of packets to RDP port",
          "Connection attempt from untrusted IP address"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "BehavioralAnalysis",
        "ConfidenceScore": 0.9,
        "AnomalyType": "RDP Brute Force Attempt"
      },
      "EventMessage": "High-severity suspicious network flow detected: Connection attempt from 198.51.100.10 to RDP port 192.0.2.25:3389 rejected."
    }
  ],
  errorCases: []
};
