import { useState, useEffect } from "react";

import { SvgStack1 } from "./svg/Stack1";
import { SvgStack2 } from "./svg/Stack2";
import { SvgStack3 } from "./svg/Stack3";
import { SvgStack4 } from "./svg/Stack4";

const StackSlider = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded((prev) => !prev);
    }, 2000); // Toggle every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-4 overflow-hidden">
      {/* Container */}
      <div className="relative flex items-center justify-center h-50 md:h-[400px]">
        {/* Item 1 (Left Outer) */}
        <div
          className="transition-all duration-1000 ease-in-out z-10"
          style={{
            transform: isExpanded
              ? "translateX(0) scale(1)"
              : "translateX(95%) scale(0.9)",
            opacity: isExpanded ? 1 : 0.8,
            zIndex: isExpanded ? 10 : 10,
          }}
        >
          <SvgStack1 className="w-[150px] md:w-[309px] h-auto" />
        </div>

        {/* Item 2 (Left Inner) */}
        <div
          className="transition-all duration-1000 ease-in-out z-20"
          style={{
            transform: isExpanded
              ? "translateX(0) scale(1)"
              : "translateX(35%) scale(0.95)",
            marginLeft: isExpanded ? "20px" : "0px",
            zIndex: isExpanded ? 10 : 20,
          }}
        >
          <SvgStack2 className="w-[150px] md:w-[309px] h-auto" />
        </div>

        {/* Item 3 (Right Inner) */}
        <div
          className="transition-all duration-1000 ease-in-out z-20"
          style={{
            transform: isExpanded
              ? "translateX(0) scale(1)"
              : "translateX(-35%) scale(0.95)",
            marginLeft: isExpanded ? "20px" : "0px",
            zIndex: isExpanded ? 10 : 30, // Center item often on top in stack
          }}
        >
          <SvgStack3 className="w-[150px] md:w-[309px] h-auto" />
        </div>

        {/* Item 4 (Right Outer) */}
        <div
          className="transition-all duration-1000 ease-in-out z-10"
          style={{
            transform: isExpanded
              ? "translateX(0) scale(1)"
              : "translateX(-95%) scale(0.9)",
            marginLeft: isExpanded ? "20px" : "0px",
            opacity: isExpanded ? 1 : 0.8,
            zIndex: isExpanded ? 10 : 40,
          }}
        >
          <SvgStack4 className="w-[150px] md:w-[309px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default StackSlider;
