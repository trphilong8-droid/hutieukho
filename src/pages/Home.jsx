// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data';
import TravelCard from '../components/TravelCard';

const Home = () => {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#1b4332', fontSize: '36px', marginBottom: '12px' }}>Khám Phá Rừng Già Nam Cát Tiên 🌿</h1>
        <p style={{ color: '#40916c', fontSize: '16px', maxWidth: '600px', margin: '0 auto 24px' }}>Chào mừng bạn đến với cẩm nang tương tác Vườn Quốc Gia Nam Cát Tiên - Nơi lưu giữ hệ sinh thái đa dạng và cảnh quan thiên nhiên hùng vĩ.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/bando" style={{ background: '#2d6a4f', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Mở Bản Đồ Rừng 🗺️</Link>
          <Link to="/amthuc" style={{ background: '#1b4332', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Xem Đặc Sản Bản Địa 🍲</Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {destinations.map((item) => (
          <TravelCard key={item.id} tour={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;