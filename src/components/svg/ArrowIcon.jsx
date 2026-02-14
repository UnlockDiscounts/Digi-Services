import * as React from "react";
const SvgArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    {/* Full Circle Border */}
    <circle cx="10" cy="10" r="7.5" stroke="#473CF0" strokeWidth="1.5" fill="none" />
    
    {/* Arrow Inside */}
    <path
      stroke="#473CF0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.293 10.001h5.417m0 0-2.084-2.083m2.084 2.083-2.084 2.084"
    />
  </svg>
);
export default SvgArrowIcon;
