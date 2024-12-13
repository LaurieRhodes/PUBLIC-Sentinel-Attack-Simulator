export const schema = {
    fields: {
      ActingProcessCommandLine: {
        type: 'string',
        required: false,
        description: 'The command line used to run the process.'
      },
      ActingProcessGuid: {
        type: 'string',
        required: false,
        description: 'A generated unique identifier of the acting process.'
      },
      ActingProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID of the acting process.'
      },
      ActingProcessName: {
        type: 'string',
        required: false,
        description: 'The file name of the acting process image file.'
      },
      ActorOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The original actor user type, if provided by the source.'
      },
      ActorScope: {
        type: 'string',
        required: false,
        description: 'The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined.'
      },
      ActorScopeId: {
        type: 'string',
        required: false,
        description: 'The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined.'
      },
      ActorSessionId: {
        type: 'string',
        required: false,
        description: 'The unique ID of the login session of the Actor.'
      },
      ActorUserAadId: {
        type: 'string',
        required: false,
        description: 'The Azure Active Directory ID of the actor.'
      },
      ActorUserId: {
        type: 'string',
        required: false,
        description: 'A unique ID of the Actor.'
      },
      ActorUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the ActorUserId field.'
      },
      ActorUsername: {
        type: 'string',
        required: false,
        description: 'The user name of the user who initiated the event.'
      },
      ActorUsernameType: {
        type: 'string',
        required: false,
        description: 'Specifies the type of the user name stored in the ActorUsername field.'
      },
      ActorUserSid: {
        type: 'string',
        required: false,
        description: 'The Windows user ID (SIDs) of the actor.'
      },
      ActorUserType: {
        type: 'string',
        required: false,
        description: 'The type of the Actor.'
      },
      AdditionalFields: {
        type: 'json_array',
        required: false,
        description: 'Additional information, represented using key/value pairs provided by the source which do not map to ASim.'
      },
      DvcAction: {
        type: 'string',
        required: false,
        description: 'For reporting security systems, the action taken by the system.'
      },
      DvcDescription: {
        type: 'string',
        required: false,
        description: 'A descriptive text associated with the device.'
      },
      DvcDomain: {
        type: 'string',
        required: false,
        description: 'The domain of the device reporting the event.'
      },
      DvcDomainType: {
        type: 'string',
        required: false,
        description: 'The type of DvcDomain.'
      },
      DvcFQDN: {
        type: 'string',
        required: false,
        description: 'The hostname of the device on which the event occurred or which reported the event.'
      },
      DvcHostname: {
        type: 'string',
        required: false,
        description: 'The hostname of the device reporting the event.'
      },
      DvcId: {
        type: 'string',
        required: false,
        description: 'The unique ID of the device on which the event occurred or which reported the event.'
      },
      DvcIdType: {
        type: 'string',
        required: false,
        description: 'The type of DvcId.'
      },
      DvcInterface: {
        type: 'string',
        required: false,
        description: 'The network interface on which data was captured.'
      },
      DvcIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP Address of the device reporting the event.'
      },
      DvcMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the device on which the event occurred or which reported the event.'
      },
      DvcOriginalAction: {
        type: 'string',
        required: false,
        description: 'The original DvcAction as provided by the reporting device.'
      },
      DvcOs: {
        type: 'string',
        required: false,
        description: 'The operating system running on the device on which the event occurred or which reported the event.'
      },
      DvcOsVersion: {
        type: 'string',
        required: false,
        description: 'The version of the operating system on the device on which the event occurred or which reported the event.'
      },
      DvcScope: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope the device belongs to. DvcScope map to a subscription name on Azure and to an account ID on AWS.'
      },
      DvcScopeId: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope ID the device belongs to. DvcScopeId map to a subscription ID on Azure and to an account ID on AWS.'
      },
      DvcZone: {
        type: 'string',
        required: false,
        description: 'The network on which the event occurred or which reported the event.'
      },
      EventCount: {
        type: 'int',
        required: false,
        description: 'The number of events described by the record.'
      },
      EventEndTime: {
        type: 'datetime',
        required: false,
        description: 'The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time when the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field.'
      },
      EventMessage: {
        type: 'string',
        required: false,
        description: 'A general message or description.'
      },
      EventOriginalResultDetails: {
        type: 'string',
        required: false,
        description: 'The original result details provided by the source.'
      },
      EventOriginalSeverity: {
        type: 'string',
        required: false,
        description: 'The original severity as provided by the reporting device.'
      },
      EventOriginalSubType: {
        type: 'string',
        required: false,
        description: 'The original event subtype or ID, if provided by the source.'
      },
      EventOriginalType: {
        type: 'string',
        required: false,
        description: 'A unique ID of the original record, if provided by the source.'
      },
      EventOriginalUid: {
        type: 'string',
        required: false,
        description: '.'
      },
      EventOwner: {
        type: 'string',
        required: false,
        description: 'The owner of the event, which is usually the department or subsidiary in which it was generated.'
      },
      EventProduct: {
        type: 'string',
        required: false,
        description: 'The product generating the event.'
      },
      EventProductVersion: {
        type: 'string',
        required: false,
        description: 'The version of the product generating the event.'
      },
      EventReportUrl: {
        type: 'string',
        required: false,
        description: 'A URL provided in the event for a resource that provides more information about the event.'
      },
      EventResult: {
        type: 'string',
        required: false,
        description: 'The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field.'
      },
      EventResultDetails: {
        type: 'string',
        required: false,
        description: 'Reason or details for the result reported in the EventResult field.'
      },
      EventSchema: {
        type: 'string',
        required: false,
        description: 'The name of the schema.'
      },
      EventSchemaVersion: {
        type: 'string',
        required: false,
        description: 'The version of the schema.'
      },
      EventSeverity: {
        type: 'string',
        required: false,
        description: 'The severity of the event. Valid values are: Informational, Low, Medium, or High.'
      },
      EventStartTime: {
        type: 'datetime',
        required: false,
        description: 'The time in which the event started. If the source supports aggregation and the record represents multiple events, the time when the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field.'
      },
      EventSubType: {
        type: 'string',
        required: false,
        description: 'Describes a subdivision of the operation reported in the EventType field.'
      },
      EventType: {
        type: 'string',
        required: false,
        description: 'Describes the operation reported by the record.'
      },
      EventVendor: {
        type: 'string',
        required: false,
        description: 'The vendor of the product generating the event.'
      },
      ParentProcessCommandLine: {
        type: 'string',
        required: false,
        description: 'The command line used to run the process.'
      },
      ParentProcessGuid: {
        type: 'string',
        required: false,
        description: 'A generated unique identifier of the parent process.'
      },
      ParentProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID of the parent process.'
      },
      ParentProcessName: {
        type: 'string',
        required: false,
        description: 'The file name of the parent process image file.'
      },
      RegistryKey: {
        type: 'string',
        required: false,
        description: 'The registry key associated with the operation, normalized to standard root key naming conventions.'
      },
      RegistryPreviousKey: {
        type: 'string',
        required: false,
        description: 'For operations that modify the registry, the original registry key, normalized to standard root key naming.'
      },
      RegistryPreviousValue: {
        type: 'string',
        required: false,
        description: 'For operations that modify the registry, the original value type, normalized to the standard form.'
      },
      RegistryPreviousValueData: {
        type: 'string',
        required: false,
        description: 'The original registry data, for operations that modify the registry.'
      },
      RegistryPreviousValueType: {
        type: 'string',
        required: false,
        description: 'For operations that modify the registry, the original value type.'
      },
      RegistryValue: {
        type: 'string',
        required: false,
        description: 'The registry value associated with the operation.'
      },
      RegistryValueData: {
        type: 'string',
        required: false,
        description: 'The data stored in the registry value.'
      },
      RegistryValueType: {
        type: 'string',
        required: false,
        description: 'The type of registry value, normalized to standard form.'
      },
      RuleName: {
        type: 'string',
        required: false,
        description: 'The name or ID of the rule by associated with the inspection results.'
      },
      RuleNumber: {
        type: 'int',
        required: false,
        description: 'The number of the rule associated with the inspection results.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      _SubscriptionId: {
        type: 'string',
        required: false,
        description: 'A unique identifier for the subscription that the record is associated with'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      ThreatCategory: {
        type: 'string',
        required: false,
        description: 'The category of the threat or malware identified in activity.'
      },
      ThreatConfidence: {
        type: 'int',
        required: false,
        description: 'The confidence level of the threat identified, normalized to a value between 0 and a 100.'
      },
      ThreatField: {
        type: 'string',
        required: false,
        description: 'The field for which a threat was identified.'
      },
      ThreatFirstReportedTime: {
        type: 'datetime',
        required: false,
        description: 'The first time the IP address or domain were identified as a threat.'
      },
      ThreatId: {
        type: 'string',
        required: false,
        description: 'The ID of the threat or malware identified in the activity.'
      },
      ThreatIsActive: {
        type: 'bool',
        required: false,
        description: 'True ID the threat identified is considered an active threat.'
      },
      ThreatLastReportedTime: {
        type: 'datetime',
        required: false,
        description: 'The last time the IP address or domain were identified as a threat.'
      },
      ThreatName: {
        type: 'string',
        required: false,
        description: 'The name of the threat or malware identified in the activity.'
      },
      ThreatOriginalConfidence: {
        type: 'string',
        required: false,
        description: 'The original confidence level of the threat identified, as reported by the reporting device.'
      },
      ThreatOriginalRiskLevel: {
        type: 'string',
        required: false,
        description: 'The risk level as reported by the reporting device.'
      },
      ThreatRiskLevel: {
        type: 'int',
        required: false,
        description: 'The risk level associated with the identified threat. The level should be a number between 0 and 100.'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The timestamp (UTC) reflecting the time in which the event was generated.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };