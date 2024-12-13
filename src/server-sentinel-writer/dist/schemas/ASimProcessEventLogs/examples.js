export const examples = {
  basic: [
  {
    "TimeGenerated": "2023-12-12T08:23:05Z",
    "EventType": "ProcessCreated",
    "EventResult": "Success",
    "EventSeverity": "Informational",
    "EventProduct": "Microsoft Defender for Endpoint",
    "EventVendor": "Microsoft",
    "EventSchema": "ProcessEvent",
    "EventSchemaVersion": "0.1",
    "DvcIpAddr": "192.168.1.10",
    "DvcHostname": "Workstation01",
    "DvcOs": "Windows 10 Pro",
    "ActorUsername": "jdoe@contoso.com",
    "ActorUserId": "S-1-5-21-3623811015-3361044348-30300820-1013",
    "ActorUserIdType": "SID",
    "ActorUsernameType": "UPN",
    "ActorUserType": "Member",
    "ActingProcessName": "explorer.exe",
    "ActingProcessId": "4567",
    "ActingProcessCommandLine": "C:\\Windows\\explorer.exe",
    "TargetProcessName": "notepad.exe",
    "TargetProcessId": "7890",
    "TargetProcessCommandLine": "C:\\Windows\\System32\\notepad.exe",
    "TargetProcessCreationTime": "2023-12-12T08:22:50Z",
    "ParentProcessName": "explorer.exe",
    "ParentProcessId": "4567",
    "EventMessage": "User jdoe@contoso.com initiated notepad.exe using explorer.exe."
}
],
  advanced: [ 
  {
    "TimeGenerated": "2023-12-12T11:45:30Z",
    "EventType": "ProcessTerminated",
    "EventResult": "Success",
    "EventSeverity": "High",
    "EventProduct": "Microsoft Defender for Endpoint",
    "EventVendor": "Microsoft",
    "EventSchema": "ProcessEvent",
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
    "ActingProcessCommandLine": "powershell.exe -ExecutionPolicy Bypass -File C:\\Temp\\DeleteLogs.ps1",
    "TargetProcessName": "svchost.exe",
    "TargetProcessId": "3456",
    "TargetProcessCommandLine": "svchost.exe -k UnusualService",
    "TargetProcessTerminationTime": "2023-12-12T11:45:20Z",
    "ParentProcessName": "explorer.exe",
    "ParentProcessId": "1234",
    "FileHash": {
        "Algorithm": "SHA256",
        "HashValue": "8c3d3f4d2f3b4a6f9e1c2a6f8d9c3a4d5f6b7e8d9f0c3a4d6e9b1c2a5f6d8e3b"
    },
    "ThreatIndicators": {
        "ThreatType": "SuspiciousProcessTermination",
        "Indicators": [
            "Process terminated using PowerShell script with bypass execution policy",
            "Unusual service name associated with svchost.exe"
        ]
    },
    "ExtendedProperties": {
        "DetectionSource": "BehavioralAnalysis",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Unusual Process Behavior",
        "FirewallAction": "Allowed"
    },
    "EventMessage": "High-severity event: User malicioususer@contoso.com terminated svchost.exe using powershell.exe. Hash indicates potential malicious script execution."
}
 ],
  errorCases: []
};