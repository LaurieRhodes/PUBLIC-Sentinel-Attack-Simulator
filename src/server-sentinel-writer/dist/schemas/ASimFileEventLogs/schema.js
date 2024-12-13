export const schema = {
    fields: {
      ActingProcessCommandLine: {
        type: 'string',
        required: false,
        description: 'The command line used to run the acting process.'
      },
      ActingProcessGuid: {
        type: 'string',
        required: false,
        description: 'A generated unique identifier (GUID) of the acting process.'
      },
      ActingProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID (PID) of the acting process.'
      },
      ActingProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the acting process.'
      },
      ActorOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The original actor user type as provided by the reporting device.'
      },
      ActorScope: {
        type: 'string',
        required: false,
        description: 'The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined.'
      },
      ActorScopeId: {
        type: 'string',
        required: false,
        description: 'The scope ID, such as Azure AD Directory ID, in which ActorUserId and ActorUsername are defined.'
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
        description: 'The Actor username, including domain information when available.'
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
        description: 'The type of actor.'
      },
      AdditionalFields: {
        type: 'json_array',
        required: false,
        description: 'Additional information, represented using key/value pairs provided by the source which do not map to ASim.'
      },
      _BilledSize: {
        type: 'real',
        required: false,
        description: 'The record size in bytes'
      },
      DvcAction: {
        type: 'string',
        required: false,
        description: 'The action taken on the web session.'
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
        description: 'The type of DvcDomain. Valid values include \'Windows\' and \'FQDN\'.'
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
        description: 'The original DvcAction as provided by the reporting device.'
      },
      DvcIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP address of the device reporting the event.'
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
        description: 'The network on which the event occurred or which reported the event, depending on the schema.'
      },
      EventCount: {
        type: 'int',
        required: false,
        description: 'This value is used when the source supports aggregation, and a single record may represent multiple events.'
      },
      EventEndTime: {
        type: 'datetime',
        required: false,
        description: 'The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field.'
      },
      EventMessage: {
        type: 'string',
        required: false,
        description: 'A general message or description.'
      },
      EventOriginalResultDetails: {
        type: 'string',
        required: false,
        description: 'The original result details provided by the source. This value is used to derive EventResultDetails, which should have only one of the values documented for each schema.'
      },
      EventOriginalSeverity: {
        type: 'string',
        required: false,
        description: 'The original severity as provided by the reporting device. This value is used to derive EventSeverity.'
      },
      EventOriginalSubType: {
        type: 'string',
        required: false,
        description: 'The original event subtype or ID, if provided by the source. For example, this field will be used to store the original Windows logon type. This value is used to derive EventSubType, which should have only one of the values documented for each schema.'
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
        description: 'The HTTP status code.'
      },
      EventSchema: {
        type: 'string',
        required: false,
        description: 'The schema the event is normalized to. Each schema documents its schema name.'
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
        description: 'The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field.'
      },
      EventSubType: {
        type: 'string',
        required: false,
        description: 'Additional description of the event type, if applicable.'
      },
      EventType: {
        type: 'string',
        required: false,
        description: 'The operation reported by the record.'
      },
      EventVendor: {
        type: 'string',
        required: false,
        description: 'The vendor of the product generating the event.'
      },
      HashType: {
        type: 'string',
        required: false,
        description: 'The type of hash stored in the Hash alias field.'
      },
      HttpUserAgent: {
        type: 'string',
        required: false,
        description: 'When the operation is initiated using HTTP or HTTPS, the HTTP user agent header.'
      },
      _IsBillable: {
        type: 'string',
        required: false,
        description: 'Specifies whether ingesting the data is billable. When _IsBillable is false ingestion isn\'t billed to your Azure account'
      },
      NetworkApplicationProtocol: {
        type: 'string',
        required: false,
        description: 'When the operation is initiated by a remote system, the application layer protocol used by the connection or session.'
      },
      _ResourceId: {
        type: 'string',
        required: false,
        description: 'A unique identifier for the resource that the record is associated with'
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
        description: 'A descriptive text associated with the device.'
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
        description: 'The ID of the source device.'
      },
      SrcDvcIdType: {
        type: 'string',
        required: false,
        description: 'The type of SrcDvcId.'
      },
      SrcDvcScope: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope the device belongs to.'
      },
      SrcDvcScopeId: {
        type: 'string',
        required: false,
        description: 'The cloud platform scope ID the device belongs to.'
      },
      SrcFileCreationTime: {
        type: 'datetime',
        required: false,
        description: 'The time at which the source file was created.'
      },
      SrcFileDirectory: {
        type: 'string',
        required: false,
        description: 'The source file folder or location.'
      },
      SrcFileExtension: {
        type: 'string',
        required: false,
        description: 'The source file extension.'
      },
      SrcFileMD5: {
        type: 'string',
        required: false,
        description: 'The MD5 hash of the source file.'
      },
      SrcFileMimeType: {
        type: 'string',
        required: false,
        description: 'The Mime or Media type of the source file.'
      },
      SrcFileName: {
        type: 'string',
        required: false,
        description: 'The name of the source file, without a path or a location, but with an extension if relevant.'
      },
      SrcFilePath: {
        type: 'string',
        required: false,
        description: 'The full, normalized path of the source file, including the folder or location, the file name, and the extension.'
      },
      SrcFilePathType: {
        type: 'string',
        required: false,
        description: 'The type of SrcFilePath.'
      },
      SrcFileSHA1: {
        type: 'string',
        required: false,
        description: 'The SHA-1 hash of the source file.'
      },
      SrcFileSHA256: {
        type: 'string',
        required: false,
        description: 'The SHA-256 hash of the source file.'
      },
      SrcFileSHA512: {
        type: 'string',
        required: false,
        description: 'The SHA-512 hash of the source file.'
      },
      SrcFileSize: {
        type: 'long',
        required: false,
        description: 'The size of the source file in bytes.'
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
        description: 'The region within a country associated with the source IP address.'
      },
      SrcHostname: {
        type: 'string',
        required: false,
        description: 'The source device hostname, excluding domain information. If no device name is available, store the relevant IP address in this field.'
      },
      SrcIpAddr: {
        type: 'string',
        required: false,
        description: 'When the operation is initiated by a remote system, the IP address of this system.'
      },
      SrcMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the source device.'
      },
      SrcOriginalRiskLevel: {
        type: 'string',
        required: false,
        description: 'The risk level associated with the source. As reported by the reporting device or enriched.'
      },
      SrcPortNumber: {
        type: 'int',
        required: false,
        description: 'When the operation is initiated by a remote system, the port number from which the connection was initiated.'
      },
      SrcRiskLevel: {
        type: 'int',
        required: false,
        description: 'The risk level associated with the source.'
      },
      TargetAppId: {
        type: 'string',
        required: false,
        description: 'The ID of the destination application, as reported by the reporting device.'
      },
      TargetAppName: {
        type: 'string',
        required: false,
        description: 'The name of the destination application.'
      },
      TargetAppType: {
        type: 'string',
        required: false,
        description: 'The type of the destination application.'
      },
      TargetFileCreationTime: {
        type: 'datetime',
        required: false,
        description: 'The time at which the target file was created.'
      },
      TargetFileDirectory: {
        type: 'string',
        required: false,
        description: 'The target file folder or location.'
      },
      TargetFileExtension: {
        type: 'string',
        required: false,
        description: 'The target file extension.'
      },
      TargetFileMD5: {
        type: 'string',
        required: false,
        description: 'The MD5 hash of the target file.'
      },
      TargetFileMimeType: {
        type: 'string',
        required: false,
        description: 'The Mime or Media type of the target file.'
      },
      TargetFileName: {
        type: 'string',
        required: false,
        description: 'The name of the target file, without a path or a location, but with an extension if relevant.'
      },
      TargetFilePath: {
        type: 'string',
        required: false,
        description: 'The full, normalized path of the target file, including the folder or location, the file name, and the extension.'
      },
      TargetFilePathType: {
        type: 'string',
        required: false,
        description: 'The type of TargetFilePath.'
      },
      TargetFileSHA1: {
        type: 'string',
        required: false,
        description: 'The SHA-1 hash of the target file.'
      },
      TargetFileSHA256: {
        type: 'string',
        required: false,
        description: 'The SHA-256 hash of the target file.'
      },
      TargetFileSHA512: {
        type: 'string',
        required: false,
        description: 'The SHA-512 hash of the source file.'
      },
      TargetFileSize: {
        type: 'long',
        required: false,
        description: 'The size of the target file in bytes.'
      },
      TargetOriginalAppType: {
        type: 'string',
        required: false,
        description: 'The target application type as reported by the reporting device.'
      },
      TargetUrl: {
        type: 'string',
        required: false,
        description: 'When the operation is initiated using HTTP or HTTPS, the URL used.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      ThreatCategory: {
        type: 'string',
        required: false,
        description: 'The category of the threat or malware identified in the file activity.'
      },
      ThreatConfidence: {
        type: 'int',
        required: false,
        description: 'The confidence level of the threat identified, normalized to a value between 0 and a 100.'
      },
      ThreatField: {
        type: 'string',
        required: false,
        description: 'The field for which a threat was identified. The value is either SrcFilePath or DstFilePath.'
      },
      ThreatFilePath: {
        type: 'string',
        required: false,
        description: 'A file path for which a threat was identified. The field ThreatField contains the name of the field ThreatFilePath represents.'
      },
      ThreatFirstReportedTime: {
        type: 'datetime',
        required: false,
        description: 'The first time the IP address or domain were identified as a threat.'
      },
      ThreatId: {
        type: 'string',
        required: false,
        description: 'The ID of the threat or malware identified in the file activity.'
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
        description: 'The name of the threat or malware identified in the file activity.'
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
        description: 'The timestamp reflecting the time in which the event was generated.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };