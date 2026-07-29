import L from "leaflet";

import startMarker from "../assets/icons/start-marker.png";
import stopMarker from "../assets/icons/stop-marker.png";
import destinationMarker from "../assets/icons/destination-marker.png";
import currentMarker from "../assets/icons/current-location.png";

/* ------------------------- */
/* Preload marker images     */
/* ------------------------- */
const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

preloadImages([startMarker, stopMarker, destinationMarker, currentMarker]);

const commonOptions = {
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
};

const icons = {
  start: new L.Icon({
    iconUrl: startMarker,
    ...commonOptions,
  }),

  stop: new L.Icon({
    iconUrl: stopMarker,
    ...commonOptions,
  }),

  destination: new L.Icon({
    iconUrl: destinationMarker,
    ...commonOptions,
  }),

  current: new L.Icon({
    iconUrl: currentMarker,
    ...commonOptions,
  }),
};

class IconService {
  getStartIcon() {
    return icons.start;
  }

  getStopIcon() {
    return icons.stop;
  }

  getDestinationIcon() {
    return icons.destination;
  }

  getCurrentLocationIcon() {
    return icons.current;
  }
}

export default new IconService();
