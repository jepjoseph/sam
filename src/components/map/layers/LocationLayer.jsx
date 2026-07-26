import { Marker, Popup } from "react-leaflet";
import GeoJsonLayer from "./GeoJsonLayer";
import IconService from "../../../services/IconService";

function LocationLayer({ location, layers, type, color }) {
  if (!location) return null;

  // Current GPS location
  if (location.value === "current") {
    return (
      <Marker
        position={[location.lat, location.lng]}
        icon={IconService.getCurrentLocationIcon()}
      >
        <Popup>{location.label}</Popup>
      </Marker>
    );
  }

  // Station / Building
  if (location.geojson && layers[location.geojson]) {
    return (
      <GeoJsonLayer
        data={layers[location.geojson]}
        color={color}
        type={type}
        label={location.label}
      />
    );
  }

  return null;
}

export default LocationLayer;
