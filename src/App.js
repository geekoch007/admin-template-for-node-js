import React, { useEffect } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnalyticsDashboard from './components/AnalyticsDashboard/AnalyticsDashboard';
import EcommerceDashboard from './components/EcommerceDashboard/EcommerceDashboard';
import Slider from './components/Slider/Slider';
import Category from './components/Category/Category';
import Instagram from './components/Instagram/Instagram';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* user pages */}
          <Route exact index element={<AnalyticsDashboard />} />
          <Route exact path="/ecommerce-dashboard" element={<EcommerceDashboard />} />
          <Route exact path="/slider" element={<Slider />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/instagram" element={<Instagram />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          {/* end of user pages */}

          <Route exact path="*" element={<AnalyticsDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
