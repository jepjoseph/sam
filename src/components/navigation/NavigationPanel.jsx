import { useEffect, useState } from "react";

import LocationSelect from "./LocationSelect";

import TransportationSelector from "./TransportationSelector";

import RouteSummary from "./RouteSummary";

import RouteService from "../../services/RouteService";

function NavigationPanel({
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
}) {
  const [locations, setLocations] = useState([]);

  const [transportation, setTransportation] = useState("Walking");

  const addStop = () => {
    setStops([...stops, null]);
  };

  const removeStop = (index) => {
    const updatedStops = stops.filter((_, i) => i !== index);

    setStops(updatedStops);
  };

  const updateStop = (index, value) => {
    const updatedStops = [...stops];

    updatedStops[index] = value;

    setStops(updatedStops);
  };

  const getAvailableLocations = (currentField, index = null) => {
    return locations.filter((location) => {
      // Remove selected Start
      if (currentField !== "start" && start && location.value === start.value) {
        return false;
      }

      // Remove selected Destination
      if (
        currentField !== "destination" &&
        destination &&
        location.value === destination.value
      ) {
        return false;
      }

      // Remove selected Stops
      if (currentField !== "stop") {
        const isSelectedAsStop = stops.some(
          (stop) => stop && stop.value === location.value,
        );

        if (isSelectedAsStop) {
          return false;
        }
      } else {
        // When editing a stop,
        // allow the current stop value to remain visible
        const selectedByAnotherStop = stops.some(
          (stop, stopIndex) =>
            stop && stopIndex !== index && stop.value === location.value,
        );

        if (selectedByAnotherStop) {
          return false;
        }
      }

      return true;
    });
  };

  const canFindRoute = start && destination;

  useEffect(() => {
    async function loadLocations() {
      const response = await fetch("/data/locations.json");

      const data = await response.json();
      /*
      const formattedLocations = data.map((location) => ({
        value: location.id,
        label: location.name,
        ...location,
      }));
*/
      const formattedLocations = await Promise.all(
        data.map(async (location) => {
          const response = await fetch(`/gps/geojson/${location.geojson}`);

          const geojson = await response.json();

          const coordinates = geojson.features[0].geometry.coordinates;

          return {
            value: location.id,
            label: location.name,
            ...location,

            coordinates: coordinates,
          };
        }),
      );
      // Add current GPS location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            value: "current",
            label: "📍 My Current Location",
            name: "My Current Location",
            type: "Current Location",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            geojson: null,
          };

          setLocations([currentLocation, ...formattedLocations]);
        },
        (error) => {
          console.error("Unable to get location:", error);

          // If user denies GPS, still load normal locations
          setLocations(formattedLocations);
        },
      );
    }

    loadLocations();
  }, []);

  useEffect(() => {
    async function loadRoutes() {
      const routeResponse = await fetch("/data/routes.json");

      const routeData = await routeResponse.json();

      const formattedRoutes = routeData.map((route) => ({
        value: route.start,
        label: route.destination,
        ...route,
      }));

      setRoutes(routeData);
      //setRoutes(formattedRoutes);
    }

    loadRoutes();
  }, []);

  useEffect(() => {
    if (!start || !destination) {
      setRoute(null);
      return;
    }

    const foundRoute = findRoute(routes, start, destination);

    setRoute(foundRoute);
  }, [start, destination, routes]);

  const findRoute = (routes, start, destination) => {
    const route = routes.find(
      (r) => r.start === start.name && r.destination === destination.name,
    );
    return route;
  };

  const handleClick = () => {
    const foundRoute = findRoute(routes, start, destination);
    setRoute(foundRoute || null);

    console.log(foundRoute);
  };

  return (
    <div>
      <h2>Navigation</h2>

      <LocationSelect
        label="Starting Point"
        options={getAvailableLocations("start")}
        value={start}
        onChange={setStart}
      />

      <h3>Stops</h3>

      {stops.map((stop, index) => (
        <div key={index}>
          <LocationSelect
            label={`Stop ${index + 1}`}
            options={getAvailableLocations()}
            value={stop}
            onChange={(value) => updateStop(index, value)}
          />

          <button onClick={() => removeStop(index)}>❌</button>
        </div>
      ))}

      <button onClick={addStop}>➕ Add Stop</button>

      <LocationSelect
        label="Destination"
        options={getAvailableLocations("destination")}
        value={destination}
        onChange={setDestination}
      />

      <TransportationSelector
        transportation={transportation}
        setTransportation={setTransportation}
      />

      <button disabled={!canFindRoute} onClick={handleClick}>
        Find Route
      </button>

      <RouteSummary />
    </div>
  );
}

export default NavigationPanel;
