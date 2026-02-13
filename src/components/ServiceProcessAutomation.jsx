import { useState, useEffect } from "react";

import * as StepImages from "./svg/servicesteps";

const ServiceProcessAutomation = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % data.steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.steps.length]);

  const StepImage = StepImages[data.steps[currentStep].imageName];

  return (
    <div className="w-full flex flex-col gap-5 sm:gap-6 md:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Container */}
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
        {/* Title */}
        <h2 className="w-full h-auto mx-auto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-[1.2] md:leading-none text-black text-center flex items-center justify-center mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
          {data.title}
        </h2>

        {/* Outer Frame */}
        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl w-full max-w-full h-auto min-h-[320px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[484px] pt-3 sm:pt-4 md:pt-[21px] pb-3 sm:pb-4 md:pb-[21px] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] flex flex-col items-center overflow-x-hidden">
          {/* Top Menu (Steps) - Scrollable on Mobile */}
          <div className="flex flex-nowrap items-center justify-start md:justify-around w-full h-auto min-h-8 sm:min-h-9 md:min-h-10 lg:min-h-[42px] mb-3 sm:mb-3.5 md:mb-4 lg:mb-[18px] overflow-x-auto scrollbar-hide px-2 sm:px-3 md:px-4 lg:px-6 gap-2 md:gap-0">
            {data.steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-shrink-0 flex items-center justify-center p-1.5 sm:p-2 md:p-2.5 min-w-[100px] sm:min-w-[110px] md:min-w-[120px] lg:min-w-[132px] w-auto h-7 sm:h-8 md:h-9 lg:h-[42px] rounded-lg text-[11px] sm:text-xs md:text-sm font-medium leading-none tracking-normal whitespace-nowrap transition-all duration-300 border ${
                  index <= currentStep
                    ? "bg-[#3960FF] text-white border-[#3960FF] shadow-[0px_4px_4px_0px_#00000040]"
                    : "bg-white text-black border-gray-200"
                }`}
              >
                {step.name}
              </div>
            ))}
          </div>

          {/* Main Gradient Card */}
          <div className="w-full mx-auto h-auto min-h-[260px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[386px] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl bg-[linear-gradient(265.37deg,#FFCCF2_2.78%,#977DFF_70.04%,#0033FF_127.68%)] p-4 sm:p-5 md:p-6 lg:pt-[40px] lg:pl-[30px] lg:pr-[30px] lg:pb-[40px] xl:pt-[60px] xl:pl-[38px] xl:pr-16 xl:pb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            {/* Animated Content Wrapper */}
            <div
              key={currentStep}
              className="w-full flex flex-col-reverse md:flex-row items-center justify-between animate-slide-in-right gap-3 sm:gap-4 md:gap-6 lg:gap-4 xl:gap-0"
            >
              {/* Left Side: Text Content */}
              <div className="flex flex-col items-center md:items-start w-full md:max-w-[45%] lg:max-w-[50%] text-white text-center md:text-left">
                {/* Step Badge */}
                <div className="w-auto min-w-[60px] sm:min-w-[65px] md:min-w-[72px] lg:min-w-[78px] h-6 sm:h-7 md:h-8 lg:h-[33px] bg-[#101827] text-white rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center px-2 sm:px-2.5 md:px-3 text-[11px] sm:text-xs md:text-sm font-semibold mb-2.5 sm:mb-3 md:mb-4 lg:mb-[21px]">
                  Step {data.steps[currentStep].id}
                </div>

                {/* Step Title */}
                <h3 className="w-full md:w-auto lg:w-[588px] h-auto md:h-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] font-medium leading-tight md:leading-none text-white md:text-black flex items-center justify-center md:justify-start mb-2 sm:mb-2.5 md:mb-1.25">
                  {data.steps[currentStep].title}
                </h3>

                {/* Subtitle */}
                <p className="w-full md:w-auto lg:w-[538px] text-[11px] sm:text-xs md:text-sm lg:text-base font-normal leading-relaxed sm:leading-normal text-white md:text-[#000000BA]">
                  {data.steps[currentStep].subtitle}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="w-full md:max-w-[40%] lg:max-w-[350px] xl:max-w-[400px] h-auto flex justify-center md:justify-end flex-shrink-0">
                {StepImage && <StepImage />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessAutomation;
