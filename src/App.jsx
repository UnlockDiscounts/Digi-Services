

import React, { useState } from 'react'
import WelcomePage from './welcomePage.jsx'
import UnlockDiscountsLoginpage from './UnlockDiscoutsLoginpage.jsx'
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from '../src/Pages/ContactUs.jsx';

import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginSuccess = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="min-h-screen bg-gray-200">
      {!isLoggedIn ? (
        // Login page (master)
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
        // Your routed app (new-feature-branch)
        <>
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={
              <UnlockDiscountsLoginpage onLoginSuccess={handleLoginSuccess} />
            } />
            <Route path="*" element={<div>404 - Not Found</div>} />
          </Routes>
        </>
      )}
    </div>
  )
}
