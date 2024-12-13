// schemas/GoogleCloudSCC/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "Findings": [
        {
          "category": "Vulnerability",
          "description": "Outdated software detected on instance instance-id.",
          "severity": "MEDIUM",
          "sourceProperties": {
            "DetectionSource": "GoogleVulnerabilityScanner"
          }
        }
      ],
      "FindingsResource": {
        "name": "projects/project-id/instances/instance-id",
        "type": "GCEInstance",
        "projectDisplayName": "Project Name",
        "resourceOwners": ["user@example.com"]
      },
      "SourceProperties": {
        "DetectionSource": "GoogleVulnerabilityScanner"
      },
      "SourceSystem": "GoogleCloudSCC",
      "TenantId": "tenant-id",
      "Type": "GoogleCloudSCC"
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "Findings": [
        {
          "category": "DataExfiltration",
          "description": "Sensitive data download detected from storage bucket sensitive-data.",
          "severity": "HIGH",
          "sourceProperties": {
            "DetectionSource": "GoogleThreatDetection",
            "ConfidenceScore": 0.95,
            "AnomalyType": "Suspicious Data Access"
          }
        }
      ],
      "FindingsResource": {
        "name": "projects/project-id/storage-buckets/sensitive-data",
        "type": "GCSBucket",
        "projectDisplayName": "Project Name",
        "resourceOwners": ["user@example.com"]
      },
      "SourceProperties": {
        "DetectionSource": "GoogleThreatDetection",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Suspicious Data Access"
      },
      "SourceSystem": "GoogleCloudSCC",
      "TenantId": "tenant-id",
      "Type": "GoogleCloudSCC"
    }
  ],
  errorCases: []
};
