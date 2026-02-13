import React, { useState } from 'react'
import Button from './Button.jsx'
import Dashboard from './Dashboard.jsx'

export default function UnlockDiscountsLoginpage({ onLoginSuccess }) {
  const [adminId, setAdminId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (adminId === 'admin' && password === 'unlockdigiservices@1234') {
      setIsLoggedIn(true)
      setAdminId('')
      setPassword('')
      setError('')
      if (onLoginSuccess) {
        onLoginSuccess()
      }
    } else {
      setError('Invalid credentials.')
    }
  }

  if (isLoggedIn) {
    return <Dashboard />
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-primary w-full max-w-[441px] rounded-[16px] px-6 md:px-8 py-8 md:py-10 flex flex-col gap-6 md:gap-8 bg-white opacity-100 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-4"
    >
      <div className="text-center mb-2 md:mb-4">
        <h1 className="font-poppins font-semibold text-[20px] md:text-[24px] text-black mb-2">Admin Portal</h1>
        <p className="font-poppins font-medium text-[16px] md:text-[20px] leading-[110%] tracking-[0] text-center text-black max-w-[369px] w-full opacity-100 mx-auto flex items-center justify-center">
          Enter your credentials to access the admin panel
        </p>
      </div>
      <div className="flex flex-col gap-[12px] md:gap-[17px] w-full max-w-[369px]">
        <label
          className="font-poppins font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[100%] tracking-[0] text-black inline-flex items-center px-2 rounded-[8px] whitespace-nowrap"
          htmlFor="email"
        >
        Admin's ID
        </label>
        <input
          id="adminId"
          type="text"
          placeholder="xxxxxxxxxxxx"
          className="w-full h-[44px] md:h-[48px] border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[4px] w-full max-w-[369px]">
        <label
          className="font-poppins font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[100%] tracking-[0] text-black inline-flex items-center px-2 rounded"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="xxxxxxxxxxxx"
          className="w-full h-[44px] md:h-[48px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
      </div>
      <Button type="submit">sign in</Button>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center font-poppins">{error}</p>
      )}
    </form>
  )
}

