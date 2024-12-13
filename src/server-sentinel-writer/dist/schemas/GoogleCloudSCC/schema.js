export const schema = {
    fields: {
      Findings: {
        type: 'json_array',
        required: false,
        description: 'A dynamic array of all the findings associated with the resource.'
      },
      FindingsResource: {
        type: 'json_array',
        required: false,
        description: 'A dynamic array of the resource that was affected by the security finding.'
      },
      SourceProperties: {
        type: 'json_array',
        required: false,
        description: 'A map of additional properties about the source of the security finding.'
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
        description: 'The time at which the security finding was first detected.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };