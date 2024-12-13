export const schema = {
    fields: {
      AccountId: {
        type: 'string',
        required: false,
        description: 'The AWS account ID of the owner of the source network interface for which traffic is recorded. If the network interface is created by an AWS service, for example when creating a VPC endpoint or Network Load Balancer, the record may display unknown for this field.'
      },
      Action: {
        type: 'string',
        required: false,
        description: 'The action that is associated with the traffic.'
      },
      AzId: {
        type: 'string',
        required: false,
        description: 'The ID of the Availability Zone.'
      },
      Bytes: {
        type: 'long',
        required: false,
        description: 'The number of bytes transferred during the flow.'
      },
      DstAddr: {
        type: 'string',
        required: false,
        description: 'The destination address for outgoing traffic.'
      },
      DstPort: {
        type: 'int',
        required: false,
        description: 'The destination port of the traffic.'
      },
      End: {
        type: 'datetime',
        required: false,
        description: 'The time when the last packet of the flow was received within the aggregation interval.'
      },
      FlowDirection: {
        type: 'string',
        required: false,
        description: 'The direction of the flow with respect to the interface where traffic is captured.'
      },
      InstanceId: {
        type: 'string',
        required: false,
        description: 'The ID of the instance that\'s associated with network interface for which the traffic is recorded.'
      },
      InterfaceId: {
        type: 'string',
        required: false,
        description: 'The ID of the network interface for which the traffic is recorded.'
      },
      LogStatus: {
        type: 'string',
        required: false,
        description: 'The logging status of the flow log.'
      },
      Packets: {
        type: 'int',
        required: false,
        description: 'The number of packets transferred during the flow.'
      },
      PktDstAddr: {
        type: 'string',
        required: false,
        description: 'The packet-level (original) destination IP address for the traffic.'
      },
      PktDstAwsService: {
        type: 'string',
        required: false,
        description: 'The name of the subset of IP address ranges for the PktDstAddr field, if the destination IP address is for an AWS service.'
      },
      PktSrcAddr: {
        type: 'string',
        required: false,
        description: 'The packet-level (original) source IP address of the traffic.'
      },
      PktSrcAwsService: {
        type: 'string',
        required: false,
        description: 'The name of the subset of IP address ranges for the PktSrcAddr field, if the source IP address is for an AWS service.'
      },
      Protocol: {
        type: 'int',
        required: false,
        description: 'The IANA protocol number of the traffic.'
      },
      Region: {
        type: 'string',
        required: false,
        description: 'The Region that contains the network interface for which traffic is recorded.'
      },
      SourceSystem: {
        type: 'string',
        required: false,
        description: 'The type of agent the event was collected by. For example, OpsManager for Windows agent, either direct connect or Operations Manager, Linux for all Linux agents, or Azure for Azure Diagnostics'
      },
      SrcAddr: {
        type: 'string',
        required: false,
        description: 'The source address for incoming traffic.'
      },
      SrcPort: {
        type: 'int',
        required: false,
        description: 'The source port of the traffic.'
      },
      SublocationId: {
        type: 'string',
        required: false,
        description: 'The ID of the sublocation that contains the network interface for which traffic is recorded.'
      },
      SublocationType: {
        type: 'string',
        required: false,
        description: 'The type of sublocation that is returned in the sublocationId field.'
      },
      SubnetId: {
        type: 'string',
        required: false,
        description: 'The ID of the subnet.'
      },
      TcpFlags: {
        type: 'int',
        required: false,
        description: 'The bitmask value for the following TCP flags.'
      },
      TenantId: {
        type: 'string',
        required: false,
        description: 'The Log Analytics workspace ID'
      },
      TimeGenerated: {
        type: 'datetime',
        required: true,
        description: 'The timestamp (UTC) of when the event was generated. This value will be the same as \'start\' input field or the data arrival time to Azure Monitor in case the \'start\' input field is empty or missing.'
      },
      TrafficPath: {
        type: 'string',
        required: false,
        description: 'The path that egress traffic takes to the destination.'
      },
      TrafficType: {
        type: 'string',
        required: false,
        description: 'The type of traffic. The possible values are: IPv4, IPv6, and EFA. For more information search for \'Elastic Fabric Adapter (EFA)\'.'
      },
      Type: {
        type: 'string',
        required: false,
        description: 'The name of the table'
      },
      Version: {
        type: 'int',
        required: false,
        description: 'The VPC Flow Logs version.'
      },
      VpcId: {
        type: 'string',
        required: false,
        description: 'The ID of the VPC.'
      }
    }
  };