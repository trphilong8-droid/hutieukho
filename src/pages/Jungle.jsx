import React from 'react';
// Import mảng dữ liệu junglesItems từ file data
import { junglesItems } from '../data';
// Import linh kiện JungleCard từ thư mục components
import JungleCard from '../components/JungleCard';

function Jungle() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#1b4332', marginBottom: '30px' }}>
        Các Loại Rừng Đặc Trưng Tại Nam Cát Tiên
      </h1>
      
      {/* Khu vực lưới hiển thị (Grid) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center' 
      }}>
        {/* Sử dụng hàm .map() để duyệt qua mảng và truyền prop jungle kèm key chính xác */}
        {junglesItems && junglesItems.map((jungle) => (
          <JungleCard key={jungle.id} jungle={jungle} />
        ))}
      </div>
    </div>
  );
}

export default Jungle;