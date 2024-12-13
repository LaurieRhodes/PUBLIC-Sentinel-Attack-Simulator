// schemas/anomalies/examples.js
export const examples = {
  basic: [ 
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "FileCreated",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "Microsoft Defender for Endpoint",
      "EventVendor": "Microsoft",
      "EventSchema": "File",
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
      "TargetFileName": "report.docx",
      "TargetFilePath": "C:\\Users\\jdoe\\Documents\\report.docx",
      "TargetFileDirectory": "C:\\Users\\jdoe\\Documents",
      "TargetFileExtension": "docx",
      "TargetFileSize": 102400,
      "TargetFileCreationTime": "2023-12-12T08:22:50Z",
      "EventMessage": "User jdoe@contoso.com created the file report.docx using explorer.exe."
  }  
  ],
  advanced: [ 
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "FileModified",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "Microsoft Defender for Endpoint",
      "EventVendor": "Microsoft",
      "EventSchema": "File",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.2.20",
      "DvcHostname": "Workstation02",
      "DvcOs": "Windows 11 Pro",
      "ActorUsername": "malicioususer@contoso.com",
      "ActorUserId": "S-1-5-21-1234567890-0987654321-5432109876-1122",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Member",
      "ActingProcessName": "powershell.exe",
      "ActingProcessId": "9876",
      "ActingProcessCommandLine": "powershell.exe -ExecutionPolicy Bypass -File C:\\Scripts\\ModifySensitiveFile.ps1",
      "TargetFileName": "sensitive_data.xlsx",
      "TargetFilePath": "C:\\SensitiveData\\sensitive_data.xlsx",
      "TargetFileDirectory": "C:\\SensitiveData",
      "TargetFileExtension": "xlsx",
      "TargetFileSize": 204800,
      "TargetFileCreationTime": "2023-12-11T08:00:00Z",
      "TargetFileModificationTime": "2023-12-12T11:45:00Z",
      "FileHash": {
          "Algorithm": "SHA256",
          "HashValue": "3ac674216f3e15c761ee1a5e255f067e3a4f2f3a4a4a7f6d8a47ff7f8d9dffb8"
      },
      "ThreatIndicators": {
          "ThreatType": "SuspiciousFileModification",
          "Indicators": [
              "File modified by a process running with unusual permissions",
              "Modification detected outside of business hours"
          ]
      },
      "ExtendedProperties": {
          "AnomalyType": "Unusual File Access",
          "ConfidenceScore": 0.9,
          "DetectionSource": "Behavioral Analysis",
          "PreviousFileSize": 102400,
          "PreviousFileModificationTime": "2023-12-11T10:00:00Z"
      },
      "EventMessage": "High-severity file modification event: User malicioususer@contoso.com modified sensitive_data.xlsx using powershell.exe. File hash indicates potential compromise."
  }  
  ],
  errorCases: [ 
    {
      "TimeGenerated": "2023-12-12T12:15:45Z",
      "EventType": "FileAccessFailed",
      "EventResult": "Failure",
      "EventResultDetails": "AccessDenied",
      "EventSeverity": "Critical",
      "EventProduct": "Microsoft Defender for Endpoint",
      "EventVendor": "Microsoft",
      "EventSchema": "File",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "192.168.2.15",
      "DvcHostname": "Workstation03",
      "DvcOs": "Windows 10 Pro",
      "ActorUsername": "unauthorizeduser@contoso.com",
      "ActorUserId": "S-1-5-21-9876543210-1234567890-1122334455-5678",
      "ActorUserIdType": "SID",
      "ActorUsernameType": "UPN",
      "ActorUserType": "Guest",
      "ActingProcessName": "cmd.exe",
      "ActingProcessId": "3456",
      "ActingProcessCommandLine": "cmd.exe /c type C:\\SensitiveData\\classified.docx",
      "TargetFileName": "classified.docx",
      "TargetFilePath": "C:\\SensitiveData\\classified.docx",
      "TargetFileDirectory": "C:\\SensitiveData",
      "TargetFileExtension": "docx",
      "ErrorDetails": {
          "ErrorCode": "ACCESS_DENIED",
          "ErrorMessage": "The user does not have the necessary permissions to access the file.",
          "ErrorSource": "FileSystem",
          "LastActionAttempted": "Read",
          "FailureTimestamp": "2023-12-12T12:15:30Z"
      },
      "ExtendedProperties": {
          "AnomalyType": "Unauthorized File Access Attempt",
          "ConfidenceScore": 0.95,
          "DetectionSource": "File Access Control Logs"
      },
      "EventMessage": "Critical file access failure: User unauthorizeduser@contoso.com attempted to read classified.docx using cmd.exe but was denied due to insufficient permissions."
  }  
   ]
};