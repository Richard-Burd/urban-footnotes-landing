import React from "react";
import ufnLogoPath from "../lib/ufnLogoPath";
import ucsLogoPath from "../lib/ucsLogoPath";

const VIEWBOX = {
  ufn: "0 0 194.893 121.484",
  ucs: "0 0 194.893 75.434",
};

export default function Logo({
  type = "ufn",
  color = "#ffe873ff",
  className = "",
  style = {},
}) {
  const path = type === "ucs" ? ucsLogoPath : ufnLogoPath;
  const viewBox = VIEWBOX[type] || VIEWBOX.ufn;

  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} fill={color} />
    </svg>
  );
}
