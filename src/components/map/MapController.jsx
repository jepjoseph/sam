import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function MapController({ locations, routeGeoJson }) {
  const map = useMap();

  useEffect(() => {
    let points = [];

    /*
    ============================
    Add Start / Stops / Destination
    ============================
    */

    if (locations && locations.length > 0) {
      const locationPoints = locations
        .filter((location) => location)
        .map((location) => {
          // Current GPS
          if (location.value === "current") {
            return [location.lat, location.lng];
          }

          // Normal location
          if (location.coordinates) {
            return [location.coordinates[1], location.coordinates[0]];
          }

          return null;
        })
        .filter(Boolean);

      points.push(...locationPoints);
    }

    /*
    ============================
    Add Route GeoJSON
    ============================
    */

    if (routeGeoJson) {
      const routeLayer = L.geoJSON(routeGeoJson);

      const routeBounds = routeLayer.getBounds();

      points.push(routeBounds.getNorthEast());

      points.push(routeBounds.getSouthWest());
    }

    /*
    ============================
    Fit Map
    ============================
    */

    if (points.length > 0) {
      const bounds = L.latLngBounds(points);

      map.fitBounds(bounds, {
        padding: [60, 60],
        maxZoom: 18,
      });
    }
  }, [locations, routeGeoJson, map]);

  return null;
}

export default MapController;

/*
import { useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

function MapController({ locations, routeGeoJson }) {
  const map = useMap();

  useEffect(() => {
    if (!locations || locations.length === 0) {
      return;
    }

    const points = locations
      .filter((location) => location)
      .map((location) => {
        // Current GPS
        if (location.value === "current") {
          return [location.lat, location.lng];
        }

        // Normal locations
        if (location.coordinates) {
          return [location.coordinates[1], location.coordinates[0]];
        }

        return null;
      })
      .filter((point) => point !== null);

    if (points.length > 0) {
      const bounds = L.latLngBounds(points);

      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 18,
      });
    }
  }, [locations, map]);

  return null;
}

export default MapController;
*/
