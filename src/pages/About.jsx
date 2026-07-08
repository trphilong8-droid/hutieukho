// src/pages/About.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations, junglesItems } from '../data'; // Đảm bảo data.js export cả 2 mảng này

const About = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Tìm trong destinations trước, nếu không thấy thì tìm trong junglesItems
  let item = destinations.find((d) => d.id === parseInt(id));
  let isJungle = false;

  if (!item && junglesItems) {
    item = junglesItems.find((j) => j.id === parseInt(id));
    if (item) {
      isJungle = true; // Bật cờ nếu dữ liệu thuộc về Hệ sinh thái rừng
    }
  }

  // Xử lý khi không tìm thấy dữ liệu phù hợp
  if (!item) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#d90429' }}>Không tìm thấy thông tin chi tiết!</h2>
        <button 
          onClick={() => navigate('/')}
          style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#2d6a4f', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Quay lại Trang chủ
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      
      {/* Nút quay lại động dựa vào biến cờ isJungle */}
      <button
        onClick={() => navigate(isJungle ? '/he-sinh-thai' : '/')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          border: '2px solid #2d6a4f',
          color: '#2d6a4f',
          padding: '8px 16px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '30px',
          transition: 'all 0.2s'
        }}
      >
        ← {isJungle ? 'Quay lại Hệ sinh thái' : 'Quay lại Trang chủ'}
      </button>

      {/* Chi tiết thông tin */}
      <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <img 
          src={item.image} 
          alt={item.title} 
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
        
        <div style={{ padding: '40px' }}>
          <span style={{ fontSize: '14px', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '6px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
            {item.category}
          </span>
          
          <h1 style={{ color: '#1b4332', fontSize: '32px', margin: '20px 0 15px 0', fontWeight: 'bold' }}>
            {item.title}
          </h1>
          
          <p style={{ color: '#444', fontSize: '16px', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
            {item.description}
          </p>

          {/* Hiển thị đặc điểm nổi bật nếu có */}
          {item.highlights && (
            <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <h3 style={{ color: '#2d6a4f', fontSize: '18px', marginBottom: '15px' }}>Đặc điểm nổi bật:</h3>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
                {item.highlights.map((hl, index) => (
                  <li key={index}>{hl}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;