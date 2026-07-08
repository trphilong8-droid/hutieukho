// src/components/TravelCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TravelCard = ({ tour }) => {
  return (
    <div style={{ border: '1px solid #d8f3dc', padding: '16px', borderRadius: '16px', background: '#fff', boxShadow: '0 4px 6px rgba(45,106,79,0.08)', transition: 'transform 0.2s' }}>
      <img src={tour.image} alt={tour.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' }} />
      <span style={{ display: 'inline-block', background: '#d8f3dc', color: '#1b4332', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginTop: '12px' }}>{tour.category}</span>
      <h3 style={{ color: '#2d6a4f', marginTop: '8px', fontSize: '18px', marginBottom: '8px' }}>{tour.title}</h3>
      <p style={{ color: '#40916c', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px', height: '70px', overflow: 'hidden' }}>{tour.description}</p>
      <Link to={`/tour/${tour.id}`} style={{ color: '#1b4332', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        Khám phá ngay →
      </Link>
    </div>
  );
};

export default TravelCard;