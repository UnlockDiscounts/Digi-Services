import React from 'react'

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-[16px] shadow-md px-10 py-8 max-w-[600px] w-full text-center">
        <h1 className="font-poppins font-semibold text-[28px] mb-2 text-gray-900">
          Admin Dashboard
        </h1>
        <p className="font-poppins text-gray-600">
          You are now logged in as <span className="font-medium">admin</span>.
        </p>
      </div>
    </div>
  )
}
