export const schema = {
    fields: {
      Activity: {
        type: 'string',
        required: false,
        description: 'A string that represents a human-readable and understandable description of the event.'
      },
      AdditionalExtensions: {
        type: 'string',
        required: false,
        description: 'A placeholder for additional fields. Fields are logged as key-value pairs.'
      },
      ApplicationProtocol: {
        type: 'string',
        required: false,
        description: 'The protocol used in the application, such as HTTP, HTTPS, SSHv2, Telnet, POP, IMPA, IMAPS, and so on.'
      },
      CollectorHostName: {
        type: 'string',
        required: false,
        description: 'The hostname of the collector machine running the agent.'
      },
      CommunicationDirection: {
        type: 'string',
        required: false,
        description: 'Any information about the direction the observed communication has taken. Valid values: 0 = Inbound, 1 = Outbound.'
      },
      Computer: {
        type: 'string',
        required: false,
        description: 'Host, from Syslog.'
      },
      DestinationDnsDomain: {
        type: 'string',
        required: false,
        description: 'The DNS part of the fully-qualified domain name (FQDN).'
      },
      DestinationHostName: {
        type: 'string',
        required: false,
        description: 'The destination that the event refers to in an IP network. The format should be an FQDN associated with the destination node, when a node is available. For example: host.domain.com or host.'
      },
      DestinationIP: {
        type: 'string',
        required: false,
        description: 'The destination IpV4 address that the event refers to in an IP network.'
      },
      DestinationMACAddress: {
        type: 'string',
        required: false,
        description: 'The destination MAC address (FQDN).'
      },
      DestinationNTDomain: {
        type: 'string',
        required: false,
        description: 'The Windows domain name of the destination address.'
      },
      DestinationPort: {
        type: 'int',
        required: false,
        description: 'Destination port. Valid values: 0 - 65535.'
      },
      DestinationProcessId: {
        type: 'int',
        required: false,
        description: 'The ID of the destination process associated with the event.'
      },
      DestinationProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the event\'s destination process, such as telnetd or sshd.'
      },
      DestinationServiceName: {
        type: 'string',
        required: false,
        description: 'The service that is targeted by the event. For example: sshd.'
      },
      DestinationTranslatedAddress: {
        type: 'string',
        required: false,
        description: 'Identifies the translated destination referred to by the event in an IP network, as an IPv4 IP address.'
      },
      DestinationTranslatedPort: {
        type: 'int',
        required: false,
        description: 'Port after translation, such as a firewall Valid port numbers: 0 - 65535.'
      },
      DestinationUserID: {
        type: 'string',
        required: false,
        description: 'Identifies the destination user by ID. For example: in Unix, the root user is generally associated with the user ID 0.'
      },
      DestinationUserName: {
        type: 'string',
        required: false,
        description: 'Identifies the destination user by name.'
      },
      DestinationUserPrivileges: {
        type: 'string',
        required: false,
        description: 'Defines the destination use\'s privileges. Valid values: Admninistrator, User, Guest.'
      },
      DeviceAction: {
        type: 'string',
        required: false,
        description: 'The action mentioned in the event.'
      },
      DeviceAddress: {
        type: 'string',
        required: false,
        description: 'The IPv4 address of the device generating the event.'
      },
      DeviceCustomDate1: {
        type: 'string',
        required: false,
        description: 'One of two timestamp fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomDate1Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomDate2: {
        type: 'string',
        required: false,
        description: 'One of two timestamp fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomDate2Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomFloatingPoint1: {
        type: 'real',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomFloatingPoint1Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomFloatingPoint2: {
        type: 'real',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomFloatingPoint2Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomFloatingPoint3: {
        type: 'real',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomFloatingPoint3Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomFloatingPoint4: {
        type: 'real',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomFloatingPoint4Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomIPv6Address1: {
        type: 'string',
        required: false,
        description: 'One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomIPv6Address1Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomIPv6Address2: {
        type: 'string',
        required: false,
        description: 'One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomIPv6Address2Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomIPv6Address3: {
        type: 'string',
        required: false,
        description: 'One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomIPv6Address3Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomIPv6Address4: {
        type: 'string',
        required: false,
        description: 'One of four IPv6 address fields available to map fields that do not apply to any other in this dictionary.'
      },
      DeviceCustomIPv6Address4Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomNumber1: {
        type: 'int',
        required: false,
        description: 'Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber1.'
      },
      DeviceCustomNumber1Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomNumber2: {
        type: 'int',
        required: false,
        description: 'Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber2.'
      },
      DeviceCustomNumber2Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomNumber3: {
        type: 'int',
        required: false,
        description: 'Soon to be a deprecated field. Will be replaced by FieldDeviceCustomNumber3.'
      },
      DeviceCustomNumber3Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString1: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString1Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString2: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString2Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString3: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString3Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString4: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString4Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString5: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString5Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceCustomString6: {
        type: 'string',
        required: false,
        description: 'One of six strings available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      DeviceCustomString6Label: {
        type: 'string',
        required: false,
        description: 'All custom fields have a corresponding label field. Each of these fields is a string and describes the purpose of the custom field.'
      },
      DeviceDnsDomain: {
        type: 'string',
        required: false,
        description: 'The DNS domain part of the full qualified domain name (FQDN).'
      },
      DeviceEventCategory: {
        type: 'string',
        required: false,
        description: 'Represents the category assigned by the originating device. Devices often use their own categorization schema to classify event. Example: \'/Monitor/Disk/Read\'.'
      },
      DeviceEventClassID: {
        type: 'string',
        required: false,
        description: 'String or integer that serves as a unique identifier per event type.'
      },
      DeviceExternalID: {
        type: 'string',
        required: false,
        description: 'A name that uniquely identifies the device generating the event.'
      },
      DeviceFacility: {
        type: 'string',
        required: false,
        description: 'The facility generating the event. For example: auth or local1.'
      },
      DeviceInboundInterface: {
        type: 'string',
        required: false,
        description: 'The interface on which the packet or data entered the device. For example: ethernet1/2.'
      },
      DeviceMacAddress: {
        type: 'string',
        required: false,
        description: 'The MAC address of the device generating the event.'
      },
      DeviceName: {
        type: 'string',
        required: false,
        description: 'The FQDN associated with the device node, when a node is available. For example: host.domain.com or host.'
      },
      DeviceNtDomain: {
        type: 'string',
        required: false,
        description: 'The Windows domain of the device address.'
      },
      DeviceOutboundInterface: {
        type: 'string',
        required: false,
        description: 'Interface on which the packet or data left the device.'
      },
      DevicePayloadId: {
        type: 'string',
        required: false,
        description: 'Unique identifier for the payload associated with the event.'
      },
      DeviceProduct: {
        type: 'string',
        required: false,
        description: 'String that together with device product and version definitions, uniquely identifies the type of sending device.'
      },
      DeviceTimeZone: {
        type: 'string',
        required: false,
        description: 'Timezone of the device generating the event.'
      },
      DeviceTranslatedAddress: {
        type: 'string',
        required: false,
        description: 'Identifies the translated device address that the event refers to, in an IP network. The format is an Ipv4 address.'
      },
      DeviceVendor: {
        type: 'string',
        required: false,
        description: 'String that together with device product and version definitions, uniquely identifies the type of sending device.'
      },
      DeviceVersion: {
        type: 'string',
        required: false,
        description: 'String that together with device product and version definitions, uniquely identifies the type of sending device.'
      },
      EndTime: {
        type: 'datetime',
        required: false,
        description: 'The time at which the activity related to the event ended.'
      },
      EventCount: {
        type: 'int',
        required: false,
        description: 'A count associated with the event, showing how many times the same event was observed.'
      },
      EventOutcome: {
        type: 'string',
        required: false,
        description: 'Displays the outcome, usually as \'success\' or \'failure\'.'
      },
      EventType: {
        type: 'int',
        required: false,
        description: 'Event type. Value values include: 0: base event, 1: aggregated, 2: correlation event, 3: action event. Note: This event can be omitted for base events.'
      },
      ExternalID: {
        type: 'int',
        required: false,
        description: 'Soon to be a deprecated field. Will be replaced by ExtID.'
      },
      ExtID: {
        type: 'string',
        required: false,
        description: 'An ID used by the originating device (will replace legacy ExternalID). Typically, these values have increasing values that are each associated with an event.'
      },
      FieldDeviceCustomNumber1: {
        type: 'long',
        required: false,
        description: 'One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber1). Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      FieldDeviceCustomNumber2: {
        type: 'long',
        required: false,
        description: 'One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber2). Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      FieldDeviceCustomNumber3: {
        type: 'long',
        required: false,
        description: 'One of three number fields available to map fields that do not apply to any other in this dictionary (will replace legacy DeviceCustomNumber3). Use sparingly and seek a more specific, dictionary supplied field when possible.'
      },
      FileCreateTime: {
        type: 'string',
        required: false,
        description: 'Time when the file was created.'
      },
      FileHash: {
        type: 'string',
        required: false,
        description: 'Hash of a file.'
      },
      FileID: {
        type: 'string',
        required: false,
        description: 'An ID associated with a file, such as the inode.'
      },
      FileModificationTime: {
        type: 'string',
        required: false,
        description: 'Time when the file was last modified.'
      },
      FileName: {
        type: 'string',
        required: false,
        description: 'The file\'s name, without the path.'
      },
      FilePath: {
        type: 'string',
        required: false,
        description: 'Full path to the file, including the filename. For example: C:\\ProgramFiles\\WindowsNT\\Accessories\\wordpad.exe or /usr/bin/zip.'
      },
      FilePermission: {
        type: 'string',
        required: false,
        description: 'The file\'s permissions. For example: \'2,1,1\'.'
      },
      FileSize: {
        type: 'int',
        required: false,
        description: 'The size of the file in bytes.'
      },
      FileType: {
        type: 'string',
        required: false,
        description: 'File type, such as pipe, socket, and so on.'
      },
      FlexDate1: {
        type: 'string',
        required: false,
        description: 'A timestamp field available to map a timestamp that does not apply to any other defined timestamp field in this dictionary. Use all flex fields sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary.'
      },
      FlexDate1Label: {
        type: 'string',
        required: false,
        description: 'The label field is a string and describes the purpose of the flex field.'
      },
      FlexNumber1: {
        type: 'int',
        required: false,
        description: 'Number fields available to map Int data that does not apply to any other field in this dictionary.'
      },
      FlexNumber1Label: {
        type: 'string',
        required: false,
        description: 'The label that describes the value in FlexNumber1'
      },
      FlexNumber2: {
        type: 'int',
        required: false,
        description: 'Number fields available to map Int data that does not apply to any other field in this dictionary.'
      },
      FlexNumber2Label: {
        type: 'string',
        required: false,
        description: 'The label that describes the value in FlexNumber2'
      },
      FlexString1: {
        type: 'string',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary.'
      },
      FlexString1Label: {
        type: 'string',
        required: false,
        description: 'The label field is a string and describes the purpose of the flex field.'
      },
      FlexString2: {
        type: 'string',
        required: false,
        description: 'One of four floating point fields available to map fields that do not apply to any other in this dictionary. Use sparingly and seek a more specific, dictionary supplied field when possible. These fields are typically reserved for customer use and should not be set by vendors unless necessary.'
      },
      FlexString2Label: {
        type: 'string',
        required: false,
        description: 'The label field is a string and describes the purpose of the flex field.'
      },
      IndicatorThreatType: {
        type: 'string',
        required: false,
        description: 'The threat type of the MaliciousIP according to our TI feed.'
      },
      LogSeverity: {
        type: 'string',
        required: false,
        description: 'A string or integer that describes the importance of the event. Valid string values: Unknown , Low, Medium, High, Very-High Valid integer values are: 0-3 = Low, 4-6 = Medium, 7-8 = High, 9-10 = Very-High.'
      },
      MaliciousIP: {
        type: 'string',
        required: false,
        description: 'If one of the IP in the message was correlate with the current TI feed we have it will show up here.'
      },
      MaliciousIPCountry: {
        type: 'string',
        required: false,
        description: 'The country of the MaliciousIP according to the GEO information at the time of the record ingestion.'
      },
      MaliciousIPLatitude: {
        type: 'real',
        required: false,
        description: 'The Latitude of the MaliciousIP according to the GEO information at the time of the record ingestion.'
      },
      MaliciousIPLongitude: {
        type: 'real',
        required: false,
        description: 'The Longitude of the MaliciousIP according to the GEO information at the time of the record ingestion.'
      },
      Message: {
        type: 'string',
        required: false,
        description: 'A message that gives more details about the event.'
      },
      OldFileCreateTime: {
        type: 'string',
        required: false,
        description: 'Time when the old file was created.'
      },
      OldFileHash: {
        type: 'string',
        required: false,
        description: 'Hash of the old file.'
      },
      OldFileID: {
        type: 'string',
        required: false,
        description: 'And ID associated with the old file, such as the inode.'
      },
      OldFileModificationTime: {
        type: 'string',
        required: false,
        description: 'Time when the old file was last modified.'
      },
      OldFileName: {
        type: 'string',
        required: false,
        description: 'Name of the old file.'
      },
      OldFilePath: {
        type: 'string',
        required: false,
        description: 'Full path to the old file, including the filename. For example: C:\\ProgramFiles\\WindowsNT\\Accessories\\wordpad.exe or /usr/bin/zip.'
      },
      OldFilePermission: {
        type: 'string',
        required: false,
        description: 'Permissions of the old file. For example: \'2,1,1\'.'
      },
      OldFileSize: {
        type: 'int',
        required: false,
        description: 'The size of the old file in bytes.'
      },
      OldFileType: {
        type: 'string',
        required: false,
        description: 'File type of the old file, such as a pipe, socket, and so on.'
      },
      OriginalLogSeverity: {
        type: 'string',
        required: false,
        description: 'A non-mapped version of LogSeverity. For example: Warning/Critical/Info insted of the normilized Low/Medium/High in the LogSeverity Field'
      },
      ProcessID: {
        type: 'int',
        required: false,
        description: 'Defines the ID of the process on the device generating the event.'
      },
      ProcessName: {
        type: 'string',
        required: false,
        description: 'Process name associated with the event. For example: in UNIX, the process generating the syslog entry.'
      },
      Protocol: {
        type: 'string',
        required: false,
        description: 'Transport protocol that identifies the Layer-4 protocol used. Possible values include protocol names, such as TCP or UDP.'
      },
      Reason: {
        type: 'string',
        required: false,
        description: 'The reason an audit event was generated. For example \'bad password\' or \'unknown user\'. This could also be an error or return code. Example: \'0x1234\'.'
      },
      ReceiptTime: {
        type: 'string',
        required: false,
        description: 'The time at which the event related to the activity was received. Different then the \'Timegenerated\' field, which is when the event was recieved in the log collector machine.'
      },
      ReceivedBytes: {
        type: 'long',
        required: false,
        description: 'Number of bytes transferred inbound.'
      },
      RemoteIP: {
        type: 'string',
        required: false,
        description: 'The remote IP address, derived from the event\'s direction value, if possible.'
      },
      RemotePort: {
        type: 'string',
        required: false,
        description: 'The remote port, derived from the event\'s direction value, if possible.'
      },
      ReportReferenceLink: {
        type: 'string',
        required: false,
        description: 'Link to the report of the TI feed.'
      },
      RequestClientApplication: {
        type: 'string',
        required: false,
        description: 'The user agent associated with the request.'
      },
      RequestContext: {
        type: 'string',
        required: false,
        description: 'Describes the content from which the request originated, such as the HTTP Referrer.'
      },
      RequestCookies: {
        type: 'string',
        required: false,
        description: 'Cookies associated with the request.'
      },
      RequestMethod: {
        type: 'string',
        required: false,
        description: 'The method used to access a URL. Valid values include methods such as POST, GET, and so on.'
      },
      RequestURL: {
        type: 'string',
        required: false,
        description: 'The URL accessed for an HTTP request, including the protocol. For example: http://www/secure.com.'
      },
      SentBytes: {
        type: 'long',
        required: false,
        description: 'Number of bytes transferred outbound.'
      },
      SimplifiedDeviceAction: {
        type: 'string',
        required: false,
        description: 'A mapped version of DeviceAction, such as Denied > Deny.'
      },
      SourceDnsDomain: {
        type: 'string',
        required: false,
        description: 'The DNS domain part of the complete FQDN.'
      },
      SourceHostName: {
        type: 'string',
        required: false,
        description: 'Identifies the source that event refers to in an IP network. Format should be a fully qualified domain name (DQDN) associated with the source node, when a node is available. For example: host or host.domain.com.'
      },
      SourceIP: {
        type: 'string',
        required: false,
        description: 'The source that an event refers to in an IP network, as an IPv4 address.'
      },
      SourceMACAddress: {
        type: 'string',
        required: false,
        description: 'Source MAC address.'
      },
      SourceNTDomain: {
        type: 'string',
        required: false,
        description: 'The Windows domain name for the source address.'
      },
      SourcePort: {
        type: 'int',
        required: false,
        description: 'The source port number. Valid port numbers are 0 - 65535.'
      },
      SourceProcessId: {
        type: 'int',
        required: false,
        description: 'The ID of the source process associated with the event.'
      },
      SourceProcessName: {
        type: 'string',
        required: false,
        description: 'The name of the event\'s source process.'
      },
      SourceServiceName: {
        type: 'string',
        required: false,
        description: 'The service responsible for generating the event.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      SourceTranslatedAddress: {
        type: 'string',
        required: false,
        description: 'Identifies the translated source that the event refers to in an IP network.'
      },
      SourceTranslatedPort: {
        type: 'int',
        required: false,
        description: 'Source port after translation, such as a firewall. Valid port numbers are 0 - 65535.'
      },
      SourceUserID: {
        type: 'string',
        required: false,
        description: 'Identifies the source user by ID.'
      },
      SourceUserName: {
        type: 'string',
        required: false,
        description: 'Identifies the source user by name. Email addresses are also mapped into the UserName fields. The sender is a candidate to put into this field.'
      },
      SourceUserPrivileges: {
        type: 'string',
        required: false,
        description: 'The source user\'s privileges. Valid values include: Administrator, User, Guest.'
      },
      StartTime: {
        type: 'datetime',
        required: false,
        description: 'The time when the activity that the event refers to started.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      ThreatConfidence: {
        type: 'string',
        required: false,
        description: 'The threat confidence of the MaliciousIP according to our TI feed.'
      },
      ThreatDescription: {
        type: 'string',
        required: false,
        description: 'The threat description of the MaliciousIP according to our TI feed.'
      },
      ThreatSeverity: {
        type: 'int',
        required: false,
        description: 'The threat severity of the MaliciousIP according to our TI feed at the time of the record ingestion.'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'Event collection time in UTC.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      }
    }
  };  