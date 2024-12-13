export const schema = {
        fields: {
          AdditionalFields: {
            type: 'json_array',
            required: false,
            description: 'Additional information, represented using key/value pairs provided by the source which do not map to ASim.'
          },
          DhcpCircuitId: {
            type: 'string',
            required: false,
            description: 'The DHCP circuit ID, as defined by RFC3046.'
          },
          DhcpLeaseDuration: {
            type: 'int',
            required: false,
            description: 'The length of the lease granted to a client, in seconds.'
          },
          DhcpSessionDuration: {
            type: 'int',
            required: false,
            description: 'The amount of time, in milliseconds, for the completion of the DHCP session.'
          },
          DhcpSessionId: {
            type: 'string',
            required: false,
            description: 'The session identifier as reported by the reporting device. For the Windows DHCP server, set this to the TransactionID field.'
          },
          DhcpSrcDHCId: {
            type: 'string',
            required: false,
            description: 'The DHCP client ID, as defined by RFC4701.'
          },
          DhcpSubscriberId: {
            type: 'string',
            required: false,
            description: 'The DHCP subscriber ID, as defined by RFC3993.'
          },
          DhcpUserClass: {
            type: 'string',
            required: false,
            description: 'The DHCP User Class, as defined by RFC3004.'
          },
          DhcpUserClassId: {
            type: 'string',
            required: false,
            description: 'The DHCP User Class Id, as defined by RFC3004.'
          },
          DhcpVendorClass: {
            type: 'string',
            required: false,
            description: 'The DHCP Vendor Class, as defined by RFC3925.'
          },
          DhcpVendorClassId: {
            type: 'string',
            required: false,
            description: 'The DHCP Vendor Class Id, as defined by RFC3925.'
          },
          DvcAction: {
            type: 'string',
            required: false,
            description: 'For reporting security systems, the action taken by the system, if applicable.'
          },
          DvcDescription: {
            type: 'string',
            required: false,
            description: 'A descriptive text associated with the device.'
          },
          DvcDomain: {
            type: 'string',
            required: false,
            description: 'The domain of the device on which the event occurred or which reported the event, depending on the schema'
          },
          DvcDomainType: {
            type: 'string',
            required: false,
            description: 'The type of DvcDomain.'
          },
          DvcFQDN: {
            type: 'string',
            required: false,
            description: 'The hostname of the device on which the event occurred or which reported the event, depending on the schema.'
          },
          DvcHostname: {
            type: 'string',
            required: false,
            description: 'The hostname of the device on which the event occurred or which reported the event, depending on the schema.'
          },
          DvcId: {
            type: 'string',
            required: false,
            description: 'The unique ID of the device on which the event occurred or which reported the event, depending on the schema.'
          },
          DvcIdType: {
            type: 'string',
            required: false,
            description: 'The type of DvcId.'
          },
          DvcInterface: {
            type: 'string',
            required: false,
            description: 'The network interface on which data was captured. This field is typically relevant to network related activity which is captured by an intermediate or tap device.'
          },
          DvcIpAddr: {
            type: 'string',
            required: false,
            description: 'The IP address of the device on which the event occurred or which reported the event, depending on the schema.'
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
            description: 'The network on which the event occurred or which reported the event, depending on the schema. The zone is defined by the reporting device.'
          },
          EventCount: {
            type: 'int',
            required: false,
            description: 'The number of events described by the record. This value is used when the source supports aggregation, and a single record might represent multiple events.'
          },
          EventEndTime: {
            type: 'datetime',
            required: false,
            description: 'The time in which the event ended. If the source supports aggregation and the record represents multiple events, the time when the last event was generated. If not provided by the source record, this field aliases the TimeGenerated field.'
          },
          EventMessage: {
            type: 'string',
            required: false,
            description: 'A general message or description, either included in or generated from the record.'
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
            description: 'The product generating the event. The value should be one of the values listed in Vendors and Products.'
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
            description: 'The outcome of the event, represented by one of the following values: Success, Partial, Failure, NA (Not Applicable).'
          },
          EventResultDetails: {
            type: 'string',
            required: false,
            description: 'Reason or details for the result reported in the EventResult field.'
          },
          EventSchema: {
            type: 'string',
            required: false,
            description: 'The schema the event is normalized to. Each schema documents its schema name.'
          },
          EventSchemaVersion: {
            type: 'string',
            required: false,
            description: 'The version of the schema. Each schema documents its current version.'
          },
          EventSeverity: {
            type: 'string',
            required: false,
            description: 'The severity of the event.'
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
            description: 'The vendor of the product generating the event. The value should be one of the values listed in Vendors and Products.'
          },
          RequestedIpAddr: {
            type: 'string',
            required: false,
            description: 'The IP address requested by the DHCP client, when available.'
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
            description: 'The type of the device.'
          },
          SrcDomain: {
            type: 'string',
            required: false,
            description: 'The domain of the device.'
          },
          SrcDomainType: {
            type: 'string',
            required: false,
            description: 'The type of the domain.'
          },
          SrcDvcId: {
            type: 'string',
            required: false,
            description: 'The ID of the device.'
          },
          SrcDvcIdType: {
            type: 'string',
            required: false,
            description: 'The type of the DvcId.'
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
          SrcFQDN: {
            type: 'string',
            required: false,
            description: 'The device hostname, including domain information when available.'
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
            description: 'The device hostname, excluding domain information.'
          },
          SrcIpAddr: {
            type: 'string',
            required: false,
            description: 'The IP address of the source device.'
          },
          SrcMacAddr: {
            type: 'string',
            required: false,
            description: 'The MAC address of the network interface from which the connection or session originated.'
          },
          SrcOriginalRiskLevel: {
            type: 'string',
            required: false,
            description: 'The risk level associaeted with the identified Source as reported by the reporting device.'
          },
          SrcOriginalUserType: {
            type: 'string',
            required: false,
            description: 'The original source user type, if provided by the source.'
          },
          SrcPortNumber: {
            type: 'int',
            required: false,
            description: 'The IP port on which the device communicated, if applicable.'
          },
          SrcRiskLevel: {
            type: 'int',
            required: false,
            description: 'The risk level associated with the identified Source.'
          },
          SrcUserId: {
            type: 'string',
            required: false,
            description: 'A machine-readable, alphanumeric, unique representation of the user.'
          },
          SrcUserIdType: {
            type: 'string',
            required: false,
            description: 'The type of SrcUserId.'
          },
          SrcUsername: {
            type: 'string',
            required: false,
            description: 'The user\'s username, including domain information when available.'
          },
          SrcUsernameType: {
            type: 'string',
            required: false,
            description: 'The type of username.'
          },
          SrcUserScope: {
            type: 'string',
            required: false,
            description: 'The type of username.'
          },
          SrcUserScopeId: {
            type: 'string',
            required: false,
            description: 'The scope ID, such as Azure AD tenant ID, in which UserId and Username are defined.'
          },
          SrcUserSessionId: {
            type: 'string',
            required: false,
            description: 'The unique ID of the sign-in session of the user.'
          },
          SrcUserType: {
            type: 'string',
            required: false,
            description: 'The type of user'
          },
          SrcUserUid: {
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