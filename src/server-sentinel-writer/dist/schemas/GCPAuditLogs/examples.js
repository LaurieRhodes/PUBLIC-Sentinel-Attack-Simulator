// schemas/GCPAuditLogs/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "ServiceAccountCreated",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "GCP Audit Logs",
      "EventVendor": "Google",
      "EventSchema": "AuditLogs",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "34.120.0.1",
      "DvcHostname": "GCPAuditServer",
      "ActorUsername": "admin@example.com",
      "ActorUserId": "user:admin@example.com",
      "ActorUserType": "User",
      "TargetUsername": "service-account-123@project.iam.gserviceaccount.com",
      "TargetUserId": "service-account-123@project.iam.gserviceaccount.com",
      "TargetUserType": "ServiceAccount",
      "EventSource": "iam.googleapis.com",
      "EventName": "google.iam.admin.v1.CreateServiceAccount",
      "GcpRegion": "us-central1",
      "EventMessage": "Admin admin@example.com created a new service account service-account-123@project.iam.gserviceaccount.com in us-central1."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "IAMRoleGranted",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "GCP Audit Logs",
      "EventVendor": "Google",
      "EventSchema": "AuditLogs",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "34.120.0.2",
      "DvcHostname": "GCPAuditServer",
      "ActorUsername": "compromiseduser@example.com",
      "ActorUserId": "user:compromiseduser@example.com",
      "ActorUserType": "User",
      "TargetUsername": "malicious-service-account@project.iam.gserviceaccount.com",
      "TargetUserId": "malicious-service-account@project.iam.gserviceaccount.com",
      "TargetUserType": "ServiceAccount",
      "RoleAssigned": "roles/owner",
      "EventSource": "iam.googleapis.com",
      "EventName": "google.iam.admin.v1.SetIamPolicy",
      "GcpRegion": "us-west1",
      "ThreatIndicators": {
        "ThreatType": "PrivilegedRoleAssignment",
        "Indicators": [
          "Role granted to a service account by a potentially compromised user",
          "Unusual activity detected in role assignment logs"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "BehavioralAnalysis",
        "ConfidenceScore": 0.9,
        "AnomalyType": "Suspicious Role Assignment"
      },
      "EventMessage": "High-severity event: User compromiseduser@example.com granted roles/owner to malicious-service-account@project.iam.gserviceaccount.com in us-west1."
    }
  ],
  errorCases: []
};
