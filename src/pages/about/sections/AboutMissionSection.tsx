export default function AboutMissionSection() {
  const pillars = [
    {
      title: "No Black-Box Libraries",
      tag: "Vanilla React",
      desc: "Instead of relying on bloated 3rd-party dependencies for common interactions (like modals, dropdowns, accordions, and timers), we implement them with pure React hooks and native DOM APIs.",
    },
    {
      title: "Interactive State Sandboxes",
      tag: "Live Playground",
      desc: "Every component is wired directly to an isolated live sandbox where you can toggle states, inspect re-renders, and test edge cases in real-time.",
    },
    {
      title: "Read-to-Copy Production Code",
      tag: "Zero Setup",
      desc: "Instant access to both JavaScript and TypeScript implementations, written with clean comments and production-grade styling with Tailwind CSS.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-txt-main">
          Core Principles
        </h2>
        <span className="text-[11px] font-mono text-txt-muted">01 / WHY LOGICLAB</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="p-5 border border-line bg-card space-y-3 hover:border-dark-line dark:hover:border-cyan transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan border border-line px-1.5 py-0.5 bg-sidebar">
                {pillar.tag}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-txt-main">
              {pillar.title}
            </h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
