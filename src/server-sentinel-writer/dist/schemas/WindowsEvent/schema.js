export const schema = {
    fields: {
      Channel: {
        type: 'string',
        required: false,
        description: 'The channel to which the event was logged.'
      },
      Computer: {
        type: 'string',
        required: false,
        description: 'The name of the computer on which the event occurred.'
      },
      Correlation: {
        type: 'string',
        required: false,
        description: 'The activity identifiers that consumers can use to group related events together.'
      },
      EventData: {
        type: 'json_array',
        required: false,
        description: 'Contains the event data parsed to dynamic type. If the parsing fails then this field will contain null and the RawEventData field will be populated.'
      },
      EventID: {
        type: 'int',
        required: false,
        description: 'The identifier that the provider used to identify the event.'
      },
      EventLevel: {
        type: 'int',
        required: false,
        description: 'Contains the severity level of the event.'
      },
      EventLevelName: {
        type: 'string',
        required: false,
        description: 'The rendered message string of the level specified in the event.'
      },
      EventOriginId: {
        type: 'string',
        required: false,
        description: 'VM ID obtained from the Azure Instance Metadata Service (IMDS).'
      },
      EventRecordId: {
        type: 'string',
        required: false,
        description: 'The record number assigned to the event when it was logged.'
      },
      Keywords: {
        type: 'string',
        required: false,
        description: 'A bitmask of the keywords defined in the event.'
      },
      ManagementGroupName: {
        type: 'string',
        required: false,
        description: 'Additional information based on the resource type.'
      },
      Opcode: {
        type: 'string',
        required: false,
        description: 'The opcode element is defined by the SystemPropertiesType complex type.'
      },
      Provider: {
        type: 'string',
        required: false,
        description: 'System Properties Type - Identifies the provider that logged the event.'
      },
      RawEventData: {
        type: 'string',
        required: false,
        description: 'The raw event XML when parsing fails. It\'s null when parsing successful.'
      },
      SystemProcessId: {
        type: 'int',
        required: false,
        description: 'Identifies the process that generated the event.'
      },
      SystemThreadId: {
        type: 'int',
        required: false,
        description: 'Identifies the thread that generated the event.'
      },
      SystemUserId: {
        type: 'string',
        required: false,
        description: 'The ID of the user who is responsible for the event.'
      },
      Task: {
        type: 'int',
        required: false,
        description: 'The task defined in the event.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The time stamp when the event was generated on the computer.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      },
      Version: {
        type: 'int',
        required: false,
        description: 'Contains the version number of the event\'s definition.'
      }
    }
  };