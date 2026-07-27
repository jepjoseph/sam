import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(null);

  const [stops, setStops] = useState([]);

  const [destination, setDestination] = useState(null);

  const [route, setRoute] = useState(null);

  const [routes, setRoutes] = useState([]);

  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const [currentLocation, setCurrentLocation] = useState(null);

  return (
    <AppRoutes
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
  );
}

export default App;
