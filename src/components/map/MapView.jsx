import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import GeoJsonLayer from "./layers/GeoJsonLayer";
import LocationLayer from "./layers/LocationLayer";
import MapController from "./MapController";
import { Polyline } from "react-leaflet";
import L from "leaflet";

function MapView({
  start,
  stops,
  destination,
  route,
  currentLocation,
  useCurrentLocation,
}) {
  const [layers, setLayers] = useState({});
  const selectedLocations = [
    ...(useCurrentLocation && currentLocation ? [currentLocation] : []),
    ...(start ? [start] : []),
    ...stops.filter(Boolean),
    ...(destination ? [destination] : []),
  ];
  const routeGeoJson =
    route && layers[route.geojson] ? layers[route.geojson] : null;

  const loadGeoJson = async (fileName) => {
    const response = await fetch(
      `${import.meta.env.BASE_URL}gps/geojson/${fileName}`,
    );
    const data = await response.json();

    console.log(import.meta.env.BASE_URL);
    setLayers((prev) => ({
      ...prev,
      [fileName]: data,
    }));
  };

  const files = [
    "Station1.geojson",
    "Station2.geojson",
    "Station3.geojson",
    "Station4.geojson",
    "Station4A.geojson",
    "Gate.geojson",
    "Compactor.geojson",
    "Track_ST_1_2.geojson",
    "Compactor_ST_3.geojson",
  ];

  useEffect(() => {
    files.forEach(loadGeoJson);
  }, []);

  return (
    <MapContainer
      //center={[26.3045, -80.1695]}
      center={[26.416169638705544, -80.16415722288819]}
      zoom={15}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController
        locations={selectedLocations}
        routeGeoJson={routeGeoJson}
      />
      <LocationLayer
        location={start}
        layers={layers}
        type="start"
        color="green"
      />

      <LocationLayer
        location={useCurrentLocation ? currentLocation : null}
        layers={layers}
        type="current"
      />
      {stops.map((stop, index) => (
        <LocationLayer
          key={index}
          location={stop}
          layers={layers}
          type="stop"
          color="orange"
        />
      ))}
      <LocationLayer
        location={destination}
        layers={layers}
        type="destination"
        color="red"
      />
      {route && layers[route.geojson] && (
        <GeoJsonLayer
          key={route.geojson}
          data={layers[route.geojson]}
          color="blue"
        />
      )}
    </MapContainer>
  );
}

export default MapView;
