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
  return (
    <MainLayout>
      <div className="map-page">
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
