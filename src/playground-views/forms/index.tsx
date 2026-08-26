// Category 3: Forms
export function ReactiveValidationView() {
  return (
    <form
      className="w-full max-w-md mx-auto space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="block text-xs  text-[#121212] mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Jane Doe"
          className="w-full px-3 py-2 border border-[#e5e7eb] bg-white text-xs  focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-xs  text-[#121212] mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="jane@example.com"
          className="w-full px-3 py-2 border border-red-500 bg-white text-xs  focus:outline-none"
        />
        <span className="text-[10px]  text-red-600 mt-1 block">
          Please enter a valid email address.
        </span>
      </div>
      <div>
        <label className="block text-xs  text-[#121212] mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 border border-[#e5e7eb] bg-white text-xs  focus:outline-none"
        />
      </div>
      <button className="w-full py-2 bg-[#222222] text-white text-xs ">
        Submit Form
      </button>
    </form>
  );
}

export function MultiStepFormView() {
  return (
    <div className="w-full max-w-lg mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3  text-xs">
        <span className="font-semibold text-[#121212] border-b-2 border-[#222222] pb-3 -mb-3">
          1. Personal Info
        </span>
        <span className="text-[#999999]">2. Preferences</span>
        <span className="text-[#999999]">3. Confirmation</span>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-xs  text-[#121212] mb-1">
            Step 1 Field
          </label>
          <input
            type="text"
            placeholder="Account username"
            className="w-full px-3 py-2 border border-[#e5e7eb] bg-white text-xs  focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-between pt-4 border-t border-[#e5e7eb]">
        <button
          disabled
          className="px-4 py-2 border border-[#e5e7eb] text-xs  text-[#999999] bg-[#fafafa]"
        >
          Back
        </button>
        <button className="px-4 py-2 bg-[#222222] text-white text-xs ">
          Next Step →
        </button>
      </div>
    </div>
  );
}

export function DynamicFieldsView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs  font-semibold text-[#121212]">
          Dynamic Skill List
        </span>
        <button className="px-3 py-1 border border-[#222222] text-xs  text-[#121212] hover:bg-[#fafafa]">
          + Add Field
        </button>
      </div>
      <div className="space-y-2">
        {["React.js", "TypeScript"].map((val, idx) => (
          <div key={idx} className="flex gap-2">
            <input
              type="text"
              readOnly
              value={val}
              className="flex-1 px-3 py-1.5 border border-[#e5e7eb] bg-white text-xs  focus:outline-none"
            />
            <button className="px-3 py-1.5 border border-red-200 text-red-600 text-xs  hover:bg-red-50">
              ✕ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PasswordStrengthView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-xs  text-[#121212] mb-1">
          Enter Password
        </label>
        <div className="relative">
          <input
            type="password"
            placeholder="Type password..."
            className="w-full px-3 py-2 border border-[#e5e7eb] bg-white text-xs  focus:outline-none pr-10"
          />
          <span className="absolute right-3 top-2.5 text-xs  text-[#666666] cursor-pointer">
            👁
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-[10px]  text-[#666666]">
          <span>Strength Indicator</span>
          <span className="font-semibold text-amber-600">Medium</span>
        </div>
        <div className="grid grid-cols-4 gap-1 h-1.5">
          <div className="bg-amber-500 h-full"></div>
          <div className="bg-amber-500 h-full"></div>
          <div className="bg-[#e5e7eb] h-full"></div>
          <div className="bg-[#e5e7eb] h-full"></div>
        </div>
      </div>

      <ul className="text-[11px]  text-[#666666] space-y-1 pl-4 list-disc">
        <li className="text-emerald-600">At least 8 characters long</li>
        <li className="text-emerald-600">Contains upper & lower case</li>
        <li>Contains numbers or symbols</li>
      </ul>
    </div>
  );
}

export function UnsavedChangesView() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 border border-[#e5e7eb] bg-white p-6">
      <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3">
        <span className="text-xs  font-semibold text-[#121212]">
          Profile Settings
        </span>
        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-[10px]  border border-amber-200">
          Unsaved Changes
        </span>
      </div>
      <div>
        <label className="block text-xs  text-[#666666] mb-1">Bio Note</label>
        <textarea
          rows={3}
          defaultValue="Editing text without saving..."
          className="w-full p-3 border border-[#e5e7eb] text-xs  focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center pt-2">
        <button className="text-xs  text-[#666666] hover:underline">
          Exit Without Saving
        </button>
        <button className="px-4 py-1.5 bg-[#222222] text-white text-xs ">
          Save Changes
        </button>
      </div>
    </div>
  );
}
