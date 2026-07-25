import { GeoJSON } from "react-leaflet";

function BuildingLayer({ data, color }) {
  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      style={{
        color: color,
        weight: 5,
        opacity: 0.9,
      }}
    />
  );
}

export default BuildingLayer;
