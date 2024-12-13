export const schema = {
    fields: {
      AuthenticationInfo: {
        type: 'json_array',
        required: false,
        description: 'Authentication information.'
      },
      AuthorizationInfo: {
        type: 'json_array',
        required: false,
        description: 'Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple.'
      },
      GCPResourceName: {
        type: 'string',
        required: false,
        description: 'The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name.'
      },
      GCPResourceType: {
        type: 'string',
        required: false,
        description: 'The identifier of the type associated with this resource, such as \'pubsub_subscription\'.'
      },
      InsertId: {
        type: 'string',
        required: false,
        description: 'Optional. Providing a unique identifier for the log entry allows Logging to remove duplicate entries with the same timestamp and insertId in a single query result.'
      },
      LogName: {
        type: 'string',
        required: false,
        description: 'Information including a suffix identifying the log sub-type (e.g., admin activity, system access, data access) and where in the hierarchy the request was made.'
      },
      Metadata: {
        type: 'json_array',
        required: false,
        description: 'Other service-specific data about the request, response, and other information associated with the current audited event.'
      },
      MethodName: {
        type: 'string',
        required: false,
        description: 'The name of the service method or operation. For API calls, this should be the name of the API method.'
      },
      NumResponseItems: {
        type: 'string',
        required: false,
        description: 'The number of items returned from a list or query API method, if applicable.'
      },
      PrincipalEmail: {
        type: 'string',
        required: false,
        description: 'The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the principalSubject field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted.'
      },
      ProjectId: {
        type: 'string',
        required: false,
        description: 'The identifier of the Google Cloud Platform (GCP) project associated with this resource, such as "my-project".'
      },
      Request: {
        type: 'json_array',
        required: false,
        description: 'The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the @type property.'
      },
      RequestMetadata: {
        type: 'json_array',
        required: false,
        description: 'Metadata about the operation.'
      },
      ResourceLocation: {
        type: 'json_array',
        required: false,
        description: 'The resource location information.'
      },
      ResourceOriginalState: {
        type: 'json_array',
        required: false,
        description: 'The resource original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in request, response, metadata or serviceData fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the @type property.'
      },
      Response: {
        type: 'json_array',
        required: false,
        description: 'The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the @type property.'
      },
      ServiceData: {
        type: 'json_array',
        required: false,
        description: 'An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" }.'
      },
      ServiceName: {
        type: 'string',
        required: false,
        description: 'The name of the API service performing the operation. For example, \'compute.googleapis.com\'.'
      },
      Severity: {
        type: 'string',
        required: false,
        description: 'Optional. The severity of the log entry. For example, the following filter expression will match log entries with severities INFO, NOTICE, and WARNING.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      Status: {
        type: 'json_array',
        required: false,
        description: 'The status of the overall operation.'
      },
      StatusMessage: {
        type: 'string',
        required: false,
        description: 'The message status of the overall operation.'
      },
      Subscription: {
        type: 'string',
        required: false,
        description: 'A named resource representing the stream of messages from a single, specific topic, to be delivered to the subscribing application.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The time the log entry was received by logging.'
      },
      Timestamp: {
        type: 'datetime',
        required: false,
        description: 'The time the event described by the log entry occurred.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };