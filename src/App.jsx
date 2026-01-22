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
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-[1440px] h-auto md:h-[1024px] bg-white flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[320px] md:h-full">
          <WelcomePage />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center py-10 md:py-0">
          <UnlockDiscountsLoginpage onLoginSuccess={() => setIsAuthenticated(true)} />
        </div>
      </div>
    </div>
  )
}
