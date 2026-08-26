interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
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
      className={`flex items-center gap-1.5 group cursor-pointer ${className}`}
    >
      {/* Sleek Tech Flask / Logic Circuit Hybrid Badge */}
      <div
        className={`${iconSizes[size]} bg-[#121212] text-white flex items-center justify-center relative border border-[#222222] shadow-xs transition-transform group-hover:scale-105`}
      >
        {/* Glow Dot */}
        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#00d8ff] rounded-none animate-pulse"></span>
        <svg
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* Flask shape with logic nodes inside */}
          <path d="M9 3h6M10 3v5L4.5 17.5A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.8-3.5L14 8V3" />
          <path
            d="M8.5 14h7"
            strokeDasharray="1 2"
            stroke="#00d8ff"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Styled LogicLab Typography */}
      <div className="flex items-baseline">
        <span
          className={`font-poppins font-bold tracking-tight text-[#121212] ${textSizes[size]}`}
        >
          Logic
        </span>
        <span
          className={`font-poppins font-bold tracking-tight text-[#00d8ff] ${textSizes[size]}`}
        >
          Lab
        </span>
      </div>
    </div>
  );
}
