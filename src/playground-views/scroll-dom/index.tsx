// Category 5: Scroll & DOM Mechanics
export function ScrollProgressView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white relative">
      <div className="sticky top-0 left-0 w-full h-1 bg-[#e5e7eb]">
        <div className="h-full bg-[#222222] w-1/3"></div>
      </div>
      <div className="p-6 space-y-4 max-h-48 overflow-y-auto font-sans text-xs text-[#666666] leading-relaxed">
        <h5 className="font-semibold text-[#121212] ">
          Sample Long Technical Article
        </h5>
        <p>
          Paragraph 1: Scroll through this text container to simulate reading
          progress observation logic.
        </p>
        <p>
          Paragraph 2: The progress indicator bar at the top displays reading
          percentage based on DOM scrollTop.
        </p>
        <p>
          Paragraph 3: Connect your scroll listener hooks in the empty code
          block below.
        </p>
      </div>
    </div>
  );
}

export function ScrollToTopStickyView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-[#fafafa] p-6 relative min-h-[220px]">
      <div className="sticky top-0 bg-white border border-[#e5e7eb] p-3 text-xs  font-semibold text-[#121212]">
        Sticky Header Bar
      </div>
      <div className="my-8 text-center text-xs  text-[#666666]">
        Scroll Down to see sticky button state trigger
      </div>
      <button className="absolute bottom-4 right-4 px-3 py-2 bg-[#222222] text-white text-xs  shadow-sm">
        ↑ Scroll to Top
      </button>
    </div>
  );
}

export function ScrollSpyView() {
  return (
    <div className="w-full flex gap-4">
      <div className="w-36 space-y-1  text-xs border-r border-[#e5e7eb] pr-4">
        <div className="font-semibold border-l-2 border-[#222222] pl-2 text-[#121212]">
          # Section 1
        </div>
        <div className="text-[#666666] pl-2 hover:text-[#121212]">
          # Section 2
        </div>
        <div className="text-[#666666] pl-2 hover:text-[#121212]">
          # Section 3
        </div>
      </div>
      <div className="flex-1 space-y-4 max-h-48 overflow-y-auto p-4 border border-[#e5e7eb] bg-white">
        <div className="p-4 border border-[#e5e7eb] bg-[#fafafa] text-xs  text-[#121212]">
          Section 1 Body Content Block
        </div>
        <div className="p-4 border border-[#e5e7eb] bg-[#fafafa] text-xs  text-[#121212]">
          Section 2 Body Content Block
        </div>
      </div>
    </div>
  );
}

export function InfiniteScrollView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white p-4 space-y-3">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="p-3 border border-[#e5e7eb] bg-[#fafafa] text-xs  text-[#121212]"
        >
          Infinite Feed Item #{i}
        </div>
      ))}
      <div className="p-4 border border-dashed border-[#e5e7eb] text-center text-xs  text-[#999999] animate-pulse">
        Loading more items... (Skeleton Block)
      </div>
    </div>
  );
}
