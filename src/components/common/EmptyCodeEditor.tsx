interface EmptyCodeEditorProps {
  logicId: string;
  title: string;
  codeSnippet: string;
}

export default function EmptyCodeEditor({
  logicId,
  title,
  codeSnippet,
}: EmptyCodeEditorProps) {
  return (
    <section className="mt-10 border border-line bg-card rounded-none font-poppins">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-sidebar">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-dark-line dark:bg-cyan"></span>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-txt-main">
            Logic Implementation Notes: {title}
          </h3>
        </div>
        <span className="text-xs text-txt-secondary">{logicId}.tsx</span>
      </div>
      <div className="bg-code text-sm min-h-[220px]">
        <pre className="text-gray-700 dark:text-txt-secondary whitespace-pre-wrap outline-none">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </section>
  );
}
