// src/pages/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { destinations } from '../data';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

const MapPage = () => {
  // Điểm căn camera trung tâm (Tọa độ khu Vườn Quốc Gia Nam Cát Tiên)
  const centerGarden = [11.4244, 107.4278];

  return (
    <div style={{ padding: '30px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ color: '#1b4332', marginBottom: '8px' }}>Bản Đồ Du Lịch Nam Cát Tiên 🗺️</h2>
      <p style={{ color: '#40916c', marginBottom: '20px', fontSize: '14px' }}>Bấm vào các mốc định vị để xem trước hình ảnh các khu vực thiên nhiên nổi bật.</p>
      
      <div style={{ height: '65vh', width: '100%', borderRadius: '20px', overflow: 'hidden', border: '3px solid #2d6a4f', boxShadow: '0 6px 16px rgba(0,0,0,0.1)' }}>
        <MapContainer center={centerGarden} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {destinations.map((tour) => (
            <Marker key={tour.id} position={[tour.coordinates.lat, tour.coordinates.lng]}>
              <Popup>
                <strong style={{ color: '#2d6a4f', fontSize: '14px' }}>{tour.title}</strong>
                <p style={{ margin: '4px 0', fontSize: '12px', color: '#40916c' }}>Loại hình: {tour.category}</p>
                <a href={`/tour/${tour.id}`} style={{ display: 'inline-block', marginTop: '4px', fontSize: '12px', color: '#1b4332', fontWeight: 'bold', textDecoration: 'none' }}>Chi tiết khu vực →</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;