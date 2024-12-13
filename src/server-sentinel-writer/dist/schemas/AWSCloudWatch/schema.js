export const schema = {
    fields: {
      ExtractedTime: {
        type: 'datetime',
        required: false,
        description: 'The timestamp (UTC) of when the event was generated.'
      },
      Message: {
        type: 'string',
        required: false,
        description: 'The data contained within logs from CloudWatch.'
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
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The timestamp (UTC) when the event was generated and equals to \'ExtractedTime\' when included in message. If timestamp is missing, it\'s set to the ingestion time.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };