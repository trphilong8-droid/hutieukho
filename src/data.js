export const destinations = [
  {
    id: 1,
    title: "Bàu Sấu",
    description: "Trái tim của Nam Cát Tiên, vùng đất ngập nước Ramsar quốc tế với hệ sinh thái vô cùng phong phú, là nơi cư trú của loài cá sấu xiêm thuần chủng cùng hàng trăm loài chim và động vật quý hiếm.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2000&auto=format&fit=crop",
    category: "Đất ngập nước",
    highlights: ["Ngắm cá sấu xiêm hoang dã", "Chèo thuyền trên bàu nước", "Quan sát chim di cư"],
    coordinates: { lat: 11.4585, lng: 107.3482 }
  },
  {
    id: 2,
    title: "Cây Tùng Cổ Thụ",
    description: "Kỳ quan thiên nhiên hùng vĩ với bộ rễ khổng lồ, bám chặt vào lòng đất đại ngàn. Cây tùng cổ thụ có tuổi đời hơn 400 năm là biểu tượng cho sức sống mãnh liệt của rừng già Nam Cát Tiên.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop",
    category: "Thực vật cổ thụ",
    highlights: ["Chiêm ngưỡng bộ rễ khổng lồ", "Check-in cây di sản 400 năm", "Khám phá tuyến đi bộ xuyên rừng"],
    coordinates: { lat: 11.4285, lng: 107.3682 }
  },
  {
    id: 3,
    title: "Tuyến Xem Thú Đêm",
    description: "Trải nghiệm độc đáo duy nhất bằng xe mui trần chuyên dụng xuyên qua các trảng cỏ ban đêm, cơ hội tận mắt ngắm nhìn cuộc sống hoang dã của các loài thú như hoẵng, lợn rừng, nai, bò tót đi kiếm ăn.",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2000&auto=format&fit=crop",
    category: "Trải nghiệm hoang dã",
    highlights: ["Ngắm thú đêm bằng xe chuyên dụng", "Khám phá tập tính động vật", "Trải nghiệm rừng đêm bí ẩn"],
    coordinates: { lat: 11.4185, lng: 107.3582 }
  }
];

export const foodItems = [
  {
    id: "canh-chua-ca-loc",
    title: "Canh chua cá lóc sông Đồng Nai",
    description: "Món ăn mang đậm hương vị đồng quê sông nước miền Đông, kết hợp giữa vị ngọt thanh của cá lóc tươi ngon đánh bắt từ dòng sông Đồng Nai và vị chua thanh của các loại rau rừng độc đáo.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2000&auto=format&fit=crop",
    price: "120.000đ - 180.000đ",
    category: "Món chính"
  },
  {
    id: "ca-lang-nuong",
    title: "Cá lăng nướng muối ớt",
    description: "Cá lăng đặc sản sông nước thịt săn chắc, ngọt thơm được tẩm ướp muối ớt đậm đà, nướng trên than hồng cho lớp da vàng giòn, thơm nức mũi, ăn kèm với các loại rau rừng Cát Tiên.",
    image: "https://lammonngon.vn/wp-content/uploads/2024/08/Cach-lam-ca-lang-nuong-sa-te.jpg",
    price: "250.000đ / kg",
    category: "Đặc sản nướng"
  },
  {
    id: "lau-rau-nhip",
    title: "Lẩu cá tập tàng ăn kèm rau nhíp rừng",
    description: "Sự kết hợp hoàn hảo giữa các loại cá suối nhỏ (cá tập tàng) ngọt nước và đọt rau nhíp rừng bánh tẻ - một loại rau đặc trưng của rừng Nam Cát Tiên có vị ngọt bùi, rất giàu dinh dưỡng.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=2000&auto=format&fit=crop",
    price: "200.000đ - 300.000đ",
    category: "Lẩu & Rau rừng"
  }
];

export const junglesItems = [
  {
    id: 101, // Đồng nhất kiểu Số (Number) giống như mảng destinations đã có trong data.js
    title: "Rừng lá rộng thường xanh",
    description: "Kiểu thảm thực vật nguyên sinh đặc trưng nhất tại Nam Cát Tiên với các tầng cây gỗ đại thụ cao vút, xanh tốt quanh năm. Đây là nơi trú ẩn và sinh tồn lý tưởng của nhiều loài động vật và linh trưởng quý hiếm.",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2000&auto=format&fit=crop",
    category: "Rừng nguyên sinh",
    highlights: [
      "Chiêm ngưỡng các cây đại thụ trăm năm tuổi",
      "Khám phá hệ thực vật đa tầng tán phong phú",
      "Quan sát các loài chim và thú linh trưởng hoang dã"
    ]
  },
  {
    id: 102, 
    title: "Rừng hỗn giao gỗ tre nứa",
    description: "Hệ sinh thái độc đáo được hình thành sau các biến động tự nhiên, nơi các loài tre nứa bản địa đan xen sinh trưởng mạnh mẽ cùng cây gỗ, tạo nên nguồn thức ăn và sinh cảnh quan trọng cho voi châu Á.",
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=2000&auto=format&fit=crop",
    category: "Rừng hỗn giao",
    highlights: [
      "Trekking xuyên qua những cung đường tre nứa bạt ngàn",
      "Tìm hiểu tập tính của các loài động vật ăn cỏ lớn",
      "Cảnh quan check-in hoang sơ và ấn tượng"
    ]
  },
  {
    id: 103,
    title: "Rừng ngập nước bán ngập",
    description: "Hệ thực vật bao quanh khu vực Bàu Sấu, chịu ngập úng định kỳ vào mùa mưa. Các loài cây tại đây sở hữu hệ rễ thở (rễ khí sinh) độc đáo giúp thích nghi tốt với môi trường ngập nước kéo dài.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop",
    category: "Rừng ngập nước",
    highlights: [
      "Quan sát hệ rễ cây hình thù độc lạ nhô khỏi mặt nước",
      "Hệ sinh thái vùng đệm của đất ngập nước Ramsar quốc tế",
      "Nơi tụ hội của hàng chục loài chim nước di cư"
    ]
  }
];