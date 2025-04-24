# Monorepo

**Version**: 0.0.1  
**Author**: Yusuf Eren Gerek  
**Description**: A secure and scalable monorepo architecture for full-stack web applications with integrated firewall protection and API gateway.

## Overview

This **Monorepo** is designed to streamline the development of full-stack web applications by organizing the project into distinct, modular workspaces. It provides a scalable architecture that integrates a firewall and an API gateway for enhanced security and performance.

The repo includes the following key components:

- **Frontend** (`src/frontend`): The user interface for the application, developed with modern frontend technologies.
- **Backend** (`src/backend`): The API layer and server-side logic, providing the essential functionality of the application.
- **Firewall** (`src/firewall`): An integrated security module to safeguard against malicious attacks and ensure secure communication.

## Features

- **Modular Architecture**: Clearly separated workspaces for frontend, backend, and firewall.
- **Integrated Firewall**: Protects your application from common web vulnerabilities and attacks.
- **API Gateway**: Manages and secures your microservices in a scalable and efficient way.
- **Scalability**: Ideal for building large, full-stack applications that need to grow over time.
- **Security**: Incorporates tools like `helmet`, `cors`, and `express-rate-limit` for secure API access.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/yusuferengerek/monorepo.git
cd monorepo
```

Install dependencies:

```bash
npm run build
```
This will install dependencies and build the frontend workspace.

### Starting the Project
To start the entire application, including the frontend, backend, and firewall, use the following command:
```bash
npm run start
```

## Directory Structure
```lua
monorepo/
├── src/
│   ├── backend/
│   ├── frontend/
│   ├── firewall/
│   └── config.json
├── ecosystem.config.js
├── package.json
└── README.md
```
- `src/` contains all of the core application code.
- `ecosystem.config.js` is the configuration file for PM2 to manage processes.
- `package.json` defines the project dependencies and scripts.

## Dependencies
The project relies on the following key dependencies:
- `cookie-parser`: A middleware for parsing cookies.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `express`: The web framework for the backend.
- `express-rate-limit`: Middleware to limit repeated requests to public APIs.
- `helmet`: A security middleware to secure HTTP headers.
- `pidusage`: A library for monitoring process usage.
---
