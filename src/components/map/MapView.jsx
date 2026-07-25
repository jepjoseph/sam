import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import GeoJsonLayer from "./layers/GeoJsonLayer";
//import walkingRoute from "../../../public/gps/geojson/TrackPointsTest01.geojson";

function MapView({ start, stops, destination, route }) {
  const [layers, setLayers] = useState({});

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
      {start && layers[start.geojson] && (
        <GeoJsonLayer
          key={start.geojson}
          data={layers[start.geojson]}
          color="green"
        />
      )}
      {stops.map(
        (stop, index) =>
          stop &&
          layers[stop.geojson] && (
            <GeoJsonLayer
              key={`stop-${index}-${stop.geojson}`}
              data={layers[stop.geojson]}
              color="orange"
            />
          ),
      )}
      {destination && layers[destination.geojson] && (
        <GeoJsonLayer
          key={destination.geojson}
          data={layers[destination.geojson]}
          color="red"
        />
      )}
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
