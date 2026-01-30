import React, { useState } from 'react'
import WelcomePage from './welcomePage.jsx'
import UnlockDiscountsLoginpage from './UnlockDiscoutsLoginpage.jsx'
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from '../src/Pages/ContactUs.jsx';
import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import Blogs from './components/blogs/blogs.jsx';
import Service from "./components/services/service.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {!isLoggedIn ? (
        // Login page
        <div className="flex items-center justify-center min-h-screen">
          <div className="app-layout w-full max-w-[1440px] bg-white flex flex-col md:flex-row md:h-[1024px]">
            <div className="w-full md:w-1/2 md:h-full">
              <WelcomePage />
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="auth-container flex justify-center">
                <UnlockDiscountsLoginpage onLoginSuccess={handleLoginSuccess} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // ALL your routes (combined + unique)
        <Routes>
          {/* Marketing/Home */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Blog/Articles */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          
          {/* Services */}
          <Route path="/services" element={<ServiceCategory />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/service" element={<Service />} />
          
          {/* Components */}
          <Route path="/sidebar" element={<Sidebar activeItem="Services" />} />
          
          {/* Login (public) */}
          <Route path="/login" element={<UnlockDiscountsLoginpage onLoginSuccess={handleLoginSuccess} />} />
          
          {/* 404 */}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      )}
    </div>
  );
};

export default App;
