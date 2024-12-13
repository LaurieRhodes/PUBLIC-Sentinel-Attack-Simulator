// schemas/CommonSecurityLog/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "Facility": "auth",
      "SeverityLevel": "info",
      "Computer": "Firewall01",
      "DeviceVendor": "Palo Alto Networks",
      "DeviceProduct": "Palo Alto Firewall",
      "SourceAddress": "203.0.113.5",
      "DestinationAddress": "10.0.0.15",
      "SourcePort": 443,
      "DestinationPort": 8443,
      "Protocol": "TCP",
      "Action": "Allowed",
      "Message": "Traffic from 203.0.113.5 to 10.0.0.15:8443 matched rule AllowHTTPS and was allowed."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "Facility": "auth",
      "SeverityLevel": "crit",
      "Computer": "Firewall01",
      "DeviceVendor": "Palo Alto Networks",
      "DeviceProduct": "Palo Alto Firewall",
      "SourceAddress": "198.51.100.10",
      "DestinationAddress": "10.0.0.20",
      "SourcePort": 52345,
      "DestinationPort": 80,
      "Protocol": "TCP",
      "Action": "Blocked",
      "Message": "High-severity event: Traffic from 198.51.100.10 to 10.0.0.20:80 was blocked by rule BlockMalwareTraffic due to detected malware communication."
    }
  ],
  errorCases: []
};
