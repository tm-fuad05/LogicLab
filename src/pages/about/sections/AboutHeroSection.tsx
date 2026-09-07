export default function AboutHeroSection() {
  return (
    <section className="space-y-4 border-b border-line pb-8">
      <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-line bg-sidebar text-[11px] font-mono text-cyan-600 dark:text-cyan">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan animate-pulse" />
        <span>ABOUT THE PLATFORM</span>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-txt-main">
        Deconstructing Frontend UI Mechanics into Pure, Understandable Logic.
      </h1>

      <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed max-w-3xl">
        <strong className="text-txt-main">LogicLab</strong> is an interactive notebook and playground created to bridge the gap between static design components and the real-world JavaScript & React state mechanics that power them.
      </p>
    </section>
  );
}
