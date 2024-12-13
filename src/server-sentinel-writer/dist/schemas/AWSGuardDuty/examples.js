// schemas/AWSGuardDuty/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "DetectorId": "abc12345",
      "ResourceId": "arn:aws:ec2:us-west-2:123456789012:instance/i-0abcd1234efgh5678",
      "FindingType": "UnauthorizedAccess:IAMUser/MaliciousIPCaller",
      "Severity": "5.0",
      "Region": "us-west-2",
      "Service": {
        "Action": {
          "ActionType": "AWS_API_CALL",
          "ApiCallDetails": {
            "ServiceName": "ec2.amazonaws.com",
            "Api": "RunInstances"
          }
        }
      },
      "EventMessage": "GuardDuty detected unauthorized access: Malicious IP address making API calls to launch EC2 instances in us-west-2."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "DetectorId": "def67890",
      "ResourceId": "arn:aws:s3:::sensitive-data-bucket",
      "FindingType": "Exfiltration:S3/UnusualDataAccess",
      "Severity": "8.5",
      "Region": "us-east-1",
      "Service": {
        "Action": {
          "ActionType": "AWS_API_CALL",
          "ApiCallDetails": {
            "ServiceName": "s3.amazonaws.com",
            "Api": "GetObject"
          }
        }
      },
      "ThreatIndicators": {
        "ThreatType": "DataExfiltration",
        "Indicators": [
          "Large volume of unusual S3 GetObject requests",
          "Requests originating from untrusted IP addresses"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "ThreatIntelligence",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Unusual Data Access Patterns"
      },
      "EventMessage": "High-severity data exfiltration detected: Unusual S3 object access from untrusted IP addresses targeting sensitive-data-bucket in us-east-1."
    }
  ],
  errorCases: []
};
