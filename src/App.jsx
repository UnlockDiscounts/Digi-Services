import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";

import WelcomePage from './welcomePage.jsx';
import UnlockDiscountsLoginpage from './UnlockDiscoutsLoginpage.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      <Route path="/" element={
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
    </Routes>
  );
};

export default App;
