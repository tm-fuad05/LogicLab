// Category 4: Data Processing
export function LiveSearchFilterView() {
  return (
    <div className="w-full space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search items..."
          className="flex-1 px-3 py-2 border border-[#e5e7eb] text-xs  focus:outline-none"
        />
        <select className="px-3 py-2 border border-[#e5e7eb] bg-white text-xs  focus:outline-none">
          <option>All Categories</option>
          <option>Frontend</option>
          <option>Backend</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "React Hooks Deep Dive", cat: "Frontend", price: "$49" },
          { title: "Node.js Architecture", cat: "Backend", price: "$59" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 border border-[#e5e7eb] bg-white space-y-1"
          >
            <span className="text-[10px]  text-[#666666] uppercase">
              {item.cat}
            </span>
            <h5 className="text-xs font-semibold text-[#121212]">
              {item.title}
            </h5>
            <p className="text-xs  text-[#222222] font-semibold">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MultiColumnSortingView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white">
      <table className="w-full text-left border-collapse  text-xs">
        <thead>
          <tr className="bg-[#fafafa] border-b border-[#e5e7eb]">
            <th className="p-3 font-semibold text-[#121212] cursor-pointer">
              Name ▲
            </th>
            <th className="p-3 font-semibold text-[#121212] cursor-pointer">
              Date ▼
            </th>
            <th className="p-3 font-semibold text-[#121212] cursor-pointer">
              Amount ▲▼
            </th>
            <th className="p-3 font-semibold text-[#121212]">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e5e7eb]">
          <tr>
            <td className="p-3 text-[#121212]">Alpha Module</td>
            <td className="p-3 text-[#666666]">2026-08-01</td>
            <td className="p-3 text-[#121212]">$1,200</td>
            <td className="p-3 text-emerald-600">Active</td>
          </tr>
          <tr>
            <td className="p-3 text-[#121212]">Beta Engine</td>
            <td className="p-3 text-[#666666]">2026-08-15</td>
            <td className="p-3 text-[#121212]">$850</td>
            <td className="p-3 text-amber-600">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PaginationView() {
  return (
    <div className="w-full space-y-4">
      <div className="p-4 border border-[#e5e7eb] bg-white text-xs  text-[#666666] min-h-[100px] flex items-center justify-center">
        Displaying Page 1 of 10 Data Rows Scaffold
      </div>
      <div className="flex items-center justify-between  text-xs">
        <span className="text-[#666666]">Show 10 per page</span>
        <div className="flex gap-1">
          <button className="px-2.5 py-1 border border-[#e5e7eb] text-[#999999]">
            Prev
          </button>
          <button className="px-2.5 py-1 border border-[#222222] bg-[#222222] text-white">
            1
          </button>
          <button className="px-2.5 py-1 border border-[#e5e7eb] text-[#121212]">
            2
          </button>
          <button className="px-2.5 py-1 border border-[#e5e7eb] text-[#121212]">
            3
          </button>
          <span className="px-2 py-1 text-[#999999]">...</span>
          <button className="px-2.5 py-1 border border-[#e5e7eb] text-[#121212]">
            10
          </button>
          <button className="px-2.5 py-1 border border-[#e5e7eb] text-[#121212]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export function BulkSelectionView() {
  return (
    <div className="w-full border border-[#e5e7eb] bg-white">
      <div className="p-3 bg-[#fafafa] border-b border-[#e5e7eb] flex items-center justify-between text-xs ">
        <span className="text-[#666666]">2 items selected</span>
        <button className="px-3 py-1 border border-red-200 text-red-600 hover:bg-red-50">
          Bulk Delete
        </button>
      </div>
      <table className="w-full text-left border-collapse  text-xs">
        <thead>
          <tr className="border-b border-[#e5e7eb]">
            <th className="p-3 w-10">
              <input type="checkbox" defaultChecked />
            </th>
            <th className="p-3 font-semibold text-[#121212]">Item Name</th>
            <th className="p-3 font-semibold text-[#121212]">ID</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e5e7eb]">
          <tr className="bg-[#fafafa]">
            <td className="p-3">
              <input type="checkbox" defaultChecked />
            </td>
            <td className="p-3 text-[#121212]">Component Alpha</td>
            <td className="p-3 text-[#666666]">#001</td>
          </tr>
          <tr className="bg-[#fafafa]">
            <td className="p-3">
              <input type="checkbox" defaultChecked />
            </td>
            <td className="p-3 text-[#121212]">Component Beta</td>
            <td className="p-3 text-[#666666]">#002</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function KeywordHighlightView() {
  return (
    <div className="w-full space-y-4">
      <input
        type="text"
        defaultValue="React"
        className="w-full px-3 py-2 border border-[#e5e7eb] text-xs  focus:outline-none"
      />
      <div className="p-5 border border-[#e5e7eb] bg-white text-xs leading-relaxed text-[#666666]">
        Building web applications with{" "}
        <mark className="bg-yellow-200 px-1 font-semibold text-[#121212]">
          React
        </mark>{" "}
        allows developer teams to build modular components. State management in{" "}
        <mark className="bg-yellow-200 px-1 font-semibold text-[#121212]">
          React
        </mark>{" "}
        is highly efficient.
      </div>
    </div>
  );
}
