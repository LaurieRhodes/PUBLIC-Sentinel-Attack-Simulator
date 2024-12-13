export const schema = {
    fields: {
      CollectorHostName: {
        type: 'string',
        required: false,
        description: 'Name of the remote device that generated the message.'
      },
      Computer: {
        type: 'string',
        required: false,
        description: 'Computer that the event was collected from.'
      },
      EventTime: {
        type: 'datetime',
        required: false,
        description: 'Date and time that the event was generated.'
      },
      Facility: {
        type: 'string',
        required: false,
        description: 'The part of the system that generated the message.'
      },
      HostIP: {
        type: 'string',
        required: false,
        description: 'IP address of the system sending the message.'
      },
      HostName: {
        type: 'string',
        required: false,
        description: 'Name of the system sending the message.'
      },
      ProcessID: {
        type: 'int',
        required: false,
        description: 'ID of the process that generated the message.'
      },
      ProcessName: {
        type: 'string',
        required: false,
        description: 'Name of the process that generated the message.'
      },
       SeverityLevel: {
        type: 'string',
        required: false,
        description: 'Severity level of the event.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      SyslogMessage: {
        type: 'string',
        required: false,
        description: 'Text of the message.'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'Date and time the record was created.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };