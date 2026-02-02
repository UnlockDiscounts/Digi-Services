import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";

import WelcomePage from './welcomePage.jsx';
import UnlockDiscountsLoginpage from './UnlockDiscoutsLoginpage.jsx';
import Blogs from './components/blogs/blogs.jsx';
import Service from "./components/services/service.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import Dashboard from './Dashboard.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };


    return (
      <Routes>
        <Route path="/login" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-200">
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
        } />
        <Route path="/articles" element={<Articles />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/services" element={<ServiceCategory />} />
        <Route path="/services/:serviceType" element={<ServiceDetail />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/sidebar" element={<Sidebar activeItem="Services" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    );
  
}

export default App;
