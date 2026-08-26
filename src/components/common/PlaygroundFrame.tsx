import React from "react";

interface PlaygroundFrameProps {
  title: string;
  categoryTitle: string;
  children: React.ReactNode;
}

export default function PlaygroundFrame({
  title,
  categoryTitle,
  children,
}: PlaygroundFrameProps) {
  return (
    <div className="border border-line bg-card rounded-none font-poppins">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 border-b border-line bg-sidebar gap-2 sm:gap-0">
        <div>
          <span className="text-xs text-txt-secondary uppercase tracking-wider block mb-1">
            {categoryTitle}
          </span>
          <h2 className="text-base sm:text-lg font-semibold text-txt-main">{title}</h2>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="text-[11px] sm:text-xs px-2 py-1 bg-card border border-line text-txt-main dark:text-cyan">
            Stateless Scaffold
          </span>
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 bg-card border-b border-line relative min-h-[250px] sm:min-h-[300px] flex items-center justify-center overflow-x-auto">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        <div className="w-full max-w-3xl z-10">{children}</div>
      </div>
    </div>
  );
}
