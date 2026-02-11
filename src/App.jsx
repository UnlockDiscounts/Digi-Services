import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import UnlockDiscountsLoginpage from "./UnlockDiscoutsLoginpage.jsx";
import WelcomePage from "./welcomePage.jsx";
import Articles from "./pages/Articles";
import Blog from "./pages/Blog";
import ServiceCategory from "./pages/ServiceCategory";
import ServiceDetail from "./pages/ServiceDetail";
import Sidebar from "./components/sidebar/sidebar";
import { LandingPage } from "./components/LandingPage/LandingPage";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

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
const AdminLayout = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="min-h-screen w-full">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="app-layout w-full  bg-white flex flex-col md:flex-row md:h-[1024px]">
        <div className="w-full md:w-1/2 md:h-full">
          <WelcomePage />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="auth-container flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <Route path="/admin" element={<AdminLayout isLoggedIn={isLoggedIn} />}>
        {isLoggedIn ?
          <Route index element={<Sidebar onLogout={() => setIsLoggedIn(false)} />} /> :
          <Route index element={<UnlockDiscountsLoginpage onLoginSuccess={handleLoginSuccess} />} />}
      </Route>

      {/* 404 */}
      <Route path="*" element={<div>404 - Not Found</div>} />

    </Routes>


</>
  );
};

export default App;
