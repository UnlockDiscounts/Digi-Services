import React from 'react'


export default function WelcomePage() {
  return (
    <div className="h-full w-full bg-[linear-gradient(180deg,#FDCBF2_0%,#907AFF_50%,#0435FF_100%)] flex flex-col items-center justify-center gap-6 px-8">
      <div className="flex justify-center w-[150px] h-[150px] mb-4">
        <img
          src="src/assets/unlockdiscountlogo.png"
          alt="Logo"
          className="w-[150px] h-[150px]"
        />
      </div>
      <div className="text-center text-white">
        <p className="font-poppins font-bold text-[40px] leading-[100%] tracking-[0] w-[405px] h-[60px]">
          Unlock DigiServices
        </p>
        <p className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0] pt-[5px] w-[405px] h-[36px]">
          Welcome Back
        </p>
      </div>
    </div>
  )
}
