// schemas/ASimRegistryEventLogs/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "RegistryKeyCreated",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Microsoft Defender for Endpoint",
      "EventVendor": "Microsoft",
      "EventSchema": "RegistryEvent",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.1.10",
      "DvcHostname": "Workstation01",
      "DvcOs": "Windows 10 Pro",
      "ActorUsername": "jdoe@contoso.com",
      "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Member",
      "ActingProcessName": "reg.exe",
      "ActingProcessId": "7890",
      "ActingProcessCommandLine": "reg add HKCU\\Software\\TestKey",
      "TargetRegistryKey": "HKCU\\Software\\TestKey",
      "TargetRegistryValueName": null,
      "TargetRegistryValueData": null,
      "EventMessage": "Registry key HKCU\\Software\\TestKey was created by jdoe@contoso.com using reg.exe."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "RegistryValueModified",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "Microsoft Defender for Endpoint",
      "EventVendor": "Microsoft",
      "EventSchema": "RegistryEvent",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "10.0.0.15",
      "DvcHostname": "CompromisedWorkstation",
      "DvcOs": "Windows 11 Pro",
      "ActorUsername": "malicioususer@contoso.com",
      "ActorUserId": "S-1-5-21-9876543210-1234567890-1122334455-5678",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Guest",
      "ActingProcessName": "powershell.exe",
      "ActingProcessId": "9001",
      "ActingProcessCommandLine": "powershell.exe -ExecutionPolicy Bypass -Command Set-ItemProperty -Path HKLM:\\Software\\SuspiciousApp -Name Config -Value MaliciousValue",
      "TargetRegistryKey": "HKLM\\Software\\SuspiciousApp",
      "TargetRegistryValueName": "Config",
      "TargetRegistryValueData": "MaliciousValue",
      "ThreatIndicators": {
        "ThreatType": "SuspiciousRegistryModification",
        "Indicators": [
          "Registry modified by process with bypass execution policy",
          "Unusual value data: MaliciousValue"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "BehavioralAnalysis",
        "ConfidenceScore": 0.9,
        "AnomalyType": "Unusual Registry Activity"
      },
      "EventMessage": "Registry value Config in HKLM\\Software\\SuspiciousApp was modified by malicioususer@contoso.com using powershell.exe."
    }
  ],
  errorCases: []
};
