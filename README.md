# Sentinel Writer Model Context Protocol (SWMCP)

## Overview

The Sentinel Writer Model Context Protocol (SWMCP) is an advanced tool designed to integrate with Claude Desktop and Microsoft Sentinel for AI-driven security event simulation and testing. This tool leverages the Model Context Protocol to enable sophisticated security event generation and testing scenarios within Microsoft Sentinel environments.

## Key Features

- Integration with Claude Desktop via Model Context Protocol
- Support for multiple Data Collection Rule (DCR) types including:
  - ASIM (Advanced Security Information Model) logs
  - AWS security logs (CloudTrail, CloudWatch, GuardDuty, VPCFlow)
  - GCP security logs (Audit Logs, Cloud SCC)
  - Windows and Syslog events
  - Common Security Log format
- Automated deployment using Azure Bicep templates
- Configurable security event generation
- Enterprise-grade authentication and security

## Quick Start

1. Install Node.js on your Windows machine
2. Deploy the required Azure resources using the provided Bicep templates
3. Configure the Claude Desktop integration
4. Set up the necessary environment variables and authentication

Detailed installation and configuration instructions can be found in the [Installation Guide](docs/installation.md).

## Documentation

- [Installation Guide](docs/installation.md)
- [Configuration Guide](docs/configuration.md)
- [Architecture Overview](docs/architecture.md)
- [Usage Guide](docs/usage.md)

## Prerequisites

- Windows operating system
- Node.js
- Azure subscription
- Microsoft Sentinel workspace
- Claude Desktop application
- Appropriate Azure permissions for DCR deployment

## Contributing

At this stage, code is provide as a learning example only.  If there was interest the project could be evolved for active development but this is not planned for.

## License

This project is released under MIT license.

# 
