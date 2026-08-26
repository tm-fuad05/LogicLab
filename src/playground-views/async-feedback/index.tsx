// Category 6: Async Operations
export function ApiStateManagementView() {
  return (
    <div className="w-full space-y-4">
      <div className="flex border-b border-[#e5e7eb] text-xs ">
        <span className="px-3 py-1.5 border-b-2 border-[#222222] font-semibold text-[#121212]">
          Loading State
        </span>
        <span className="px-3 py-1.5 text-[#666666]">Error State</span>
        <span className="px-3 py-1.5 text-[#666666]">Success State</span>
      </div>
      <div className="p-6 border border-[#e5e7eb] bg-white min-h-[120px] flex items-center justify-center">
        <div className="flex items-center gap-3  text-xs text-[#666666]">
          <span className="w-3 h-3 border-2 border-[#222222] border-t-transparent animate-spin"></span>
          Fetching async response payload...
        </div>
      </div>
    </div>
  );
}

export function DebouncedSearchView() {
  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Type query to trigger debounced API search..."
          className="w-full px-3 py-2 border border-[#e5e7eb] text-xs  focus:outline-none"
        />
        <span className="absolute right-3 top-2.5 text-[10px]  text-amber-600 font-semibold uppercase">
          Waiting 500ms...
        </span>
      </div>
      <div className="p-4 border border-[#e5e7eb] bg-[#fafafa]  text-xs text-[#666666]">
        Status:{" "}
        <span className="text-[#121212] font-semibold">
          User typing, debounce timer active
        </span>
      </div>
    </div>
  );
}

export function OptimisticUIView() {
  return (
    <div className="w-full max-w-md mx-auto border border-[#e5e7eb] bg-white p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs  font-semibold text-[#121212]">Post #402</span>
        <button className="flex items-center gap-1 px-3 py-1 border border-[#e5e7eb] bg-[#fafafa] text-xs  text-[#121212] hover:border-[#222222]">
          ♥ 42 Likes
        </button>
      </div>
      <p className="text-xs text-[#666666] leading-relaxed">
        Clicking like updates the count instantly in UI before server request
        resolves.
      </p>
    </div>
  );
}

export function CopyClipboardView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <label className="block text-xs  text-[#121212]">API Access Key</label>
      <div className="flex">
        <input
          type="text"
          readOnly
          value="sk_live_99402940184019481"
          className="flex-1 px-3 py-2 border border-[#e5e7eb] bg-[#fafafa] text-xs  text-[#666666]"
        />
        <button className="px-4 py-2 bg-[#222222] text-white text-xs  hover:bg-black">
          Copy
        </button>
      </div>
    </div>
  );
}

export function PollingEngineView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white p-5 space-y-3">
      <div className="flex items-center justify-between  text-xs border-b border-[#e5e7eb] pb-3">
        <span className="font-semibold text-[#121212]">
          Server Metrics Stream
        </span>
        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">
          Polled: 2s ago
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4  text-xs">
        <div className="p-3 bg-[#fafafa] border border-[#e5e7eb]">
          CPU Load: 24%
        </div>
        <div className="p-3 bg-[#fafafa] border border-[#e5e7eb]">
          RAM Usage: 1.4 GB
        </div>
      </div>
    </div>
  );
}
