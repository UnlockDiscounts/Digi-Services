import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom'; 

import UnlockDiscountsLoginpage from "./UnlockDiscoutsLoginpage.jsx";
import Articles from "./Pages/Articles.jsx";
import Blog from "./Pages/Blog.jsx";
import ServiceCategory from "./Pages/ServiceCategory.jsx";
import ServiceDetail from "./Pages/ServiceDetail.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import { LandingPage } from "./components/LandingPage/LandingPage.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

/* ---------------- CLIENT LAYOUT ---------------- */
const ClientLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="absolute top-3 left-0 w-full z-50">
        <Navbar />
      </div>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

/* ---------------- ADMIN LAYOUT ---------------- */
const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
    <Routes>

      {/* ================= CLIENT ROUTES ================= */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Blog / Articles */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Services */}
        <Route path="/services" element={<ServiceCategory />} />
        <Route path="/services/:serviceType" element={<ServiceDetail />} />

      </Route>

      
      <Route path="/contact" element={
      <div className="relative min-h-screen"> 
      <div className="absolute top-3 left-0 w-full z-50">
      <Navbar />
      </div>
    
      {/* ContactUs page */}
      <ContactUs />
      </div>
       } />


      {/* ================= ADMIN ROUTES ================= */}
      <Route path="/admin" element={<AdminLayout />}>
        {isLoggedIn ?
          <Route index element={<Sidebar />} /> :
          <Route index element={<UnlockDiscountsLoginpage onLoginSuccess={handleLoginSuccess} />} />}
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 - Not Found</div>} />

    </Routes>


</>
  );
};

export default App;
