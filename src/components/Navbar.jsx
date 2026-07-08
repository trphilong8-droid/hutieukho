// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang chủ' },
    { path: '/he-sinh-thai', label: 'Hệ sinh thái rừng' },
    { path: '/map', label: 'Bản đồ tương tác' },
    { path: '/food', label: 'Ẩm thực' }
  ];

  return (
    <nav style={{
      backgroundColor: '#1b4332',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px' }}>
          Nam Cát Tiên
        </span>
      </Link>

      {/* Danh sách Menu */}
      <div style={{ display: 'flex', gap: '25px' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: isActive ? '#52b788' : '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: isActive ? 'bold' : 'normal',
                transition: 'color 0.2s',
                borderBottom: isActive ? '2px solid #52b788' : '2px solid transparent',
                paddingBottom: '4px'
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;