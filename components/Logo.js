import React from "react";
import ufnLogoPath from "../lib/ufnLogoPath";
import ucsLogoPath from "../lib/ucsLogoPath";

const ufnViewBox = "0 0 194.893 121.484";
const ucsViewBox = "0 0 194.893 75.434";

const Logo = ({
  type = "ufn",
  color = "red",
  width = "100",
  height = "100",
  viewBox = ufnViewBox,
}) => {
  let path = ufnLogoPath;
  if (type === "ucs") {
    path = ucsLogoPath;
    viewBox = ucsViewBox;
  } else if (type === "ufn") {
    path = ufnLogoPath;
    viewBox = ufnViewBox;
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path} // the actual logo path (super large)
        fill={color} // Dynamic color
        fillOpacity="1"
        strokeWidth=".264583"
        paintOrder="stroke fill markers"
      />
    </svg>
  );
};

export default Logo;
