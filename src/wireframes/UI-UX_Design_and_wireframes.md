Phase 4 – UI/UX Design & Wireframes
Objective
We will create:
• Professional wireframes
• User flow diagrams
• Screen navigation map
• UI component list
• Layout specifications
• Color palette
• Typography guide
• Icons and symbols guide
• Responsive design plan

1. Create the UI Design Folder

SAM
│
├── design
│
│── wireframes
│ │
│ ├── drawio
│ ├── png
│ ├── pdf
│ └── README.md

2. List Every Screen

Version 1.0.

Public Pages

1. Landing Page

2. Interactive Map

3. Route Planner

4. Search Results

5. Location Information

6. Navigation Results

7. About SAM

8. Help

Administration (Future) 9. Login

10. Dashboard

11. Manage Locations

12. Manage Roads

13. Manage Buildings

14. Manage Categories

15. Reports

Future Mobile 16. Mobile Home

17. GPS Navigation

18. Nearby Locations

19. Draw the Screen Navigation Map
    How users move through the application.
    Example:
    Landing Page
    │
    │
    ▼
    Interactive Map
    │
    ├───────────────┐
    ▼ ▼
    Search Location Info
    │ │
    ▼ │
    Route Planner │
    │ │
    ▼ │
    Navigation Results────┘

20. Design the Landing Page
    Just the layout.
    Landing Page Layout
    ──────────────────────────────────────────────

                   SAM Logo

          Saint Andrews Map

Digital Navigation System

──────────────────────────────────────────────

[ Search Destination ]

──────────────────────────────────────────────

          Interactive Preview Map

──────────────────────────────────────────────

Transportation

( ) Walk

( ) Golf Cart

( ) Vehicle

──────────────────────────────────────────────

[ Start Navigation ]

──────────────────────────────────────────────

Quick Links

• Clubhouse

• Restaurant

• Tennis Center

• Golf Shop

• Fitness Center

5. Interactive Map Screen
   Application's primary screen.
   Layout:
   ──────────────────────────────────────────────────────────

Header

Logo

Search

Settings

──────────────────────────────────────────────────────────

Sidebar

Search

Recent Locations

Favorites

Transportation

──────────────────────────┬───────────────────────────────

                          │

                          │

                          │

       Interactive Map

                          │

                          │

                          │

──────────────────────────┴───────────────────────────────

Footer

Coordinates

Zoom

Scale

6. Route Planning Screen
   Users choose:
   Origin
   ↓
   Destination
   ↓
   Transportation
   ↓
   Calculate
   Origin

[ Search ]

↓

Destination

[ Search ]

↓

Transportation

○ Walk

○ Golf Cart

○ Vehicle

↓

[ Calculate Route ]

7. Route Results
   After calculating:
   Display
   Route

Distance

Estimated Time

Transportation

Directions

Preview Map

Start Navigation

8. Location Details Panel
   When clicking a building.
   Display:
   Building Name

Category

Address

Phone

Hours

Image

Description

Nearby Locations

Nearby Car Parking (Guests, Members, Employees indication).

Nearby Cart Parking

Navigate Button 9. Transportation Selection
Choose Transportation

○ Walking

○ Golf Cart

○ Vehicle

10. Search Panel
    Layout
    Search

---

Suggestions

Clubhouse

Restaurant

Pool

Fitness Center

Golf Shop

Maintenance

11. Administrator Dashboard
    Future version.
    Dashboard

Locations

Roads

Buildings

Reports

Users

System Settings

12. Responsive Layout
    Three layouts.
    Desktop: (Sidebar, Map, Details)

Tablet: (Map, Bottom Panel)

Phone: (Map, Bottom Drawer)

13. Component Inventory
    Now start thinking in React.
    Landing Page becomes:
    <App>

Navbar

Hero

SearchBar

TransportationSelector

MapPreview

QuickLinks

Footer
Interactive Map becomes:
<App>

Navbar

Sidebar

Map

SearchPanel

LocationPanel

RoutePanel

Footer

14. Create a UI Style Guide
    Another professional document.
    Colors
    Typography
    Buttons
    Cards
    Icons
    Spacing
    Borders
    Shadows
    Forms
    Tables
    Navigation
    This is the reference for the whole application.
