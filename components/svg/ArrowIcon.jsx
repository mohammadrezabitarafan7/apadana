import React from "react";

const ArrowIcon = ({ size = 24, color = "#4C4C4C", strokeWidth = 1.5 }) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 7} 
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.37499 11.45L1.29999 7.37505C0.818744 6.8938 0.818744 6.1063 1.29999 5.62505L5.37499 1.55005"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
