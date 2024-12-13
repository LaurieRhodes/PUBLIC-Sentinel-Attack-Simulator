// schemas/AWSCloudWatch/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "EventType": "AlarmStateChange",
      "EventResult": "Success",
      "EventSeverity": "Informational",
      "EventProduct": "AWS CloudWatch",
      "EventVendor": "Amazon",
      "EventSchema": "CloudWatch",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "54.240.200.11",
      "DvcHostname": "AWSCloudWatchServer",
      "AlarmName": "HighCPUUsage",
      "AlarmDescription": "Alarm triggered when CPU usage exceeds 80%",
      "AlarmState": "ALARM",
      "PreviousState": "OK",
      "MetricName": "CPUUtilization",
      "Namespace": "AWS/EC2",
      "Statistic": "Average",
      "Threshold": 80,
      "Unit": "Percent",
      "Dimensions": {
        "InstanceId": "i-0abcd1234efgh5678"
      },
      "AwsRegion": "us-east-1",
      "EventMessage": "Alarm HighCPUUsage changed state from OK to ALARM for EC2 instance i-0abcd1234efgh5678 in us-east-1."
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "EventType": "MetricDataPointAnomaly",
      "EventResult": "Success",
      "EventSeverity": "High",
      "EventProduct": "AWS CloudWatch",
      "EventVendor": "Amazon",
      "EventSchema": "CloudWatch",
      "EventSchemaVersion": "0.1",
      "DvcIpAddr": "54.240.200.12",
      "DvcHostname": "AWSCloudWatchServer",
      "AlarmName": "UnauthorizedAccessAttempts",
      "AlarmDescription": "Anomaly detected in access attempts",
      "AlarmState": "ALARM",
      "MetricName": "FailedLoginAttempts",
      "Namespace": "Custom/Authentication",
      "Statistic": "Sum",
      "Threshold": 100,
      "Unit": "Count",
      "Dimensions": {
        "UserPoolId": "us-west-2_aBc123456"
      },
      "AwsRegion": "us-west-2",
      "ThreatIndicators": {
        "ThreatType": "AccessAttemptAnomaly",
        "Indicators": [
          "Spike in failed login attempts detected",
          "Exceeds anomaly threshold for user pool"
        ]
      },
      "ExtendedProperties": {
        "DetectionSource": "AnomalyDetection",
        "ConfidenceScore": 0.9,
        "AnomalyType": "Authentication Spike"
      },
      "EventMessage": "High-severity anomaly detected: Spike in failed login attempts for UserPool us-west-2_aBc123456 in us-west-2 region."
    }
  ],
  errorCases: []
};
