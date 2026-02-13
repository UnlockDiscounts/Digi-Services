import React from 'react'
import logo from "./assets/logo.svg"


export default function WelcomePage() {
  return (
    <div className="w-full h-full min-h-screen bg-[linear-gradient(180deg,#FDCBF2_0%,#907AFF_50%,#0435FF_100%)] flex flex-col items-center justify-center gap-6">
      <div className="flex justify-center w-[120px] h-[120px] md:w-[150px] md:h-[150px]">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center text-white">
        <p className="font-poppins font-bold text-2xl md:text-3xl lg:text-[40px] leading-[110%] tracking-[0] max-w-[405px] w-full mx-auto">
          Unlock DigiServices
        </p>
        <p className="font-poppins font-semibold text-lg md:text-xl lg:text-[24px] leading-[110%] tracking-[0] pt-2 md:pt-[5px] max-w-[405px] w-full mx-auto">
          Welcome Back
        </p>
      </div>
    </div>
  )
}
