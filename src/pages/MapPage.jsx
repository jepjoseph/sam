import { useState } from "react";
import MapSidebar from "../components/map/MapSidebar";
import NavigationPanel from "../components/navigation/NavigationPanel";
import MapView from "../components/map/MapView";
import MainLayout from "../layouts/MainLayout";
import "../styles/Map.css";

function MapPage() {
  const [start, setStart] = useState(null);
  const [stops, setStops] = useState([]);
  const [destination, setDestination] = useState(null);
  const [routes, setRoutes] = useState([]);
  const [route, setRoute] = useState(null);

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
        />

        <div className="map-container">
          <MapView
            start={start}
            stops={stops}
            destination={destination}
            route={route}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default MapPage;
