// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Map from './pages/Map';
import Food from './pages/Food';
import Jungle from './pages/Jungle';
import About from './pages/About'; // Sử dụng trang About làm trang chi tiết dùng chung

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f4f6f0' }}>
        <Navbar />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/food" element={<Food />} />
            <Route path="/he-sinh-thai" element={<Jungle />} />
            
            {/* Tuyến đường chi tiết cho Tour/Địa điểm trang chủ */}
            <Route path="/tour/:id" element={<About />} />
            
            {/* Tuyến đường chi tiết cho các loại rừng */}
            <Route path="/rung/:id" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;