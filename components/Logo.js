import React from "react";
import logoPath from "../lib/logoPath";

const Logo = ({ color = "red", width = "100", height = "100" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 194.893 121.484"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={logoPath} // the actual logo path (super large)
        fill={color} // Dynamic color
        fillOpacity="1"
        strokeWidth=".264583"
        paintOrder="stroke fill markers"
      />
    </svg>
  );
};

export default Logo;
