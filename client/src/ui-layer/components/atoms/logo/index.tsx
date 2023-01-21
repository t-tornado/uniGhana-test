import React from "react";
import "./index.css";

interface LogoProps {
  size?: string;
}

export const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <span>
      <span style={{ fontSize: `${size}px` }} className="logo-text">
        UniGhana
      </span>
      <div className="period" />
    </span>
  );
};
