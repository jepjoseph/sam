import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(null);

  const [stops, setStops] = useState([]);

  const [destination, setDestination] = useState(null);

  const [route, setRoute] = useState(null);

  const [routes, setRoutes] = useState([]);
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
    />
  );
}

export default App;
