export default function AboutAuthorSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-txt-main">
          Creator & Open Source
        </h2>
        <span className="text-[11px] font-mono text-txt-muted">
          03 / AUTHOR
        </span>
      </div>

      <div className="p-6 border border-line bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-txt-main">
              Tanvir Mahmud Fuad
            </h3>
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan border border-line px-1.5 py-0.5 bg-sidebar">
              Software Developer
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="https://github.com/tm-fuad05/LogicLab"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none text-center px-4 py-2 border border-line bg-sidebar hover:border-dark-line dark:hover:border-cyan text-xs font-medium text-txt-main transition-colors"
          >
            Star on GitHub
          </a>
          <a
            href="https://tanvirmahmud.online"
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none text-center px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
