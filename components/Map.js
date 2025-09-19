import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer center={[25.3176, 82.9739]} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[25.3176, 82.9739]}>
        <Popup>Ward 12</Popup>
      </Marker>
    </MapContainer>
  );
}
