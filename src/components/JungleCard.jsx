import React from 'react';
import { Link } from 'react-router-dom';

/**
 * JungleCard Component
 * @param {Object} props - Thuộc tính truyền vào hợp phần
 * @param {Object} props.jungle - Đối tượng chứa thông tin về loại rừng
 * @param {string} props.jungle.id - ID của khu rừng để điều hướng
 * @param {string} props.jungle.image - Đường dẫn ảnh của khu rừng
 * @param {string} props.jungle.title - Tên loại rừng
 * @param {string} props.jungle.description - Mô tả ngắn về khu rừng
 */
const JungleCard = ({ jungle }) => {
  // Kiểm tra nếu prop jungle không tồn tại để tránh lỗi ứng dụng
  if (!jungle) {
    return null;
  }

  return (
    <div className="jungle-card" style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px 0', maxWidth: '350px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      {/* Ảnh khu vực rừng */}
      {jungle.image && (
        <img 
          src={jungle.image} 
          alt={jungle.title} 
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
        />
      )}

      {/* Tên loại rừng */}
      <h3 style={{ margin: '12px 0 8px 0', color: '#2d6a4f' }}>
        {jungle.title}
      </h3>

      {/* Mô tả khu rừng */}
      <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', marginBottom: '16px' }}>
        {jungle.description}
      </p>

      {/* Thẻ Link điều hướng chuẩn xác đến địa chỉ động /rung/${jungle.id} */}
      <Link 
        to={`/rung/${jungle.id}`} 
        style={{ 
          display: 'inline-block', 
          backgroundColor: '#2d6a4f', 
          color: '#fff', 
          padding: '8px 16px', 
          borderRadius: '4px', 
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      >
        Chi tiết khu vực →
      </Link>
    </div>
  );
};

export default JungleCard;