1. Introduction
1.1 Purpose
The purpose of this Software Requirements Specification (SRS) is to define the functional and non-functional requirements for the Saint Andrews Map (SAM) system. This document serves as the primary reference for project planning, software development, testing, deployment, and future maintenance. It provides stakeholders, developers, designers, and project managers with a common understanding of the system's objectives, capabilities, and expected behavior.
1.2 Project Scope
The Saint Andrews Map (SAM) system is a web-based digital navigation platform designed to improve navigation throughout Saint Andrews Country Club. The application enables members, guests, contractors, and employees to search for destinations and generate optimized routes based on different transportation methods, including walking, golf carts, and vehicles. The platform also establishes a scalable foundation for future services such as emergency navigation, maintenance management, and mobile integration.
1.3 Definitions
A glossary is helpful for technical and non-technical readers.
Term	Definition
SAM	Saint Andrews Map
GPS	Global Positioning System
Route	Path between two locations
Node	A point on the map (e.g., intersection, building entrance)
Edge	A road or pathway connecting two nodes
GIS	Geographic Information System
Point of Interest (POI)	A searchable location such as a clubhouse or restaurant
SQL Server	Microsoft relational database used by the system


2. Overall Description
2.1 Product Perspective
SAM is an independent web application that interacts with a Microsoft SQL Server database containing map data, locations, roads, and route information. Users access the system through a standard web browser without requiring software installation.
Architecture:
User
 │
 ▼
React Web Application
 │
 ▼
Backend API
 │
 ▼
Microsoft SQL Server
 │
 ▼
Map Database

2.2 Product Functions
Major capabilities.
•	Display an interactive map. 
•	Search for destinations. 
•	Display all buildings. 
•	Calculate routes. 
•	Support multiple transportation modes. 
•	Display estimated travel distance. 
•	Display estimated travel time. 
•	Zoom and pan the map. 
•	Display location details. 
•	Save route information. 
•	Display parking locations. 
•	Display golf cart paths. 
•	Display walking paths. 
•	Display vehicle roads.


3. User Types

Members
Purpose: Navigate around the property.
Needs
•	Search destinations 
•	Find routes 
•	Walking directions 

Guests
Purpose: Visit facilities.
Needs
•	Easy navigation 
•	Parking locations 
•	Restaurants 
•	Clubhouse 

Employees
Purpose: Navigate for work.
Needs
•	Maintenance buildings 
•	Administrative offices 
•	Service entrances 

Contractors
Purpose: Locate work sites.
Needs
•	Building access 
•	Service roads 
•	Maintenance entrances 

Management
Purpose: Monitor and maintain location data.
Needs
•	Update locations 
•	Add roads 
•	Manage points of interest 

4. Functional Requirements
This is the heart of the SRS, each requirement gets an ID.
FR-001
System shall display an interactive map of Saint Andrews Country Club.
Priority: High

FR-002
System shall allow users to search locations by name.
Priority: High

FR-003
System shall calculate the shortest walking route.
Priority: High

FR-004
System shall calculate the shortest golf cart route.
Priority: High

FR-005
System shall calculate the shortest vehicle route.
Priority: High

FR-006
System shall display travel distance.

FR-007
System shall display estimated travel time.

FR-008
System shall highlight the selected route.

FR-009
System shall display building information.

FR-010
System shall allow zooming and panning.

FR-011
System shall display parking areas.

FR-012
System shall display club facilities.

FR-013
System shall support responsive layouts.

FR-014
System shall allow future administrator login.

FR-015
System shall store all location information in SQL Server.
By the end of the project, we may have 50–100 functional requirements

5. Non-Functional Requirements
These describe how well the system should perform.
Performance
The application shall load within three seconds on a broadband internet connection.

Availability
The system should be available 24 hours per day except during scheduled maintenance.
Scalability
The architecture shall support future expansion without major redesign.

Security
All communications shall use HTTPS.
Future administrator accounts shall require authentication.
Sensitive administrative operations shall be restricted to authorized users.

Usability
Users should locate any destination within three clicks.
The interface should be intuitive for first-time visitors.

Compatibility
Supported browsers:
•	Chrome 
•	Edge 
•	Firefox 
•	Safari 
Supported devices:
•	Desktop 
•	Tablet 
•	Smartphone 

Reliability
The system should recover gracefully from network interruptions.
Maintainability
Map data should be updated without modifying the application source code.

6. System Features
This section groups related functionality into major modules.
For SAM, I envision features like:
1. Interactive Map
•	Display the country club map. 
•	Zoom and pan. 
•	Layer support (roads, buildings, amenities). 
2. Search
•	Search by building, amenity, or address. 
•	Autocomplete suggestions. 
3. Route Planning
•	Select origin and destination. 
•	Choose transportation mode. 
•	Display shortest route. 
•	Show estimated distance and time. 
4. Points of Interest
•	Restaurants. 
•	Clubhouse. 
•	Tennis courts. 
•	Golf courses. 
•	Pools. 
•	Fitness center. 
•	Maintenance buildings. 
•	Administrative offices. 
5. Administrative Management (Future)
•	Add or edit locations. 
•	Update road networks. 
•	Manage categories and icons. 
6. Future Enhancements
•	QR code navigation. 
•	Real-time golf cart tracking. 
•	Emergency evacuation routes. 
•	Mobile application. 
•	Accessibility routes. 
•	Voice-guided navigation. 

