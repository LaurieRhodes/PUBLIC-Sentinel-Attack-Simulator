export const relationships = {
    SecurityEvent: {
        description: "Security events that may have triggered the anomaly",
        linkFields: ["Computer", "Account", "EventID"]
    },
    ASimAuthenticationEventLogs: {
        description: "Authentication events related to the anomaly",
        linkFields: ["ActorUsername", "DvcHostname", "TargetUsername"]
    },
    ASimProcessEventLogs: {
        description: "Process events that may be related to the anomaly",
        linkFields: ["ActingProcessName", "TargetProcessName"]
    }
};