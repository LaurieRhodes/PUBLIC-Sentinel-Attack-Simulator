export const schema = {
    fields: {
      AccountId: {
        type: 'string',
        required: false,
        description: 'The AWS account ID of the owner of the source network interface for which traffic is recorded. If the network interface is created by an AWS service, for example when creating a VPC endpoint or Network Load Balancer, the record may display unknown for this field.'
      },
      ActivityType: {
        type: 'string',
        required: false,
        description: 'A formatted string representing the type of activity that triggered the finding.'
      },
      Arn: {
        type: 'string',
        required: false,
        description: 'Amazon resource name of the finding.'
      },
      Description: {
        type: 'string',
        required: false,
        description: 'Description of the primary purpose of the threat or attack related to the finding.'
      },
      Id: {
        type: 'string',
        required: false,
        description: 'A unique Finding ID for this finding type and set of parameters. New occurrences of activity matching this pattern will be aggregated to the same ID.'
      },
      Partition: {
        type: 'string',
        required: false,
        description: 'The AWS partition in which the finding was generated.'
      },
      Region: {
        type: 'string',
        required: false,
        description: 'The AWS region in which the finding was generated.'
      },
      ResourceDetails: {
        type: 'json_array',
        required: false,
        description: 'Gives details on the AWS resource that was targeted by the trigger activity. The information available varies based on resource type and action typ.'
      },
      SchemaVersion: {
        type: 'string',
        required: false,
        description: 'The Guard Duty finding version.'
      },
      ServiceDetails: {
        type: 'json_array',
        required: false,
        description: 'Gives details on the AWS service that was related to the finding, including Action, Actor/Target, Evidence, Anomalous behavior and Additional information.'
      },
      Severity: {
        type: 'int',
        required: false,
        description: 'A finding\'s assigned severity level of either High, Medium, or Low.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      TimeCreated: {
        type: 'datetime',
        required: false,
        description: 'The time and date when this finding was first created. If this value differs from Updated at (TimeGenerated), it indicates that the activity has occurred multiple times and is an ongoing issue.'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The timestamp (UTC) of when the event was generated, The last time this finding was updated with new activity matching the pattern that prompted GuardDuty to generate this finding.'
      },
      Title: {
        type: 'string',
        required: false,
        description: 'Summary of the primary purpose of the threat or attack related to the finding.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };