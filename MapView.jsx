import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapView = ({ address }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  });

  const coordinates = { lat: 37.7749, lng: -122.4194 }; // Example: Replace with geocoded values.

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      zoom={12}
      center={coordinates}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Marker position={coordinates} />
    </GoogleMap>
  );
};

export default MapView;
