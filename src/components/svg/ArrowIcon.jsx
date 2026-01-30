import * as React from "react";
const SvgArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#473CF0"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M7.293 10.001h5.417m0 0-2.084-2.083m2.084 2.083-2.084 2.084"
    />
  </svg>
);
export default SvgArrowIcon;
