export default function AboutTechStackSection() {
  const stack = [
    { name: "React 19", role: "UI Runtime", detail: "Using modern Hooks, Derived State, and Concurrent Rendering features" },
    { name: "TypeScript", role: "Type Safety", detail: "Strict typings, interface models, and zero implicit any" },
    { name: "Tailwind CSS v4", role: "Styling Engine", detail: "Minimal custom CSS, dark-mode tokens, and CSS Grid layout techniques" },
    { name: "React Router v7", role: "Client Routing", detail: "Data loaders, nested layouts, and SPA client-side history navigation" },
    { name: "Vite 8", role: "Build Tool", detail: "Instant HMR development experience and optimized Rollup production bundles" },
    { name: "Lenis Smooth Scroll", role: "Motion Feel", detail: "Smooth scrolling physics with portal & modal scroll-lock guards" },
  ];

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-txt-main">
          Architecture & Tech Stack
        </h2>
        <span className="text-[11px] font-mono text-txt-muted">02 / BUILT WITH</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="p-4 border border-line bg-sidebar space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-txt-main">
                {item.name}
              </span>
              <span className="text-[10px] font-mono text-txt-muted border border-line px-1.5 py-0.5 bg-card">
                {item.role}
              </span>
            </div>
            <p className="text-[11px] text-txt-secondary leading-normal">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
