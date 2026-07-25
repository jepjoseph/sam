import { GeoJSON, CircleMarker } from "react-leaflet";

function GeoJsonLayer({ data, color }) {
  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      style={{
        color: color,
        weight: 5,
        opacity: 0.9,
        fillColor: color,
        fillOpacity: 0.3,
      }}
    />
  );
}

export default GeoJsonLayer;
