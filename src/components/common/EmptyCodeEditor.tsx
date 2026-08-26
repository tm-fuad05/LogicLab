interface EmptyCodeEditorProps {
  logicId: string;
  title: string;
}

export default function EmptyCodeEditor({
  logicId,
  title,
}: EmptyCodeEditorProps) {
  return (
    <section className="mt-10 border border-[#e5e7eb] bg-white rounded-none">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#e5e7eb] bg-[#fafafa]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#222222]"></span>
          <h3 className="text-xs  font-semibold uppercase tracking-wider text-[#222222]">
            Logic Implementation Notes: {title}
          </h3>
        </div>
        <span className="text-xs  text-[#666666]">{logicId}.tsx</span>
      </div>
      <div className="p-6 bg-[#fafafa]  text-sm min-h-[220px]">
        <pre className="text-[#222222] whitespace-pre-wrap outline-none">
          <code>
            {`// Logic block is currently empty.
// Write and connect your React Hooks (useState, useEffect, useRef) & pure JS logic here.`}
          </code>
        </pre>
      </div>
    </section>
  );
}
