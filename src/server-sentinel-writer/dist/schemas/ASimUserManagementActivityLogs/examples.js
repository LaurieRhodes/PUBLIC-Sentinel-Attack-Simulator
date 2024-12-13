// schemas/ASimUserManagementActivityLogs/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "UserCreated",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Azure Active Directory",
      "EventVendor": "Microsoft",
      "EventSchema": "UserManagementActivity",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.100",
      "DvcHostname": "AzureADServer",
      "ActorUsername": "admin@contoso.com",
      "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Admin",
      "TargetUsername": "jdoe@contoso.com",
      "TargetUserId": "S-1-5-21-3623811015-3361044348-30300820-5678",
      "TargetUserIdType": "SID",
      "TargetUserType": "Member",
      "EventMessage": "Admin admin@contoso.com created a new user jdoe@contoso.com."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "UserRoleChanged",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "Azure Active Directory",
      "EventVendor": "Microsoft",
      "EventSchema": "UserManagementActivity",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "203.0.113.45",
      "DvcHostname": "AzureAdminConsole",
      "ActorUsername": "compromisedadmin@contoso.com",
      "ActorUserId": "S-1-5-21-9876543210-1234567890-1122334455-9101",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Admin",
      "TargetUsername": "malicioususer@contoso.com",
      "TargetUserId": "S-1-5-21-9876543210-1234567890-1122334455-5678",
      "TargetUserIdType": "SID",
      "TargetUserType": "Guest",
      "RoleAssigned": "Global Administrator",
      "ThreatIndicators": {
        "ThreatType": "PrivilegedRoleAssignment",
        "Indicators": [
          "Unusual role assignment activity",
          "Role assigned to a guest account"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "BehavioralAnalysis",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Suspicious User Role Change"
      },
      "EventMessage": "Admin compromisedadmin@contoso.com assigned the Global Administrator role to malicioususer@contoso.com."
    }
  ],
  errorCases: []
};
