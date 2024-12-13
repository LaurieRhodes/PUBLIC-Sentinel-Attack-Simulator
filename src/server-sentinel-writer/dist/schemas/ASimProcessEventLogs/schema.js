export const schema = {
    fields: {
      ActingProcessCommandLine: {
        type: 'string',
        required: false,
        description: 'The command line used to run the acting process.'
      },
      ActingProcessCreationTime: {
        type: 'datetime',
        required: false,
        description: 'The date and time when the acting process was started.'
      },
      ActingProcessFileCompany: {
        type: 'string',
        required: false,
        description: 'The company that created the acting process image file.'
      },
      ActingProcessFileDescription: {
        type: 'string',
        required: false,
        description: 'The description embedded in the version information of the acting process image file.'
      },
      ActingProcessFileInternalName: {
        type: 'string',
        required: false,
        description: 'The product internal file name from the version information of the acting process image file.'
      },
      ActingProcessFilename: {
        type: 'string',
        required: false,
        description: 'The product file name from the version information of the acting process image file.'
      },
      ActingProcessFileOriginalName: {
        type: 'string',
        required: false,
        description: 'The product original file name from the version information of the acting process image file.'
      },
      ActingProcessFileProduct: {
        type: 'string',
        required: false,
        description: 'The product name from the version information in the acting process image file.'
      },
      ActingProcessFileSize: {
        type: 'long',
        required: false,
        description: 'The size of the file in bytes that ran the acting process.'
      },
      ActingProcessFileVersion: {
        type: 'string',
        required: false,
        description: 'The product version from the version information of the acting process image file.'
      },
      ActingProcessGuid: {
        type: 'string',
        required: false,
        description: 'A GUID of the acting process.'
      },
      ActingProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID of the acting process.'
      },
      ActingProcessIMPHASH: {
        type: 'string',
        required: false,
        description: 'The Import Hash of all the library DLLs that are used by the acting process.'
      },
      ActingProcessInjectedAddress: {
        type: 'string',
        required: false,
        description: 'The memory address in which the responsible acting process is stored.'
      },
      ActingProcessIntegrityLevel: {
        type: 'string',
        required: false,
        description: 'Integrity Level for acting process.'
      },
      ActingProcessIsHidden: {
        type: 'bool',
        required: false,
        description: 'An indication of whether the acting process is in hidden mode.'
      },
      ActingProcessMD5: {
        type: 'string',
        required: false,
        description: 'The MD5 hash of the acting process image file.'
      },
      ActingProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the acting process.'
      },
      ActingProcessSHA1: {
        type: 'string',
        required: false,
        description: 'The SHA-1 hash of the acting process image file.'
      },
      ActingProcessSHA256: {
        type: 'string',
        required: false,
        description: 'The SHA-256 hash of the acting process image file.'
      },
      ActingProcessSHA512: {
        type: 'string',
        required: false,
        description: 'The SHA-512 hash of the acting process image file.'
      },
      ActingProcessTokenElevation: {
        type: 'string',
        required: false,
        description: 'A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the acting process.'
      },
      ActorOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The user type as reported by the reporting device.'
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
        description: 'The type of the Actor\'s username specified in ActionUsername field'
      },
      ActorUserType: {
        type: 'string',
        required: false,
        description: 'The type of the Actor.'
      },
      AdditionalFields: {
        type: 'json_array',
        required: false,
        description: 'Additional information, represented using key and value pairs provided by the source which do not map to ASim.'
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
        description: 'The type of DvcDomain. Possible values include "Windows" and "FQDN".'
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
        description: 'The cloud platform scope the device belongs to. DvcScope map to a subscription ID on Azure and to an account ID on AWS.'
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
        description: 'Describes a subdivision of the operation reported in the EventType field.'
      },
      EventType: {
        type: 'string',
        required: false,
        description: 'Describes the operation reported by the record'
      },
      EventVendor: {
        type: 'string',
        required: false,
        description: 'The vendor of the product generating the event.'
      },
      ParentProcessCreationTime: {
        type: 'datetime',
        required: false,
        description: 'The date and time when the parent process was started.'
      },
      ParentProcessFileCompany: {
        type: 'string',
        required: false,
        description: 'The company that created the parent process image file.'
      },
      ParentProcessFileDescription: {
        type: 'string',
        required: false,
        description: 'The description from the version information of the parent process image file.'
      },
      ParentProcessFileProduct: {
        type: 'string',
        required: false,
        description: 'The product name from the version information in the parent process image file.'
      },
      ParentProcessFileVersion: {
        type: 'string',
        required: false,
        description: 'The product version from the version information of the parent process image file.'
      },
      ParentProcessGuid: {
        type: 'string',
        required: false,
        description: 'A GUID of the parent process.'
      },
      ParentProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID of the parent process.'
      },
      ParentProcessIMPHASH: {
        type: 'string',
        required: false,
        description: 'The Import Hash of all the library DLLs that are used by the parent process.'
      },
      ParentProcessInjectedAddress: {
        type: 'string',
        required: false,
        description: 'The memory address in which the responsible parent process is stored.'
      },
      ParentProcessIntegrityLevel: {
        type: 'string',
        required: false,
        description: 'Integrity Level for parent process.'
      },
      ParentProcessIsHidden: {
        type: 'bool',
        required: false,
        description: 'An indication of whether the parent process is in hidden mode.'
      },
      ParentProcessMD5: {
        type: 'string',
        required: false,
        description: 'The MD5 hash of the parent process image file.'
      },
      ParentProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the parent process.'
      },
      ParentProcessSHA1: {
        type: 'string',
        required: false,
        description: 'The SHA-1 hash of the parent process image file.'
      },
      ParentProcessSHA256: {
        type: 'string',
        required: false,
        description: 'The SHA-256 hash of the parent process image file.'
      },
      ParentProcessSHA512: {
        type: 'string',
        required: false,
        description: 'The SHA-512 hash of the parent process image file.'
      },
      ParentProcessTokenElevation: {
        type: 'string',
        required: false,
        description: 'A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the parent process.'
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
      TargetOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The user type as reported by the reporting device.'
      },
      TargetProcessCommandLine: {
        type: 'string',
        required: false,
        description: 'The command line used to run the target process.'
      },
      TargetProcessCreationTime: {
        type: 'datetime',
        required: false,
        description: 'The date and time when the target process was started.'
      },
      TargetProcessCurrentDirectory: {
        type: 'string',
        required: false,
        description: 'The current directory in which the target process is executed.'
      },
      TargetProcessFileCompany: {
        type: 'string',
        required: false,
        description: 'The company that created the target process image file.'
      },
      TargetProcessFileDescription: {
        type: 'string',
        required: false,
        description: 'The description from the version information of the target process image file.'
      },
      TargetProcessFileInternalName: {
        type: 'string',
        required: false,
        description: 'The product internal file name from the version information of the target process image file.'
      },
      TargetProcessFilename: {
        type: 'string',
        required: false,
        description: 'The product file name from the version information of the target process image file.'
      },
      TargetProcessFileOriginalName: {
        type: 'string',
        required: false,
        description: 'The product original file name from the version information of the target process image file.'
      },
      TargetProcessFileProduct: {
        type: 'string',
        required: false,
        description: 'The product name from the version information in the target process image file.'
      },
      TargetProcessFileSize: {
        type: 'long',
        required: false,
        description: 'Size of the file in bytes that ran the process responsible for the event.'
      },
      TargetProcessFileVersion: {
        type: 'string',
        required: false,
        description: 'The product version from the version information of the target process image file.'
      },
      TargetProcessGuid: {
        type: 'string',
        required: false,
        description: 'A GUID of the target process.'
      },
      TargetProcessId: {
        type: 'string',
        required: false,
        description: 'The process ID of the target process.'
      },
      TargetProcessIMPHASH: {
        type: 'string',
        required: false,
        description: 'The Import Hash of all the library DLLs that are used by the target process.'
      },
      TargetProcessInjectedAddress: {
        type: 'string',
        required: false,
        description: 'The memory address in which the responsible target process is stored.'
      },
      TargetProcessIntegrityLevel: {
        type: 'string',
        required: false,
        description: 'Integrity Level for target process.'
      },
      TargetProcessIsHidden: {
        type: 'bool',
        required: false,
        description: 'An indication of whether the target process is in hidden mode.'
      },
      TargetProcessMD5: {
        type: 'string',
        required: false,
        description: 'The MD5 hash of the target process image file.'
      },
      TargetProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the target process.'
      },
      TargetProcessSHA1: {
        type: 'string',
        required: false,
        description: 'The SHA-1 hash of the target process image file.'
      },
      TargetProcessSHA256: {
        type: 'string',
        required: false,
        description: 'The SHA-256 hash of the target process image file.'
      },
      TargetProcessSHA512: {
        type: 'string',
        required: false,
        description: 'The SHA-512 hash of the target process image file.'
      },
      TargetProcessStatusCode: {
        type: 'string',
        required: false,
        description: 'The exit code returned by the target process when terminated.'
      },
      TargetProcessTokenElevation: {
        type: 'string',
        required: false,
        description: 'A token indicating the presence or absence of User Access Control (UAC) privilege elevation applied to the target process.'
      },
      TargetScope: {
        type: 'string',
        required: false,
        description: 'The scope, such as Azure AD tenant, in which TargetUserId and TargetUsername are defined.'
      },
      TargetScopeId: {
        type: 'string',
        required: false,
        description: 'The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined.'
      },
      TargetUserId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the actor.'
      },
      TargetUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the TargetUserId field.'
      },
      TargetUsername: {
        type: 'string',
        required: false,
        description: 'The Target actor\'s username, including domain information when available.'
      },
      TargetUsernameType: {
        type: 'string',
        required: false,
        description: 'The type of the Target actor\'s username specified in TargetUsername field'
      },
      TargetUserSessionGuid: {
        type: 'string',
        required: false,
        description: 'The unique guid of the sign-in session of the Target actor.'
      },
      TargetUserSessionId: {
        type: 'string',
        required: false,
        description: 'The unique ID of the sign-in session of the Target actor.'
      },
      TargetUserType: {
        type: 'string',
        required: false,
        description: 'The type of the Target actor.'
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