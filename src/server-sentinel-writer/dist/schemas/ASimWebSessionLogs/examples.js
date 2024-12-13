// schemas/ASimWebSessionLogs/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "WebSessionStarted",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Azure Application Gateway",
      "EventVendor": "Microsoft",
      "EventSchema": "WebSession",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.50",
      "DvcHostname": "AppGateway01",
      "SrcIpAddr": "203.0.113.5",
      "SrcHostname": "ClientDevice01",
      "DstIpAddr": "10.0.0.5",
      "DstHostname": "WebApp01",
      "Url": "https://webapp01.contoso.com/login",
      "HttpMethod": "POST",
      "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "SessionId": "abcd1234-5678-90ef-ghij-klmnopqrstuv",
      "EventMessage": "Web session started by 203.0.113.5 to https://webapp01.contoso.com/login using POST method."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "WebSessionEnded",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "Azure Application Gateway",
      "EventVendor": "Microsoft",
      "EventSchema": "WebSession",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.50",
      "DvcHostname": "AppGateway01",
      "SrcIpAddr": "198.51.100.15",
      "SrcHostname": "UntrustedDevice",
      "DstIpAddr": "10.0.0.5",
      "DstHostname": "WebApp01",
      "Url": "https://webapp01.contoso.com/admin",
      "HttpMethod": "GET",
      "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "SessionId": "efgh5678-1234-abcd-ijkl-mnopqrstuvwx",
      "SessionDuration": 300,
      "ThreatIndicators": {
        "ThreatType": "SuspiciousAdminAccess",
        "Indicators": [
          "Access to sensitive URL /admin from untrusted IP",
          "Unusual session duration for admin page"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "ThreatIntelligence",
        "ConfidenceScore": 0.9,
        "AnomalyType": "Unusual Web Session Behavior"
      },
      "EventMessage": "High-severity web session from 198.51.100.15 ended after accessing sensitive URL https://webapp01.contoso.com/admin."
    }
  ],
  errorCases: []
};
