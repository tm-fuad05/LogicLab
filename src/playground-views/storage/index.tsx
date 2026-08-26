// Category 7: Local Storage & Persistence
export function ShoppingCartView() {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-3">
        <h5 className="text-xs  font-semibold text-[#121212]">
          Product Catalog
        </h5>
        <div className="p-4 border border-[#e5e7eb] bg-white flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-[#121212]">
              Developer Keyboard
            </div>
            <div className="text-xs  text-[#666666]">$129.00</div>
          </div>
          <button className="px-3 py-1.5 bg-[#222222] text-white text-xs ">
            + Add to Cart
          </button>
        </div>
      </div>
      <div className="border border-[#e5e7eb] bg-[#fafafa] p-4 space-y-3  text-xs">
        <h5 className="font-semibold text-[#121212] border-b border-[#e5e7eb] pb-2">
          Cart Summary (1)
        </h5>
        <div className="flex justify-between text-[#666666]">
          <span>Developer Keyboard</span>
          <span>$129.00</span>
        </div>
        <div className="border-t border-[#e5e7eb] pt-2 flex justify-between font-semibold text-[#121212]">
          <span>Total</span>
          <span>$129.00</span>
        </div>
      </div>
    </div>
  );
}

export function ThemeSwitcherView() {
  return (
    <div className="w-full max-w-sm mx-auto p-4 border border-[#e5e7eb] bg-white text-center space-y-4">
      <span className="text-xs  text-[#666666] block">
        Persisted Theme Mode
      </span>
      <div className="inline-flex border border-[#e5e7eb] p-1 bg-[#fafafa]">
        <button className="px-4 py-1.5 bg-[#222222] text-white text-xs  font-semibold">
          Light Mode
        </button>
        <button className="px-4 py-1.5 text-[#666666] text-xs ">
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export function CrossTabSyncView() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="p-4 border border-[#e5e7eb] bg-white space-y-2  text-xs">
        <span className="font-semibold text-[#121212]">Window / Tab A</span>
        <input
          type="text"
          value="Shared State Message"
          readOnly
          className="w-full px-2 py-1 border border-[#e5e7eb] text-xs"
        />
      </div>
      <div className="p-4 border border-[#e5e7eb] bg-[#fafafa] space-y-2  text-xs">
        <span className="font-semibold text-[#121212]">
          Window / Tab B (Synced)
        </span>
        <div className="p-2 border border-[#e5e7eb] bg-white text-[#666666]">
          Shared State Message
        </div>
      </div>
    </div>
  );
}

export function RecentSearchesView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full px-3 py-2 border border-[#e5e7eb] text-xs  focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs ">
          <span className="text-[#666666]">Recent Searches</span>
          <button className="text-red-600 hover:underline">
            Clear History
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {["useState", "useRef", "useEffect"].map((term) => (
            <span
              key={term}
              className="px-2.5 py-1 bg-[#fafafa] border border-[#e5e7eb] text-xs  text-[#121212] flex items-center gap-1"
            >
              {term} <span className="text-[#999999] cursor-pointer">✕</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
