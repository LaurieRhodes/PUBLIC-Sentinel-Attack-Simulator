// schemas/Syslog/examples.js
export const examples = {
  basic: [
    {
      "TimeGenerated": "2023-12-12T08:23:05Z",
      "Facility": "auth",
      "SeverityLevel": "info",
      "HostName": "LinuxServer01",
      "HostIP": "192.168.1.10",
      "ProcessID": 1234,
      "ProcessName": "sshd",
      "SyslogMessage": "Accepted password for jdoe from 203.0.113.5 port 54321 ssh2",
      "EventTime": "2023-12-12T08:23:05Z",
      "Computer": "LinuxServer01",
      "CollectorHostName": "SyslogCollector01",
      "SourceSystem": "Linux",
      "_ResourceId": "/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/ResourceGroupName/providers/Microsoft.Compute/virtualMachines/LinuxServer01",
      "_SubscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ],
  advanced: [
    {
      "TimeGenerated": "2023-12-12T11:45:30Z",
      "Facility": "auth",
      "SeverityLevel": "crit",
      "HostName": "LinuxServer02",
      "HostIP": "192.168.1.11",
      "ProcessID": 5678,
      "ProcessName": "sshd",
      "SyslogMessage": "Failed password for root from 198.51.100.10 port 65432 ssh2",
      "EventTime": "2023-12-12T11:45:30Z",
      "Computer": "LinuxServer02",
      "CollectorHostName": "SyslogCollector02",
      "SourceSystem": "Linux",
      "_ResourceId": "/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/ResourceGroupName/providers/Microsoft.Compute/virtualMachines/LinuxServer02",
      "_SubscriptionId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ],
  errorCases: []
};
