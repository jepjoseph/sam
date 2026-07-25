import { GeoJSON } from "react-leaflet";

function WalkingLayer({ data }) {
  if (!data) return null;

  return (
    <GeoJSON
      data={data}
      style={{
        color: "#16a34a",
        weight: 5,
        opacity: 0.9,
      }}
    />
  );
}

export default WalkingLayer;
