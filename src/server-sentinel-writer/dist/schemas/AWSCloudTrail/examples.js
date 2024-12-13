// schemas/AWSCloudTrail/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "CreateUser",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "AWS CloudTrail",
      "EventVendor": "Amazon",
      "EventSchema": "CloudTrail",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "54.240.197.10",
      "DvcHostname": "AWSCloudTrailServer",
      "ActorUsername": "adminuser",
      "ActorUserId": "arn:aws:iam::123456789012:user/adminuser",
      "ActorUserType": "IAMUser",
      "TargetUsername": "newuser",
      "TargetUserId": "arn:aws:iam::123456789012:user/newuser",
      "EventSource": "iam.amazonaws.com",
      "EventName": "CreateUser",
      "AwsRegion": "us-east-1",
      "EventMessage": "IAM user adminuser created a new user newuser in the us-east-1 region."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "AssumeRole",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "AWS CloudTrail",
      "EventVendor": "Amazon",
      "EventSchema": "CloudTrail",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "52.95.110.12",
      "DvcHostname": "AWSCloudTrailServer",
      "ActorUsername": "malicioususer",
      "ActorUserId": "arn:aws:sts::123456789012:assumed-role/AdminRole/malicioususer",
      "ActorUserType": "AssumedRole",
      "TargetUsername": "sensitivebucket",
      "TargetUserId": "arn:aws:s3:::sensitivebucket",
      "EventSource": "sts.amazonaws.com",
      "EventName": "AssumeRole",
      "AwsRegion": "us-west-2",
      "ThreatIndicators": {
        "ThreatType": "PrivilegedRoleAssumption",
        "Indicators": [
          "Role assumed from high-risk IP address",
          "Targeting sensitive S3 bucket"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "ThreatIntelligence",
        "ConfidenceScore": 0.95,
        "AnomalyType": "Suspicious Role Assumption"
      },
      "EventMessage": "High-severity AssumeRole event: User malicioususer assumed the AdminRole to access sensitivebucket in the us-west-2 region."
    }
  ],
  errorCases: []
};
