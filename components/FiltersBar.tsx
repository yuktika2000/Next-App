"use client";

import { Calendar } from "lucide-react";

export default function FiltersBar() {
  return (
    <div className="flex justify-between items-center mt-6">

      {/* Left: Dropdown (UNCHANGED) */}
      <select
        className="border border-[#e1e6e8] rounded-md
                   px-4 h-[40px] w-[260px]
                    text-[#333]
                   focus:outline-none"
      >
        <option>All Bond Types</option>
        <option>Corporate Bonds</option>
        <option>Government Bonds</option>
        <option>Tax-Free Bonds</option>
      </select>

      {/* Right: Date range (MATCHES IMAGE) */}
      <div className="flex items-center gap-6  text-[#555]">
        <span className="font-semibold">View Between Date Range</span>

        {/* From Date */}
        <div className="relative">
          <input
            type="text"
            placeholder="From Date"
            className="border border-[#e1e6e8] rounded-md
                       pl-4 pr-10 h-[40px] w-[170px]
                        text-[#666]
                       placeholder:text-[#999]
                       focus:outline-none"
          />
          <Calendar
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888]"
          />
        </div>

        {/* To Date */}
        <div className="relative">
          <input
            type="text"
            placeholder="To Date"
            className="border border-[#e1e6e8] rounded-md
                       pl-4 pr-10 h-[40px] w-[170px]
                        text-[#666]
                       placeholder:text-[#999]
                       focus:outline-none"
          />
          <Calendar
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888]"
          />
        </div>
      </div>
    </div>
  );
}
