# Sentinel Writer Model Context Protocol Project Overview

## Introduction

The Sentinel Writer Model Context Protocol (SWMCP) is an advanced security event simulation tool designed to work with Claude Desktop and Microsoft Sentinel. It leverages the Model Context Protocol to facilitate AI-driven security event generation and testing.

## Project Documentation

- [Main README](README.md) - Quick start and overview
- [Installation Guide](docs/installation.md) - Detailed setup instructions
- [Configuration Guide](docs/configuration.md) - System configuration details
- [Architecture Overview](docs/architecture.md) - System design and components
- [Usage Guide](docs/usage.md) - Comprehensive usage instructions

## Project Structure

```
PUBLIC-Sentinel-Attack-Simulator/
├── .git/                           # Git repository data
├── docs/                           # Documentation files
│   ├── installation.md            # Installation instructions
│   ├── configuration.md           # Configuration guide
│   ├── architecture.md            # Architecture documentation
│   └── usage.md                   # Usage guide
├── infrastructure/                 # Azure infrastructure as code
│   ├── main.bicep                # Main Bicep deployment template
│   ├── parameters.json           # Deployment parameters
│   ├── DCR-Anomalies.bicep       # Anomalies DCR template
│   ├── DCR-ASimAuditEventLogs.bicep
│   ├── DCR-ASimAuthenticationEventLogs.bicep
│   ├── DCR-ASimDhcpEventLogs.bicep
│   ├── DCR-ASimDnsActivityLogs.bicep
│   ├── DCR-ASimFileEventLogs.bicep
│   ├── DCR-ASimNetworkSessionLogs.bicep
│   ├── DCR-ASimProcessEventLogs.bicep
│   ├── DCR-ASimRegistryEventLogs.bicep
│   ├── DCR-ASimUserManagementActivityLogs.bicep
│   ├── DCR-ASimWebSessionLogs.bicep
│   ├── DCR-AWSCloudTrail.bicep
│   ├── DCR-AWSCloudWatch.bicep
│   ├── DCR-AWSGuardDuty.bicep
│   ├── DCR-AWSVPCFlow.bicep
│   ├── DCR-CommonSecurityLog.bicep
│   ├── DCR-GCPAuditLogs.bicep
│   ├── DCR-GoogleCloudSCC.bicep
│   ├── DCR-SecurityEvent.bicep
│   ├── DCR-Syslog.bicep
│   └── DCR-WindowsEvent.bicep
├── src/                           # Source code
│   ├── claude_desktop_config.json # Claude Desktop configuration
│   └── server-sentinel-writer/    # Sentinel Writer MCP server
├── README.md                      # Project README
└── PROJECT.md                     # This file - Project structure and documentation map
```

## Key Components

### Infrastructure Components

1. **Data Collection Rules (DCRs)**
   
   - ASIM (Advanced Security Information Model) templates
   - Cloud provider log templates (AWS, GCP)
   - Traditional security log templates
   - System event templates

2. **Source Code**
   
   - Claude Desktop configuration
   - Sentinel Writer MCP server implementation
   - Supporting utilities and tools

### Integration Points

1. **Claude Desktop Integration**
   
   - MCP server configuration
   - Event generation interface

2. **Azure Integration**
   
   - Data Collection Endpoints
   - Data Collection Rules
   - Microsoft Sentinel workspace

3. **Model Context Protocol**
   
   - Brave Search integration (optional)
   - Event generation protocol
   - Server communication

## Development Guidelines

### Code Organization

- Infrastructure code in `/infrastructure`
- Source code in `/src`
- Documentation in `/docs`
- Configuration examples in appropriate directories

### Documentation Standards

- Markdown format for all documentation
- Clear structure with headers and sections
- Code examples where appropriate
- Regular updates with changes

### Version Control

- Git-based version control
- Feature branch workflow
- Clear commit messages
- Regular main branch updates

## Getting Started

1. Review the [README.md](README.md) for project overview
2. Follow the [Installation Guide](docs/installation.md) for setup
3. Configure using the [Configuration Guide](docs/configuration.md)
4. Review [Architecture Overview](docs/architecture.md) for system understanding
5. Follow [Usage Guide](docs/usage.md) for operation

## Support and Contribution

- GitHub Issues for bug reports and feature requests
- Pull requests welcome
- Code review process
- Regular maintenance and updates

## Security

- Follow security best practices
- Regular security reviews
- Credential management
- Access control implementation

## Future Development

1. **Planned Features**
   
   - Additional log type support
   - Enhanced event generation capabilities
   - Advanced integration options
   - Performance optimizations

2. **Enhancement Areas**
   
   - Scalability improvements
   - Additional cloud provider support
   - Advanced monitoring capabilities
   - Extended automation features