import { useRef } from "react";

export default function AdminDateInput({ label }) {
  const inputRef = useRef(null);
  return (
    <label>
      <span className="text-[#FEF8FD] font-medium">{label}</span>
      <div className="bg-[#F5E79E] py-2 px-3 mt-1 rounded-sm flex items-center gap-x-3">
        <input
          ref={inputRef}
          type="date"
          placeholder="DD/MM/YYYY"
          className="bg-transparent outline-0 w-30"
        />
      </div>
    </label>
  );
}
