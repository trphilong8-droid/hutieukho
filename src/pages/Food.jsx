// src/pages/Food.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import { foodItems } from '../data';

const Food = () => {
  return (
    <div style={{ padding: '40px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#1b4332', fontSize: '32px', marginBottom: '8px' }}>Góc Ẩm Thực Rừng Xanh 🍲</h2>
        <p style={{ color: '#40916c', fontSize: '15px' }}>Những món ăn đặc sản mang đậm hương vị núi rừng và dòng sông Đồng Nai.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {foodItems.map((food) => (
          <div key={food.id} style={{ display: 'flex', background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d8f3dc', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
            <img src={food.image} alt={food.title} style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#2d6a4f', fontSize: '18px' }}>{food.title}</h3>
              <p style={{ margin: '0 0 12px 0', color: '#40916c', fontSize: '14px', lineHeight: '1.5' }}>{food.description}</p>
              
              <Link to={`/amthuc/${food.id}`} style={{ color: '#1b4332', fontWeight: 'bold', textDecoration: 'none', fontSize: '13px' }}>
                Xem bí quyết chế biến →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;