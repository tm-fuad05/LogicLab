import { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { theme } = useTheme();

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-8 h-8",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div
      className={`flex items-center gap-2 group cursor-pointer ${className}`}
    >
      {/* Tech Flask / Logic Circuit Hybrid Badge */}
      <img
        src={`${theme == "dark" ? " /logiclab-black.png" : "/logiclab-white.png"} `}
        alt="LogicLab"
        className={`${iconSizes[size]}`}
      />

      {/* Styled LogicLab Typography */}
      <div className="flex items-baseline font-poppins">
        <span
          className={`font-semibold tracking-tight text-[#19222C] dark:text-white ${textSizes[size]}`}
        >
          Logic
        </span>
        <span
          className={`font-semibold tracking-tight text-cyan ${textSizes[size]}`}
        >
          Lab<span className="text-txt-main">.</span>
        </span>
      </div>
    </div>
  );
}
