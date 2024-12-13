export const schema = {
  fields: {
            TimeGenerated: { 
                type: 'datetime', 
                required: true, 
                description: 'The timestamp (UTC) of when the anomaly was generated.'
            },
            TenantId: { 
                type: 'string', 
                required: false, 
                description: 'The Log Analytics workspace ID'
            },
            SourceSystem: { 
                type: 'string', 
                required: false, 
                description: 'The type of agent the event was collected by'
            },
            Id: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the generated anomaly'
            },
            Description: { 
                type: 'string', 
                required: false, 
                description: 'The description of the anomaly'
            },
            RuleId: { 
                type: 'string', 
                required: false, 
                description: 'The ID of the Anomaly analytics rule'
            },
            ExtendedProperties: { 
                type: 'json', 
                required: true, 
                description: 'Additional data as key-value pairs'
            },
            UserPrincipalName: { 
                type: 'string', 
                required: false, 
                description:"The UPN of the user for which the anomaly was generated."
            },
            UserName: { 
                type: 'string', 
                required: false, 
                description:"	The username for which the anomaly was generated."  
            },
            StartTime: { 
                type: 'datetime', 
                required: true, 
                description: "The time (UTC) when the anomaly started." 
            }, 
            EndTime: { 
                type: 'datetime', 
                required: true, 
                description: "The time (UTC) when the anomaly ended." 
            }, 
            RuleName: { 
                type: 'string', 
                required: false, 
                description: "The name of the Anomaly analytics rule that generated this anomaly." 
            },
            WorkspaceId: { 
                type: 'string', 
                required: false, 
                description: "The ID of the Sentinel workspace" 
            },
            VendorName: { 
                type: 'string', 
                required: false, 
                description: "	The name of the vendor that generated this anomaly." 
            },
            AnomalyTemplateId: { 
                type: 'string', 
                required: false, 
                description: "The ID of the Anomaly template that generated this anomaly." 
            },
            AnomalyTemplateName: { 
                type: 'string', 
                required: false, 
                description: "The name of the Anomaly template that generated this anomaly." 
            },
            AnomalyTemplateVersion: { 
                type: 'string', 
                required: false, 
                description: "The version of the Anomaly template that generated this anomaly." 
            },
            RuleStatus: { 
                type: 'string', 
                required: false, 
                description: "The status (Flighting/Production) of the Anomaly analytics rule that generated this anomaly." 
            },
            RuleConfigVersion: { 
                type: 'string', 
                required: false, 
                description: "The configuration version of the Anomaly analytics rule that generated this anomaly." 
            },
            Score: { 
                type: 'string', 
                required: false, 
                description: "The score of the anomaly" 
            },
            ExtendedLinks: { 
                type: 'json_array', 
                required: false, 
                description: "List of links pointing to the data that generated the anomaly" 
            },
            Tactics: { 
                type: 'string', 
                required: false, 
                description: "List of MITRE ATT&CK tactics (strings) corresponding to the anomaly" 
            },
            Techniques: { 
                type: 'string', 
                required: false, 
                description: 'List MITRE ATT&CK techniques (strings) corresponding to the anomaly.' 
            },
            SourceIpAddress: { 
                type: 'string', 
                required: false, 
                description: 'The source IP address for which the anomaly was generated' 
            },
            SourceLocation: { 
                type: 'json_array', 
                required: false, 
                description: 'Info about the source location for which the anomaly was generated as JSON.' 
            },
            SourceDevice: { 
                type: 'json_array', 
                required: false, 
                description: 'The source device for which the anomaly was generated' 
            },
            DestinationIpAddress: { 
                type: 'json_array', 
                required: false, 
                description: 'The destination IP address for which the anomaly was generated' 
            },
            DestinationLocation: { 
                type: 'string', 
                required: false, 
                description: 'Info about the destination location for which the anomaly was generated as JSON.' 
            },
            DestinationDevice: { 
                type: 'string', 
                required: false, 
                description: 'The destination device for which the anomaly was generated.' 
            },
            ActivityInsights: { 
                type: 'json_array', 
                required: false, 
                description: 'Insights about the activities corresponding to the generated anomaly as JSON.' 
            },
            DeviceInsights: { 
                type: 'json_array', 
                required: false, 
                description: 'Insights about the devices corresponding to the generated anomaly as JSON.' 
            },
            UserInsights: { 
                type: 'json_array', 
                required: false, 
                description: 'Insights about the users corresponding to the generated anomaly as JSON.' 
            },
            AnomalyReasons: { 
                type: 'json_array', 
                required: false, 
                description: 'The detailed explanation of the generated anomaly as JSON.' 
            },
            Entities: { 
                type: 'json_array', 
                required: false, 
                description: 'JSON object containing all entities involved in the generated anomaly.' 
            },
            AnomalyDetails: { 
                type: 'json_array', 
                required: false, 
                description: 'JSON object containing general information about the rule and algorithm that generated the anomaly as well as explanations for the anomaly.' 
            }
        }
    };