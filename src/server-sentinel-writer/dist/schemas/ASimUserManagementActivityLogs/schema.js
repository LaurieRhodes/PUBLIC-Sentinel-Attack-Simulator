export const schema = {
    fields: {
      ActingAppId: {
        type: 'string',
        required: false,
        description: 'The ID of the application used by the actor to perform the activity, including a process, browser, or service.'
      },
      ActingAppName: {
        type: 'string',
        required: false,
        description: 'The name of the application used by the actor to perform the activity, including a process, browser, or service.'
      },
      ActingAppType: {
        type: 'string',
        required: false,
        description: 'The type of acting application.'
      },
      ActingOriginalAppType: {
        type: 'string',
        required: false,
        description: 'The acting application type as reported by the reporting device.'
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
        description: 'The unique ID of the sign-in session of the Actor.'
      },
      ActorUserAadId: {
        type: 'string',
        required: false,
        description: 'The Azure Active Directory ID of the actor.'
      },
      ActorUserId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the actor.'
      },
      ActorUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the ActorUserId field.'
      },
      ActorUsername: {
        type: 'string',
        required: false,
        description: 'The Actor\'s username, including domain information when available.'
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
        description: 'The original event type or ID, if provided by the source.'
      },
      EventOriginalUid: {
        type: 'string',
        required: false,
        description: 'A unique ID of the original record, if provided by the source.'
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
        description: 'The name of the schema'
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
      GroupId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the group, for activities involving a group.'
      },
      GroupIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the GroupId field.'
      },
      GroupName: {
        type: 'string',
        required: false,
        description: 'The group name, including domain information when available, for activities involving a group.'
      },
      GroupNameType: {
        type: 'string',
        required: false,
        description: 'Specifies the type of the group name stored in the GroupName field.'
      },
      GroupOriginalType: {
        type: 'string',
        required: false,
        description: 'The original group type, if provided by the source.'
      },
      GroupType: {
        type: 'string',
        required: false,
        description: 'The type of the group, for activities involving a group.'
      },
      HttpUserAgent: {
        type: 'string',
        required: false,
        description: 'When authentication is performed over HTTP or HTTPS, this field\'s value is the user_agent HTTP header provided by the acting application when performing the authentication.'
      },
      NewPropertyValue: {
        type: 'string',
        required: false,
        description: 'The new value stored in the specified property.'
      },
      PreviousPropertyValue: {
        type: 'string',
        required: false,
        description: 'The previous value that was stored in the specified property.'
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
      SrcDescription: {
        type: 'string',
        required: false,
        description: 'A descriptive text associated with the source device.'
      },
      SrcDeviceType: {
        type: 'string',
        required: false,
        description: 'The type of the source device.'
      },
      SrcDomain: {
        type: 'string',
        required: false,
        description: 'The domain of the source device.'
      },
      SrcDomainType: {
        type: 'string',
        required: false,
        description: 'The type of SrcDomain.'
      },
      SrcDvcId: {
        type: 'string',
        required: false,
        description: 'The ID of the source device as reported in the record.'
      },
      SrcDvcIdType: {
        type: 'string',
        required: false,
        description: 'The type of SrcDvcId.'
      },
      SrcDvcScope: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope the source device belongs to. SrcDvcScope map to a subscription name on Azure and to an account ID on AWS.'
      },
      SrcDvcScopeId: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope ID the source device belongs to. SrcDvcScopeId map to a subscription ID on Azure and to an account ID on AWS.'
      },
      SrcFQDN: {
        type: 'string',
        required: false,
        description: 'The source device hostname, including domain information when available.'
      },
      SrcGeoCity: {
        type: 'string',
        required: false,
        description: 'The city associated with the source IP address.'
      },
      SrcGeoCountry: {
        type: 'string',
        required: false,
        description: 'The country associated with the source IP address.'
      },
      SrcGeoLatitude: {
        type: 'real',
        required: false,
        description: 'The latitude of the geographical coordinate associated with the source IP address.'
      },
      SrcGeoLongitude: {
        type: 'real',
        required: false,
        description: 'The longitude of the geographical coordinate associated with the source IP address.'
      },
      SrcGeoRegion: {
        type: 'string',
        required: false,
        description: 'The region within a country associated with the source IP address..'
      },
      SrcHostname: {
        type: 'string',
        required: false,
        description: 'The source device hostname, excluding domain information.'
      },
      SrcIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP address of the source device.'
      },
      SrcMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the source device.'
      },
      SrcOriginalRiskLevel: {
        type: 'string',
        required: false,
        description: 'The risk level associaeted with the identified Source as reported by the reporting device.'
      },
      SrcPortNumber: {
        type: 'int',
        required: false,
        description: 'The Source IP port from which the connection originated.'
      },
      SrcRiskLevel: {
        type: 'int',
        required: false,
        description: 'The risk level associated with the identified Source.'
      },
      TargetOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The original destination user type, if provided by the source.'
      },
      TargetUserId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the target user.'
      },
      TargetUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the TargetUserId field.'
      },
      TargetUsername: {
        type: 'string',
        required: false,
        description: 'The target username, including domain information when available.'
      },
      TargetUsernameType: {
        type: 'string',
        required: false,
        description: 'Specifies the type of the username stored in the TargetUsername field.'
      },
      TargetUserScope: {
        type: 'string',
        required: false,
        description: 'The scope, such as Azure AD tenant name, in which TargetUserId and TargetUsername are defined.'
      },
      TargetUserScopeId: {
        type: 'string',
        required: false,
        description: 'The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined.'
      },
      TargetUserSessionId: {
        type: 'string',
        required: false,
        description: 'The unique ID of the sign-in session of the user.'
      },
      TargetUserType: {
        type: 'string',
        required: false,
        description: 'The type of target user.'
      },
      TargetUserUid: {
        type: 'string',
        required: false,
        description: 'The Unix or Linux user ID of the user.'
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