// Category 8: Advanced Interactivity
export function DragDropReorderView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {[
        "Item 1: Navigation Bar",
        "Item 2: Hero Section",
        "Item 3: Footer Module",
      ].map((title, idx) => (
        <div
          key={idx}
          className="p-3 border border-[#e5e7eb] bg-white flex items-center justify-between  text-xs cursor-grab"
        >
          <span className="text-[#121212]">{title}</span>
          <span className="text-[#999999]">:::</span>
        </div>
      ))}
    </div>
  );
}

export function ImageMagnifierView() {
  return (
    <div className="w-full flex gap-6 justify-center items-center">
      <div className="w-48 h-48 border border-[#e5e7eb] bg-[#fafafa] relative flex items-center justify-center  text-xs text-[#666666]">
        Product Image Frame
        <div className="absolute w-16 h-16 border border-[#222222] bg-white/30 top-10 left-10 pointer-events-none"></div>
      </div>
      <div className="w-48 h-48 border border-[#e5e7eb] bg-white p-4 flex items-center justify-center  text-xs text-[#121212]">
        Magnified 2x View
      </div>
    </div>
  );
}

export function DoubleRangeSliderView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="flex justify-between  text-xs">
        <span>
          Min Price: <strong className="text-[#121212]">$20</strong>
        </span>
        <span>
          Max Price: <strong className="text-[#121212]">$80</strong>
        </span>
      </div>
      <div className="relative w-full h-2 bg-[#e5e7eb] my-4">
        <div className="absolute left-1/5 right-1/5 h-full bg-[#222222]"></div>
        <div className="absolute left-1/5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#222222]"></div>
        <div className="absolute right-1/5 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#222222]"></div>
      </div>
    </div>
  );
}

export function CustomAudioVideoView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white p-4 space-y-4">
      <div className="w-full h-40 bg-[#121212] flex items-center justify-center text-white  text-xs">
        Media Viewport Container
      </div>
      <div className="flex items-center gap-4  text-xs">
        <button className="px-3 py-1 bg-[#222222] text-white">▶ Play</button>
        <div className="flex-1 h-1.5 bg-[#e5e7eb] relative">
          <div className="w-1/3 h-full bg-[#222222]"></div>
        </div>
        <span className="text-[#666666]">01:12 / 03:45</span>
      </div>
    </div>
  );
}
