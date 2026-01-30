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
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-12 mb-20">
      {/* Container */}
      <div className="flex flex-col items-center w-full px-4 md:px-0">
        {/* Title */}
        <h2 className="w-full h-auto mx-auto text-3xl md:text-5xl font-medium leading-[1.2] md:leading-none text-black text-center flex items-center justify-center mb-8 md:mb-12">
          {data.title}
        </h2>

        {/* Outer Frame */}
        <div className="bg-white rounded-3xl w-full max-w-[1270px] h-auto min-h-[484px] pt-[21px] pb-[21px] shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] mx-auto flex flex-col items-center overflow-hidden">
          {/* Top Menu (Steps) - Scrollable on Mobile */}
          <div className="flex flex-nowrap items-center justify-start md:justify-around w-full max-w-[1224px] h-auto min-h-[42px] mx-auto mb-[18px] overflow-x-auto scrollbar-hide px-4 md:px-0 gap-3 md:gap-0">
            {data.steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-shrink-0 flex items-center justify-center p-2.5 min-w-[132px] w-auto h-[42px] rounded-lg text-sm font-medium leading-none tracking-normal whitespace-nowrap transition-all duration-300 border ${
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
          <div className="w-full max-w-[1239px] h-auto min-h-[386px] rounded-3xl bg-[linear-gradient(265.37deg,#FFCCF2_2.78%,#977DFF_70.04%,#0033FF_127.68%)] p-6 md:pt-[60px] md:pl-[38px] md:pr-16 md:pb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden mx-auto">
            {/* Animated Content Wrapper */}
            <div
              key={currentStep}
              className="w-full flex flex-col-reverse md:flex-row items-center justify-between animate-slide-in-right gap-8 md:gap-0"
            >
              {/* Left Side: Text Content */}
              <div className="flex flex-col items-center md:items-start w-full md:max-w-[50%] text-white text-center md:text-left">
                {/* Step Badge */}
                <div className="w-[78px] h-[33px] bg-[#101827] text-white rounded-2xl flex items-center justify-center p-2.5 text-sm font-semibold mb-[21px]">
                  Step {data.steps[currentStep].id}
                </div>

                {/* Step Title */}
                <h3 className="w-full md:w-[588px] h-auto md:h-12 text-2xl md:text-[32px] font-medium leading-tight md:leading-none text-black flex items-center justify-center md:justify-start mb-2.5 md:mb-1.25">
                  {data.steps[currentStep].title}
                </h3>

                {/* Subtitle */}
                <p className="w-full md:w-[538px] text-sm md:text-base font-normal leading-normal text-[#000000BA]">
                  {data.steps[currentStep].subtitle}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="w-full max-w-[300px] md:w-[400px] h-auto flex justify-center md:justify-end">
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
