// schemas/anomalies/examples.js
export const examples = {
  basic: [ 
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "Logon",
      "EventResult": "Success",
      "EventResultDetails": "",
      "EventSeverity": "Informational",
      "EventProduct": "Microsoft Entra ID",
      "EventVendor": "Microsoft",
      "EventSchemaVersion": "0.1.3",
      "DvcIpAddr": "192.168.1.10",
      "DvcHostname": "AuthServer01",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2019",
      "LogonMethod": "Username & Password",
      "LogonProtocol": "Kerberos",
      "ActorUsername": "jdoe@contoso.com",
      "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Member",
      "TargetAppName": "ContosoApp",
      "TargetAppId": "app-1234-5678-90ab-cdefghijklmn",
      "TargetAppType": "SaaS application",
      "SrcIpAddr": "203.0.113.5",
      "SrcHostname": "JDoe-Laptop",
      "SrcGeoCountry": "US",
      "SrcGeoCity": "Seattle",
      "SrcGeoLatitude": "47.6062",
      "SrcGeoLongitude": "-122.3321",
      "EventMessage": "User jdoe@contoso.com successfully logged on to ContosoApp using Kerberos protocol."
  }  
  ],
  advanced: [ 
    {
      "TimeGenerated": "2023-12-12T15:45:30Z",
      "EventType": "Logon",
      "EventResult": "Failure",
      "EventResultDetails": "MFARequiredButNotSatisfied",
      "EventSeverity": "High",
      "EventProduct": "Microsoft Entra ID",
      "EventVendor": "Microsoft",
      "EventSchemaVersion": "0.1.3",
      "DvcIpAddr": "192.168.2.25",
      "DvcHostname": "AuthServer02",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2022",
      "LogonMethod": "Username & Password",
      "LogonProtocol": "OAuth2",
      "ActorUsername": "jdoe@contoso.com",
      "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Member",
      "TargetAppName": "Azure Portal",
      "TargetAppId": "app-5678-1234-abcd-efghijklmnop",
      "TargetAppType": "Azure Management",
      "SrcIpAddr": "198.51.100.23",
      "SrcHostname": "Unknown",
      "SrcGeoCountry": "RU",
      "SrcGeoCity": "Moscow",
      "SrcGeoLatitude": "55.7558",
      "SrcGeoLongitude": "37.6173",
      "ConditionalAccessPolicies": [
          {
              "PolicyName": "Require MFA for risky logins",
              "PolicyId": "policy-2345-6789-abcd-efghijklmnop",
              "PolicyResult": "Blocked"
          },
          {
              "PolicyName": "Deny login from blacklisted countries",
              "PolicyId": "policy-9876-5432-abcd-efghijklmnop",
              "PolicyResult": "Blocked"
          }
      ],
      "RiskDetails": {
          "RiskLevel": "High",
          "RiskReasons": [
              "Impossible travel detected",
              "Anonymous IP address"
          ]
      },
      "MfaDetails": {
          "MfaRequired": true,
          "MfaSatisfied": false,
          "MfaMethod": "Authenticator App"
      },
      "ThreatIndicators": {
          "ThreatLevel": "Critical",
          "Indicators": [
              "Login attempt from a Tor exit node",
              "Account flagged in previous brute-force attempts"
          ]
      },
      "EventMessage": "High-risk failed login attempt for user jdoe@contoso.com to Azure Portal. Conditional access policies blocked access due to multiple risk factors."
  }
  
   ],
  errorCases: [ 
    {
      "TimeGenerated": "2023-12-12T16:00:30Z",
      "EventType": "Error",
      "EventResult": "Failure",
      "EventResultDetails": "AuthenticationServiceUnavailable",
      "EventSeverity": "Critical",
      "EventProduct": "Microsoft Entra ID",
      "EventVendor": "Microsoft",
      "EventSchemaVersion": "0.1.3",
      "DvcIpAddr": "10.0.0.5",
      "DvcHostname": "AuthServer03",
      "DvcDomain": "Contoso",
      "DvcOs": "Windows Server 2022",
      "LogonMethod": "Username & Password",
      "LogonProtocol": "SAML",
      "ActorUsername": "jdoe@contoso.com",
      "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Member",
      "TargetAppName": "SharePoint Online",
      "TargetAppId": "app-5678-1234-abcd-efghijklmnop",
      "TargetAppType": "SaaS application",
      "SrcIpAddr": "203.0.113.10",
      "SrcHostname": "Unknown",
      "SrcGeoCountry": "US",
      "SrcGeoCity": "New York",
      "SrcGeoLatitude": "40.7128",
      "SrcGeoLongitude": "-74.0060",
      "ErrorDetails": {
          "ErrorCode": "AUTH_SERVICE_UNAVAILABLE",
          "ErrorMessage": "The authentication service is currently unavailable due to a backend timeout.",
          "ErrorSource": "Authentication Gateway",
          "RetryCount": 2,
          "LastRetryTimestamp": "2023-12-12T15:59:50Z"
      },
      "RiskDetails": {
          "RiskLevel": "Unknown",
          "RiskReasons": []
      },
      "ConditionalAccessPolicies": [],
      "EventMessage": "Authentication failed for user jdoe@contoso.com attempting to access SharePoint Online. The authentication service was unavailable, causing a critical error."
  }  
  ]
};