import { GeoJSON, Marker } from "react-leaflet";
import IconService from "../../../services/IconService";

function GeoJsonLayer({ data, color, type, label }) {
  if (!data) return null;

  /*
      GeoJSON FeatureCollection
  */

  if (data.type === "FeatureCollection") {
    const feature = data.features[0];

    return renderFeature(feature, color, type, label);
  }

  /*
      Single Feature
  */

  if (data.type === "Feature") {
    return renderFeature(data, color, type, label);
  }

  return null;
}

function renderFeature(feature, color, type, label) {
  const geometry = feature.geometry;

  if (!geometry) {
    return null;
  }

  /*
      POINT
      Stations, Gates, Compactors
  */

  if (geometry.type === "Point") {
    const longitude = geometry.coordinates[0];
    const latitude = geometry.coordinates[1];

    return (
      <Marker position={[latitude, longitude]} icon={getIcon(type)}></Marker>
    );
  }

  /*
      LINESTRING
      Routes
  */

  if (geometry.type === "LineString" || geometry.type === "MultiLineString") {
    return (
      <GeoJSON
        data={feature}
        style={{
          color: color,
          weight: 5,
          opacity: 0.9,
        }}
      />
    );
  }

  /*
      POLYGON
      Buildings / Areas
  */

  if (geometry.type === "Polygon" || geometry.type === "MultiPolygon") {
    return (
      <GeoJSON
        data={feature}
        style={{
          color: color,
          weight: 3,
          fillColor: color,
          fillOpacity: 0.3,
        }}
      />
    );
  }

  return null;
}

function getIcon(type) {
  switch (type) {
    case "start":
      return IconService.getStartIcon();

    case "stop":
      return IconService.getStopIcon();

    case "destination":
      return IconService.getDestinationIcon();

    case "current":
      return IconService.getCurrentLocationIcon();

    default:
      return IconService.getStartIcon();
  }
}

export default GeoJsonLayer;
