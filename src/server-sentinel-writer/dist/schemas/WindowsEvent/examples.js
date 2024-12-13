// schemas/WindowsEvent/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventLog": "Security",
      "EventLevel": "Information",
      "EventSourceName": "Microsoft-Windows-Security-Auditing",
      "EventID": 4624,
      "TaskCategory": "Logon",
      "Opcode": "Info",
      "Keywords": "Audit Success",
      "Channel": "Security",
      "Computer": "Workstation01",
      "SourceSystem": "Windows",
      "EventRecordID": 123456,
      "ActivityID": "11111111-2222-3333-4444-555555555555",
      "RelatedActivityID": null,
      "ProcessID": 5678,
      "ThreadID": 9012,
      "AccountType": "User",
      "AccountName": "jdoe",
      "AccountDomain": "CONTOSO",
      "AccountSID": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "LogonType": 2,
      "IpAddress": "203.0.113.5",
      "LogonGuid": "12345678-90ab-cdef-1234-567890abcdef",
      "EventMessage": "An account was successfully logged on. User jdoe from CONTOSO domain logged on interactively from IP address 203.0.113.5."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventLog": "Security",
      "EventLevel": "Critical",
      "EventSourceName": "Microsoft-Windows-Security-Auditing",
      "EventID": 4625,
      "TaskCategory": "Logon",
      "Opcode": "Info",
      "Keywords": "Audit Failure",
      "Channel": "Security",
      "Computer": "Server01",
      "SourceSystem": "Windows",
      "EventRecordID": 789012,
      "ActivityID": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
      "RelatedActivityID": null,
      "ProcessID": 1234,
      "ThreadID": 5678,
      "AccountType": "User",
      "AccountName": "admin",
      "AccountDomain": "UNTRUSTED",
      "AccountSID": "S-1-5-21-9876543210-1234567890-1122334455-5678",
      "LogonType": 3,
      "IpAddress": "198.51.100.10",
      "LogonGuid": "abcdef12-3456-7890-abcd-ef1234567890",
      "ThreatIndicators": {
        "ThreatType": "BruteForceLogonAttempt",
        "Indicators": [
          "Multiple failed login attempts with admin account",
          "Suspicious IP address used in the attempts"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "ThreatIntelligence",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Brute Force Attack"
      },
      "EventMessage": "High-severity logon failure: Multiple failed attempts for admin account from IP address 198.51.100.10 to Server01."
    }
  ],
  errorCases: []
};
