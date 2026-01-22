import React, { useState } from 'react'
import Button from './Button.jsx'

export default function UnlockDiscountsLoginpage({ onLoginSuccess }) {
  const [adminId, setAdminId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (adminId === 'admin' && password === 'admin') {
      setError('')
      if (onLoginSuccess) {
        onLoginSuccess()
      }
    } else {
      setError('Invalid credentials. Use admin / admin.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[441px] rounded-[16px] px-8 py-10 flex flex-col gap-8 bg-white opacity-100 shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]"
    >
      <div className="text-center mb-4">
        <h1 className="font-poppins font-semibold text-[24px] text-black mb-2">Admin Portal</h1>
        <p className="font-poppins font-medium text-[20px] leading-[100%] tracking-[0] text-center text-black w-[369px] h-[60px] opacity-100 mx-auto flex items-center justify-center">
          Enter your credentials to access the admin panel
        </p>
      </div>
      <div className="flex flex-col gap-[17px] w-full max-w-[369px] h-[103px]">
        <label
          className="font-poppins font-medium text-[24px] leading-[100%] tracking-[0] text-black w-[129px] h-[36px] flex items-center px-2 rounded-[8px] whitespace-nowrap"
          htmlFor="email"
        >
        Admin's ID
        </label>
        <input
          id="adminId"
          type="text"
          placeholder="xxxxxxxxxxxx234"
          className="w-full h-[48px] border border-gray-300 rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[4px] w-full max-w-[369px] h-[131px]">
        <label
          className="font-poppins font-medium text-[24px] leading-[100%] tracking-[0] text-black w-[117px] h-[36px] flex items-center px-2 rounded"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="xxxxxxxxxxxx"
          className="w-full h-[48px] border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="self-start text-sm text-blue-500 hover:text-blue-600 hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <Button type="submit">sign in</Button>
      {error && (
        <p className="mt-2 text-sm text-red-500 text-center font-poppins">{error}</p>
      )}
    </form>
  )
}

