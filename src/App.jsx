import React, { useState } from 'react'
import WelcomePage from './welcomePage.jsx'
import UnlockDiscountsLoginpage from './unlockDiscoutsLoginpage.jsx'
import Dashboard from './Dashboard.jsx'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (isAuthenticated) {
    return <Dashboard />
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="app-layout w-full max-w-[1440px] bg-white flex flex-col md:flex-row md:h-[1024px]">
        <div className="w-full md:w-1/2 md:h-full">
          <WelcomePage />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="auth-container flex justify-center">
            <UnlockDiscountsLoginpage onLoginSuccess={() => setIsAuthenticated(true)} />
          </div>
        </div>
      </div>
    </div>
  )
}
