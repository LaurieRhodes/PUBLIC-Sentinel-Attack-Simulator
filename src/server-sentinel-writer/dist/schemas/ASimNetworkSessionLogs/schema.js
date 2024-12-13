export const schema = {
    fields: {
      AdditionalFields: {
        type: 'json_array',
        required: false,
        description: 'Additional information, represented using key/value pairs provided by the source which do not map to ASim.'
      },
      DstAppId: {
        type: 'string',
        required: false,
        description: 'The ID of the destination application, as reported by the reporting device.'
      },
      DstAppName: {
        type: 'string',
        required: false,
        description: 'The name of the destination application.'
      },
      DstAppType: {
        type: 'string',
        required: false,
        description: 'The type of the destination application.'
      },
      DstBytes: {
        type: 'long',
        required: false,
        description: 'The number of bytes sent from the destination to the source for the connection or session. If the event is aggregated, DstBytes is the sum over all aggregated sessions.'
      },
      DstDescription: {
        type: 'string',
        required: false,
        description: 'A descriptive text associated with the destination.'
      },
      DstDeviceType: {
        type: 'string',
        required: false,
        description: 'The type of the destination device.'
      },
      DstDomain: {
        type: 'string',
        required: false,
        description: 'The domain of the destination device.'
      },
      DstDomainType: {
        type: 'string',
        required: false,
        description: 'The type of DstDomain.'
      },
      DstDvcId: {
        type: 'string',
        required: false,
        description: 'The ID of the destination device.'
      },
      DstDvcIdType: {
        type: 'string',
        required: false,
        description: 'The type of DstDvcId.'
      },
      DstFQDN: {
        type: 'string',
        required: false,
        description: 'The destination device hostname, including domain information when available.'
      },
      DstGeoCity: {
        type: 'string',
        required: false,
        description: 'The city associated with the destination IP address.'
      },
      DstGeoCountry: {
        type: 'string',
        required: false,
        description: 'The country associated with the destination IP address.'
      },
      DstGeoLatitude: {
        type: 'real',
        required: false,
        description: 'The latitude of the geographical coordinate associated with the destination IP address.'
      },
      DstGeoLongitude: {
        type: 'real',
        required: false,
        description: 'The longitude of the geographical coordinate associated with the destination IP address.'
      },
      DstGeoRegion: {
        type: 'string',
        required: false,
        description: 'The region, or state, within a country associated with the destination IP address.'
      },
      DstHostname: {
        type: 'string',
        required: false,
        description: 'The destination device hostname, excluding domain information.'
      },
      DstInterfaceGuid: {
        type: 'string',
        required: false,
        description: 'The GUID of the network interface used on the destination device.'
      },
      DstInterfaceName: {
        type: 'string',
        required: false,
        description: 'The network interface used for the connection or session by the destination device.'
      },
      DstIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP address of the connection or session destination.'
      },
      DstMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the network interface used for the connection or session by the destination device.'
      },
      DstNatIpAddr: {
        type: 'string',
        required: false,
        description: 'The DstNatIpAddr represents either of: The original address of the destination device if network address translation was used or the IP address used by the intermediary device for communication with the source.'
      },
      DstNatPortNumber: {
        type: 'int',
        required: false,
        description: 'If reported by an intermediary NAT device, the port used by the NAT device for communication with the source.'
      },
      DstOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The original destination user type, if provided by the source.'
      },
      DstPackets: {
        type: 'long',
        required: false,
        description: 'The number of packets sent from the destination to the source for the connection or session. The meaning of a packet is defined by the reporting device. If the event is aggregated, DstPackets is the sum over all aggregated sessions.'
      },
      DstPortNumber: {
        type: 'int',
        required: false,
        description: 'The destination IP port.'
      },
      DstSubscriptionId: {
        type: 'string',
        required: false,
        description: 'The cloud platform subscription ID the destination device belongs to. DstSubscriptionId map to a subscription ID on Azure and to an account ID on AWS.'
      },
      DstUserId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the destination user.'
      },
      DstUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the DstUserId field.'
      },
      DstUsername: {
        type: 'string',
        required: false,
        description: 'The destination username, including domain information when available. Use the simple form only if domain information isn\'t available.'
      },
      DstUsernameType: {
        type: 'string',
        required: false,
        description: 'Specifies the type of the username stored in the DstUsername field.'
      },
      DstUserType: {
        type: 'string',
        required: false,
        description: 'The type of destination user.'
      },
      DstVlanId: {
        type: 'string',
        required: false,
        description: 'The VLAN ID related to the destination device.'
      },
      DstZone: {
        type: 'string',
        required: false,
        description: 'The network zone of the destination, as defined by the reporting device.'
      },
      Dvc: {
        type: 'string',
        required: false,
        description: 'A unique identifier of the device on which the event occurred or which reported the event.'
      },
      DvcAction: {
        type: 'string',
        required: false,
        description: 'The action taken on the network session.'
      },
      DvcDescription: {
        type: 'string',
        required: false,
        description: 'A descriptive text associated with the device. For example: Primary Domain Controller.'
      },
      DvcDomain: {
        type: 'string',
        required: false,
        description: 'The domain of the device reporting the event.'
      },
      DvcDomainType: {
        type: 'string',
        required: false,
        description: 'The type of DvcDomain. Possible values include \'Windows\' and \'FQDN\'.'
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
      DvcInboundInterface: {
        type: 'string',
        required: false,
        description: 'If reported by an intermediary device, the network interface used by the NAT device for the connection to the source device.'
      },
      DvcInterface: {
        type: 'string',
        required: false,
        description: 'The network interface on which data was captured. This field is typically relevant to network related activity which is captured by an intermediate or tap device.'
      },
      DvcIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP Address of the device reporting the event.'
      },
      DvcMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the device on which the event occurred or which reported the event. Example: 00:1B:44:11:3A:B7'
      },
      DvcOriginalAction: {
        type: 'string',
        required: false,
        description: 'The original DvcAction as provided by the reporting device.'
      },
      DvcOs: {
        type: 'string',
        required: false,
        description: 'The operating system running on the device reporting the event.'
      },
      DvcOsVersion: {
        type: 'string',
        required: false,
        description: 'The version of the operating system on the device reporting the event.'
      },
      DvcOutboundInterface: {
        type: 'string',
        required: false,
        description: 'If reported by an intermediary device, the network interface used by the NAT device for the connection to the destination device.'
      },
      DvcSubscriptionId: {
        type: 'string',
        required: false,
        description: 'The cloud platform subscription ID the device belongs to. DvcSubscriptionId map to a subscription ID on Azure and to an account ID on AWS.'
      },
      DvcZone: {
        type: 'string',
        required: false,
        description: 'The network on which the event occurred or which reported the event. The zone is defined by the reporting device.'
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
      NetworkApplicationProtocol: {
        type: 'string',
        required: false,
        description: 'The application layer protocol used by the connection or session.'
      },
      NetworkBytes: {
        type: 'long',
        required: false,
        description: 'Number of bytes sent in both directions. If both BytesReceived and BytesSent exist, BytesTotal should equal their sum. If the event is aggregated, NetworkBytes is the sum over all aggregated sessions.'
      },
      NetworkConnectionHistory: {
        type: 'string',
        required: false,
        description: 'TCP flags and other potential IP header information.'
      },
      NetworkDirection: {
        type: 'string',
        required: false,
        description: 'The direction of the connection or session.'
      },
      NetworkDuration: {
        type: 'int',
        required: false,
        description: 'The amount of time, in milliseconds, for the completion of the network session or connection.'
      },
      NetworkIcmpCode: {
        type: 'int',
        required: false,
        description: 'For an ICMP message, the ICMP message type numeric value as described in RFC 2780 for IPv4 network connections, or in RFC 4443 for IPv6 network connections.'
      },
      NetworkIcmpType: {
        type: 'string',
        required: false,
        description: 'For an ICMP message, the ICMP message type text representation, as described in RFC 2780 for IPv4 network connections, or in RFC 4443 for IPv6 network connections.'
      },
      NetworkPackets: {
        type: 'long',
        required: false,
        description: 'The number of packets sent in both directions. If both PacketsReceived and PacketsSent exist, BytesTotal should equal their sum. The meaning of a packet is defined by the reporting device. If the event is aggregated, NetworkPackets is the sum over all aggregated sessions.'
      },
      NetworkProtocol: {
        type: 'string',
        required: false,
        description: 'The IP protocol used by the connection or session as listed in IANA protocol assignment, which is typically TCP, UDP, or ICMP.'
      },
      NetworkProtocolVersion: {
        type: 'string',
        required: false,
        description: 'The version of NetworkProtocol.'
      },
      NetworkRuleName: {
        type: 'string',
        required: false,
        description: 'The name or ID of the rule by which DvcAction was decided upon.'
      },
      NetworkRuleNumber: {
        type: 'int',
        required: false,
        description: 'The number of the rule by which DvcAction was decided upon.'
      },
      NetworkSessionId: {
        type: 'string',
        required: false,
        description: 'The session identifier as reported by the reporting device.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      SrcAppId: {
        type: 'string',
        required: false,
        description: 'The ID of the source application, as reported by the reporting device.'
      },
      SrcAppName: {
        type: 'string',
        required: false,
        description: 'The name of the source application.'
      },
      SrcAppType: {
        type: 'string',
        required: false,
        description: 'The type of the source application.'
      },
      SrcBytes: {
        type: 'long',
        required: false,
        description: 'The number of bytes sent from the source to the destination for the connection or session. If the event is aggregated, SrcBytes is the sum over all aggregated sessions.'
      },
      SrcDescription: {
        type: 'string',
        required: false,
        description: 'A descriptive text associated with the source.'
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
        description: 'The source device hostname, excluding domain information. If no device name is available, may store the relevant IP address.'
      },
      SrcInterfaceGuid: {
        type: 'string',
        required: false,
        description: 'The GUID of the network interface used on the source device.'
      },
      SrcInterfaceName: {
        type: 'string',
        required: false,
        description: 'The network interface used for the connection or session by the source device.'
      },
      SrcIpAddr: {
        type: 'string',
        required: false,
        description: 'The IP address from which the connection or session originated.'
      },
      SrcMacAddr: {
        type: 'string',
        required: false,
        description: 'The MAC address of the network interface from which the connection or session originated.'
      },
      SrcNatIpAddr: {
        type: 'string',
        required: false,
        description: 'The SrcNatIpAddr represents either of: The original address of the source device if network address translation was used or the IP address used by the intermediary device for communication with the destination.'
      },
      SrcNatPortNumber: {
        type: 'int',
        required: false,
        description: 'If reported by an intermediary NAT device, the port used by the NAT device for communication with the destination.'
      },
      SrcOriginalUserType: {
        type: 'string',
        required: false,
        description: 'The original destination user type, if provided by the by the reporting device.'
      },
      SrcPackets: {
        type: 'long',
        required: false,
        description: 'The number of packets sent from the source to the destination for the connection or session. The meaning of a packet is defined by the reporting device. If the event is aggregated, SrcPackets is the sum over all aggregated sessions.'
      },
      SrcPortNumber: {
        type: 'int',
        required: false,
        description: 'The IP port from which the connection originated. Might not be relevant for a session comprising multiple connections.'
      },
      SrcSubscriptionId: {
        type: 'string',
        required: false,
        description: 'The cloud platform subscription ID the source device belongs to. SrcSubscriptionId map to a subscription ID on Azure and to an account ID on AWS.'
      },
      SrcUserId: {
        type: 'string',
        required: false,
        description: 'A machine-readable, alphanumeric, unique representation of the source user.'
      },
      SrcUserIdType: {
        type: 'string',
        required: false,
        description: 'The type of the ID stored in the SrcUserId field.'
      },
      SrcUsername: {
        type: 'string',
        required: false,
        description: 'The source username, including domain information when available.'
      },
      SrcUsernameType: {
        type: 'string',
        required: false,
        description: 'Specifies the type of the username stored in the SrcUsername field.'
      },
      SrcUserType: {
        type: 'string',
        required: false,
        description: 'The type of the source user.'
      },
      SrcVlanId: {
        type: 'string',
        required: false,
        description: 'The VLAN ID related to the source device.'
      },
      SrcZone: {
        type: 'string',
        required: false,
        description: 'The network zone of the source, as defined by the reporting device.'
      },
      TcpFlagsAck: {
        type: 'bool',
        required: false,
        description: 'The TCP ACK flag reported. The acknowledgment flag is used to acknowledge the successful receipt of a packet. As we can see from the diagram above, the receiver sends an ACK as well as a SYN in the second step of the three way handshake process to tell the sender that it received its initial packet.'
      },
      TcpFlagsFin: {
        type: 'bool',
        required: false,
        description: 'The TCP FIN flag reported. The finished flag means there is no more data from the sender. Therefore, it is used in the last packet sent from the sender.'
      },
      TcpFlagsPsh: {
        type: 'bool',
        required: false,
        description: 'The TCP PSH flag reported. The push flag is somewhat similar to the URG flag and tells the receiver to process these packets as they are received instead of buffering them.'
      },
      TcpFlagsRst: {
        type: 'bool',
        required: false,
        description: 'The TCP RST flag reported. The reset flag gets sent from the receiver to the sender when a packet is sent to a particular host that was not expecting it.'
      },
      TcpFlagsSyn: {
        type: 'bool',
        required: false,
        description: 'The TCP SYN flag reported. The synchronisation flag is used as a first step in establishing a three way handshake between two hosts. Only the first packet from both the sender and receiver should have this flag set.'
      },
      TcpFlagsUrg: {
        type: 'bool',
        required: false,
        description: 'The TCP URG flag reported. The urgent flag is used to notify the receiver to process the urgent packets before processing all other packets. The receiver will be notified when all known urgent data has been received. See RFC 6093 for more details.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      ThreatCategory: {
        type: 'string',
        required: false,
        description: 'The category of the threat or malware identified in the network session.'
      },
      ThreatConfidence: {
        type: 'int',
        required: false,
        description: 'The confidence level of the threat identified, normalized to a value between 0 and a 100.'
      },
      ThreatField: {
        type: 'string',
        required: false,
        description: 'The field for which a threat was identified. The value is either SrcIpAddr, DstIpAddr, Domain, or DnsResponseName.'
      },
      ThreatFirstReportedTime: {
        type: 'datetime',
        required: false,
        description: 'The first time the IP address or domain were identified as a threat.'
      },
      ThreatId: {
        type: 'string',
        required: false,
        description: 'The ID of the threat or malware identified in the network session.'
      },
      ThreatIpAddr: {
        type: 'string',
        required: false,
        description: 'An IP address for which a threat was identified. The field ThreatField contains the name of the field ThreatIpAddr represents.'
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
        description: 'The name of the threat or malware identified in the network session.'
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
        description: 'The risk level associated with the session. The level is a number between 0 to 100.'
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