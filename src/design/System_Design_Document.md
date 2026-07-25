What is the SDD?
Think of it this way:
• Project Charter = Why are we building it?
• SRS = What should it do?
• SDD = How are we going to build it?

SDD Table of Contents

1. Introduction

2. System Overview

3. Overall Architecture

4. Technology Stack

5. System Modules

6. Software Architecture

7. Database Design

8. React Component Architecture

9. API Design

10. Routing Engine Design

11. Map Data Design

12. UML Diagrams

13. Wireframes

14. Security Design

15. Future Architecture

16. Appendix

17. Introduction
    This System Design Document (SDD) presents the technical design and architecture of the St Andrews Map (SAM), an interactive web-based mapping application developed for St Andrews Country Club. The document serves as the technical blueprint for the system by describing its architecture, software components, database structure, APIs, routing mechanisms, user interface design, and security considerations.
    The purpose of this document is to provide developers, testers, and stakeholders with a clear understanding of how the system is designed and how its components interact. It also serves as a reference for implementation, maintenance, future enhancements, and system scalability throughout the software development lifecycle.

18. System Overview
    This chapter introduces the technical solution.
    2.1 Purpose
    The System Design Document (SDD) defines the technical architecture and software design of the Saint Andrews Map (SAM) system. It describes the components, technologies, database architecture, software modules, interfaces, and implementation strategy required to develop the application.
    This document serves as the primary technical reference for software developers, database administrators, testers, project managers, and future maintainers.

2.2 System Overview
SAM is a web-based Geographic Information and Navigation System (GIS) designed specifically for Saint Andrews Country Club.
The application enables users to:
• Search locations
• View an interactive digital map
• Calculate optimal routes
• Display walking routes
• Display golf cart routes
• Display vehicle routes
• Display important facilities
The system stores all geographic information in Microsoft SQL Server and provides route calculations through a dedicated routing engine exposed by a RESTful API.

3. Overall Architecture
   This is one of the most important chapters.
   We'll build an architecture that can grow as your project evolves.

High-Level Architecture
Users
────────────────────────────────────────────
Members
Guests
Employees
Contractors
Management
────────────────────────────────────────────
│
▼
React Web Application
────────────────────────────────────────────
Search
Interactive Map
Route Finder
Location Details
User Interface
────────────────────────────────────────────
│
REST API (Node.js/Express)
────────────────────────────────────────────
Authentication
Routing Engine
Business Logic
Location Services
Database Access
────────────────────────────────────────────
│
▼
Microsoft SQL Server Database
────────────────────────────────────────────
Buildings
Roads
Intersections
GPS Routes
Categories
Transportation Modes
Points of Interest

Architecture Style

Client Layer
React
Handles:
• UI
• Search
• Map
• Route visualization

Application Layer
Node.js + Express
Handles:
• Business logic
• Routing
• API
• Database communication

Data Layer
Microsoft SQL Server
Stores:
• Roads
• Buildings
• GPS coordinates
• Categories
• Routes

3. Technology Stack
   Why these technologies?"

Frontend
React
Purpose: Build interactive user interfaces.
Reason: (Component-based, Fast rendering, Large ecosystem, Easy maintenance).

JavaScript
Purpose: Application logic.
Reason: Industry standard.

Vite
Purpose: Development environment.
Reason: (Fast builds, Fast refresh, Simple configuration)

CSS
Purpose: Responsive interface.
Reason: (Lightweight, Easy customization)

Leaflet
Purpose: Interactive mapping.
Reason: (Open-source, Supports GPS, Works with OpenStreetMap, Lightweight)

OpenStreetMap
Purpose: Base map.
Reason: (Free, No licensing costs, Large community)

Backend
Node.js
Purpose: Application server.
Reason: (Fast, JavaScript everywhere, Scalable)

Express
Purpose: REST API.
Reason: (Simple, Industry standard, Large ecosystem)

Database
Microsoft SQL Server
Purpose: Persistent storage.
Reason: (Reliable, Supports GIS-like structures, Enterprise ready, Excellent indexing)

Development Tools
VS Code
Reason: (strong support for React, JavaScript, Git integration, and extensions that improve developer productivity)
Git
GitHub
Reason: GitHub was selected for version control and collaborative software development
GPS Logger
Draw.io

Future Architecture (Already Plan Ahead)

Version 1.0
│
├── Interactive Map
├── Routing
├── Search
└── SQL Database

Version 2.0
│
├── QR Code Navigation
├── Admin Dashboard
├── Analytics
└── Reports

Version 3.0
│
├── Mobile App
├── Push Notifications
├── Real-time GPS
└── Golf Cart Tracking

Version 4.0
│
├── AI Route Optimization
├── Voice Navigation
├── Indoor Navigation
└── Emergency Response
