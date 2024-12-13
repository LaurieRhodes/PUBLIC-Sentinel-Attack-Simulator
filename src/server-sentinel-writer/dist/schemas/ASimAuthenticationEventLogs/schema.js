export const schema = {
  fields: {
            TenantId: { 
                type: 'string', 
                required: false, 
                description: 'The Log Analytics workspace ID'
            },
            TimeGenerated: { 
                type: 'datetime', 
                required: true, 
                description: 'The timestamp (UTC) reflecting the time in which the event was generated'
            },
            EventType: { 
                type: 'string', 
                required: true, 
                description: 'Describes the operation reported by the record'  
            },
            SourceSystem: { 
                type: 'string', 
                required: false, 
                description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
            },
            EventMessage: { 
                type: 'string', 
                required: false, 
                description: 'A general message or description'
            },
            RuleName: { 
                type: 'string', 
                required: false, 
                description: 'The name or ID of the rule associated with the inspection results'
            },
            EventCount: { 
                type: 'int', 
                required: false, 
                description: 'The number of events described by the record'
            },
            EventStartTime: { 
                type: 'datetime', 
                required: false, 
                description: 'The time in which the event started. If the source supports aggregation and the record represents multiple events, the time that the first event was generated. If not provided by the source record, this field aliases the TimeGenerated field'
            },
            EventEndTime: { 
                type: 'datetime', 
                required: false, 
                description: 'The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time that the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field' 
            },
            EventSubType: { 
                type: 'string', 
                required: false, 
                description: 'The sign-in type for example System, Interactive, RemoteInteractive, Service, RemoteService, Remote or AssumeRole'
            },
            EventResult: { 
                type: 'string', 
                required: false, 
                description: 'The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable). The value may not be provided directly by the sources, in which case it is derived from other event fields, for example, the EventResultDetails field'  
            },
            EventResultDetails: { 
                type: 'string', 
                required: false, 
                description: 'The details associated with the event result. This field is typically populated when the result is a failure' 
            }, 
            EventOriginalUid: { 
                type: 'string', 
                required: false, 
                description: 'A unique ID of the original record, if provided by the source' 
            }, 
            EventOriginalType: { 
                type: 'string', 
                required: false, 
                description: 'The original event type or ID, if provided by the source' 
            },
            EventOriginalSubType: { 
                type: 'string', 
                required: false, 
                description: 'The original event subtype or ID, if provided by the source'
            },
            EventOriginalResultDetails: { 
                type: 'string', 
                required: false, 
                description: 'The original result details provided by the source' 
            },
            EventSeverity: { 
                type: 'string', 
                required: false, 
                description: 'The severity of the event. Valid values are: Informational, Low, Medium, or High' 
            },
            EventOriginalSeverity: { 
                type: 'string', 
                required: false, 
                description: 'The original severity as provided by the reporting device' 
            },
            EventProduct: { 
                type: 'string', 
                required: false, 
                description: 'The product generating the event' 
            },
            EventProductVersion: { 
                type: 'string', 
                required: false, 
                description: 'The version of the product generating the event'
            },
            EventVendor: { 
                type: 'string', 
                required: false, 
                description: 'The vendor of the product generating the event' 
            },
            EventSchemaVersion: { 
                type: 'string', 
                required: false, 
                description: 'The version of the schema'
            },
            EventOwner: { 
                type: 'string', 
                required: false, 
                description: 'The owner of the event, which is usually the department or subsidiary in which it was generated'  
            },
            EventReportUrl: { 
                type: 'string', 
                required: false, 
                description: 'A URL provided in the event for a resource that provides more information about the event' 
            },
            RuleNumber: { 
                type: 'int', 
                required: false, 
                description: 'The number of the rule associated with the inspection results' 
            },
            ThreatId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the threat or malware identified in the audit activity' 
            },
            ThreatName: { 
                type: 'string', 
                required: false, 
                description: 'The name of the threat or malware identified in the audit activity' 
            },
            ThreatCategory: { 
                type: 'string', 
                required: false, 
                description: 'The category of the threat or malware identified in audit activity'
            },
            ThreatRiskLevel: { 
                type: 'int', 
                required: false, 
                description: 'The risk level associated with the identified threat. The level should be a number between 0 and 100' 
            },
            ThreatOriginalRiskLevel: { 
                type: 'string', 
                required: false, 
                description: 'The risk level as reported by the reporting device' 
            },
            ThreatConfidence: { 
                type: 'int', 
                required: false, 
                description: 'The confidence level of the threat identified, normalized to a value between 0 and a 100'
            },
            ThreatOriginalConfidence: { 
                type: 'string', 
                required: false, 
                description: 'The original confidence level of the threat identified, as reported by the reporting device' 
            },
            ThreatIsActive: { 
                type: 'boolean', 
                required: false, 
                description: 'True if the threat identified is considered an active threat'
            },
            ThreatFirstReportedTime: { 
                type: 'datetime', 
                required: false, 
                description: 'The first time the IP address or domain were identified as a threat' 
            },
            ThreatLastReportedTime: { 
                type: 'datetime', 
                required: false, 
                description: 'The last time the IP address or domain were identified as a threat' 
            },
            ThreatField: { 
                type: 'string', 
                required: false, 
                description: 'The field for which a threat was identified'
            },
            ThreatIpAddr: { 
                type: 'string', 
                required: false, 
                description: 'An IP address for which a threat was identified' 
            },
            DvcIpAddr: { 
                type: 'string', 
                required: false, 
                description: 'The IP Address of the device reporting the event' 
            },
            DvcHostname: { 
                type: 'string', 
                required: false, 
                description: 'The hostname of the device reporting the event' 
            },
            DvcDomain: { 
                type: 'string', 
                required: false, 
                description: 'The domain of the device reporting the event'
            },
            DvcDomainType: { 
                type: 'string', 
                required: false, 
                description: 'The type of DvcDomain' 
            },
            DvcFQDN: { 
                type: 'string', 
                required: false, 
                description: 'The hostname of the device on which the event occurred or which reported the event'
            },
            DvcDescription: { 
                type: 'string', 
                required: false, 
                description: 'A descriptive text associated with the device' 
            },
            DvcId: { 
                type: 'string', 
                required: false, 
                description: 'The unique ID of the device on which the event occurred or which reported the event' 
            },
            DvcIdType: { 
                type: 'string', 
                required: false, 
                description: 'The type of DvcId'
            },
            DvcMacAddr: { 
                type: 'string', 
                required: false, 
                description: 'The MAC address of the device on which the event occurred or which reported the event' 
            },
            DvcOs: { 
                type: 'string', 
                required: false, 
                description: 'The operating system running on the device on which the event occurred or which reported the event' 
            },
            DvcOsVersion: { 
                type: 'string', 
                required: false, 
                description: 'The version of the operating system on the device on which the event occurred or which reported the event'
            },
            DvcAction: { 
                type: 'string', 
                required: false, 
                description: 'For reporting security systems, the action taken by the system' 
            },
            DvcOriginalAction: { 
                type: 'string', 
                required: false, 
                description: 'The original DvcAction as provided by the reporting device'  
            },
            DvcInterface: { 
                type: 'string', 
                required: false, 
                description: 'The network interface on which data was captured' 
            },
            DvcScopeId: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope ID the device belongs to. DvcScopeId map to a subscription ID on Azure and to an account ID on AWS'
            },
            DvcScope: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope the device belongs to. DvcScope map to a subscription ID on Azure and to an account ID on AWS' 
            },
            ActorUserId: { 
                type: 'string', 
                required: false, 
                description: 'A machine-readable, alphanumeric, unique representation of the actor' 
            },
            HttpUserAgent: { 
                type: 'string', 
                required: false, 
                description: 'When authentication is performed over HTTP or HTTPS, this field\'s value is the user_agent HTTP header provided by the acting application when performing the authentication'
            },
            AdditionalFields: { 
                type: 'json', 
                required: false, 
                description: 'Additional information, represented using key/value pairs provided by the source which do not map to ASim'
            },
            ActorUserIdType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the ID stored in the ActorUserId field' 
            },
            ActorScopeId: { 
                type: 'string', 
                required: false, 
                description: 'The scope ID, such as Azure AD tenant ID, in which ActorUserId and ActorUsername are defined' 
            },
            ActorScope: { 
                type: 'string', 
                required: false, 
                description: 'The scope, such as Azure AD tenant, in which ActorUserId and ActorUsername are defined' 
            },
            ActorUsername: { 
                type: 'string', 
                required: false, 
                description: 'The Actor\'s username, including domain information when available' 
            },
            ActorUsernameType: { 
                type: 'string', 
                required: false, 
                description: 'Specifies the type of the user name stored in the ActorUsername field' 
            },
            ActorUserType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the Actor' 
            },
            ActorOriginalUserType: { 
                type: 'string', 
                required: false, 
                description: 'The user type as reported by the reporting device' 
            },
            ActorSessionId: { 
                type: 'string', 
                required: false, 
                description: 'The unique ID of the sign-in session of the Actor' 
            },
            TargetAppId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the application to which the authorization is required, often assigned by the reporting device' 
            },
            TargetAppName: { 
                type: 'string', 
                required: false, 
                description: 'The name of the application to which the authorization is required, including a service, a URL, or a SaaS application' 
            },
            TargetAppType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the application authorizing on behalf of the Actor'
            },
            TargetOriginalAppType: { 
                type: 'string', 
                required: false, 
                description: 'The target application type as reported by the reporting device' 
            },
            TargetUrl: { 
                type: 'string', 
                required: false, 
                description: 'A URL associated with the target application' 
            },
            ActingAppId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the application authorizing on behalf of the actor, including a process, browser, or service' 
            },
            ActingAppName: { 
                type: 'string', 
                required: false, 
                description: 'The name of the application authorizing on behalf of the actor, including a process, browser, or service' 
            },
            ActingAppType: { 
                type: 'string', 
                required: false, 
                description: 'The type of acting application' 
            },
            ActingOriginalAppType: { 
                type: 'string', 
                required: false, 
                description: 'The acting application type as reported by the reporting device' 
            },
            SrcIpAddr: { 
                type: 'string', 
                required: false, 
                description: 'The IP address of the source device' 
            },
            SrcPortNumber: { 
                type: 'int', 
                required: false, 
                description: 'The IP port from which the connection originated'
            },
            SrcHostname: { 
                type: 'string', 
                required: false, 
                description: 'The source device hostname, excluding domain information'
            },
            SrcDomain: { 
                type: 'string', 
                required: false, 
                description: 'The domain of the source device' 
            },
            SrcDomainType: { 
                type: 'string', 
                required: false, 
                description: 'The type of SrcDomain'
            },
            SrcFQDN: { 
                type: 'string', 
                required: false, 
                description: 'The source device hostname, including domain information when available'
            },
            SrcDescription: { 
                type: 'string', 
                required: false, 
                description: 'A descriptive text associated with the source device'
            },
            SrcDvcId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the source device' 
            },
            SrcDvcIdType: { 
                type: 'string', 
                required: false, 
                description: 'The type of SrcDvcId'
            },
            SrcDvcScopeId: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope ID the source device belongs to. SrcDvcScopeId map to a subscription ID on Azure and to an account ID on AWS'
            },
            SrcDvcScope: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope the source device belongs to. SrcDvcScope map to a subscription ID on Azure and to an account ID on AWS'
            },
            SrcDeviceType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the source device' 
            },
            SrcGeoCountry: { 
                type: 'string', 
                required: false, 
                description: 'The country associated with the source IP address'
            },
            SrcGeoLatitude: { 
                type: 'string', 
                required: false, 
                description: 'The latitude of the geographical coordinate associated with the source IP address'
            },
            SrcGeoLongitude: { 
                type: 'string', 
                required: false, 
                description: 'The longitude of the geographical coordinate associated with the source IP address'
            },
            SrcGeoRegion: { 
                type: 'string', 
                required: false, 
                description: 'The region within a country associated with the source IP address' 
            },
            SrcGeoCity: { 
                type: 'string', 
                required: false, 
                description: 'The city associated with the source IP address'
            },
            SrcRiskLevel: { 
                type: 'int', 
                required: false, 
                description: 'The risk level associated with the identified Source'
            },
            SrcOriginalRiskLevel: { 
                type: 'string', 
                required: false, 
                description: 'The risk level associated with the identified Source as reported by the reporting device' 
            },
            TargetIpAddr: { 
                type: 'string', 
                required: false, 
                description: 'The IP address of the target device'
            },
            TargetPortNumber: { 
                type: 'int', 
                required: false, 
                description: 'The port of the target device' 
            },
            TargetHostname: { 
                type: 'string', 
                required: false, 
                description: 'The target device hostname, excluding domain information' 
            },
            TargetDomain: { 
                type: 'string', 
                required: false, 
                description: 'The domain of the target device'  
            },
            TargetDomainType: { 
                type: 'string', 
                required: false, 
                description: 'The type of TargetDomain'
            },
            TargetFQDN: { 
                type: 'string', 
                required: false, 
                description: 'The target device hostname, including domain information when available'
            },
            TargetDescription: { 
                type: 'string', 
                required: false, 
                description: 'A descriptive text associated with the target device' 
            },
            TargetDvcId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the target device' 
            },
            TargetDvcIdType: { 
                type: 'string', 
                required: false, 
                description: 'The type of TargetDvcId'
            },
            TargetDvcScopeId: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope ID the target device belongs to. TargetDvcScopeId map to a subscription ID on Azure and to an account ID on AWS'
            },
            TargetDvcScope: { 
                type: 'string', 
                required: false, 
                description: 'The cloud platform scope the target device belongs to. TargetDvcScope map to a subscription ID on Azure and to an account ID on AWS' 
            },
            TargetDeviceType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the target device'
            },
            TargetGeoCountry: { 
                type: 'string', 
                required: false, 
                description: 'The country associated with the target IP address' 
            },
            TargetGeoLatitude: { 
                type: 'string', 
                required: false, 
                description: 'The latitude of the geographical coordinate associated with the target IP address'
            },
            TargetGeoLongitude: { 
                type: 'string', 
                required: false, 
                description: 'The longitude of the geographical coordinate associated with the target IP address'
            },
            TargetGeoRegion: { 
                type: 'string', 
                required: false, 
                description: 'The region within a country associated with the target IP address'
            },
            TargetGeoCity: { 
                type: 'string', 
                required: false, 
                description: 'The city associated with the target IP address'
            },
            TargetRiskLevel: { 
                type: 'int', 
                required: false, 
                description: 'The risk level associated with the target' 
            },
            TargetOriginalRiskLevel: { 
                type: 'string', 
                required: false, 
                description: 'The risk level associated with the target, as reported by the reporting device'
            },
            TargetDvcOs: { 
                type: 'string', 
                required: false, 
                description: 'The OS of the target device' 
            },
            TargetUserId: { 
                type: 'string', 
                required: false, 
                description: 'A machine-readable, alphanumeric, unique representation of the actor' 
            },
            TargetUserIdType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the ID stored in the TargetUserId field'
            },
            TargetUserScopeId: { 
                type: 'string', 
                required: false, 
                description: 'The scope ID, such as Azure AD tenant ID, in which TargetUserId and TargetUsername are defined' 
            },
            TargetUserScope: { 
                type: 'string', 
                required: false, 
                description: 'The scope, such as Azure AD tenant, in which TargetUserId and TargetUsername are defined'
            },
            TargetUsername: { 
                type: 'string', 
                required: false, 
                description: 'The Target actor\'s username, including domain information when available' 
            },
            TargetUsernameType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the Target actor\'s username specified in TargetUsername field' 
            },
            TargetUserType: { 
                type: 'string', 
                required: false, 
                description: 'The type of the Target actor' 
            },
            TargetOriginalUserType: { 
                type: 'string', 
                required: false, 
                description: 'The user type as reported by the reporting device' 
            },
            TargetSessionId: { 
                type: 'string', 
                required: false, 
                description: 'The unique ID of the sign-in session of the Target actor' 
            },
            SrcIsp: { 
                type: 'string', 
                required: false, 
                description: 'The Internet Service Provider (ISP) used by the source device to connect to the internet' 
            },
            SrcDvcOs: { 
                type: 'string', 
                required: false, 
                description: 'The OS of the source device' 
            },
            LogonMethod: { 
                type: 'string', 
                required: false, 
                description: 'The method used to perform authentication'
            },
            LogonProtocol: { 
                type: 'string', 
                required: false, 
                description: 'The protocol used to perform authentication' 
            }
  }
};