import { useState } from "react";
import MapSidebar from "../components/map/MapSidebar";
import NavigationPanel from "../components/navigation/NavigationPanel";
import MapView from "../components/map/MapView";
import MainLayout from "../layouts/MainLayout";
import "../styles/Map.css";

function MapPage({
  start,
  setStart,
  stops,
  setStops,
  destination,
  setDestination,
  route,
  setRoute,
  routes,
  setRoutes,
  useCurrentLocation,
  setUseCurrentLocation,
  currentLocation,
  setCurrentLocation,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const clearNavigation = () => {
    setStart(null);
    setStops([]);
    setDestination(null);
    setRoute(null);
    setUseCurrentLocation(false);
    setCurrentLocation(null);
  };

  const hasNavigation = start || destination || stops.length > 0 || route;

  return (
    <MainLayout>
      <div className="map-page">
        <button
          className={
            sidebarOpen ? "mobile-menu-button open" : "mobile-menu-button"
          }
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>
        {!sidebarOpen && hasNavigation && (
          <button className="floating-clear-btn" onClick={clearNavigation}>
            🗑 Clear Navigation
          </button>
        )}
        <div
          className={sidebarOpen ? "navigation-panel open" : "navigation-panel"}
        >
          <NavigationPanel
            start={start}
            setStart={setStart}
            stops={stops}
            setStops={setStops}
            destination={destination}
            setDestination={setDestination}
            route={route}
            setRoute={setRoute}
            routes={routes}
            setRoutes={setRoutes}
            useCurrentLocation={useCurrentLocation}
            setUseCurrentLocation={setUseCurrentLocation}
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </div>

        <div className="map-container">
          <MapView
            start={start}
            stops={stops}
            destination={destination}
            route={route}
            currentLocation={currentLocation}
            useCurrentLocation={useCurrentLocation}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default MapPage;
