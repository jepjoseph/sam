import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import GeoJsonLayer from "./layers/GeoJsonLayer";
import LocationLayer from "./layers/LocationLayer";
import MapController from "./MapController";

//import walkingRoute from "../../../public/gps/geojson/TrackPointsTest01.geojson";

function MapView({ start, stops, destination, route }) {
  const [layers, setLayers] = useState({});
  const selectedLocations = [start, ...stops, destination];
  const routeGeoJson =
    route && layers[route.geojson] ? layers[route.geojson] : null;

  const loadGeoJson = async (fileName) => {
    const response = await fetch(`/gps/geojson/${fileName}`);
    const data = await response.json();

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
