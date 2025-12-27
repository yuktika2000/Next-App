"use client";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import FiltersBar from "@/components/FiltersBar";
import Timeline from "@/components/Timeline/Timeline";

export default function Portfolio() {
  const tabs = [
    "Active Portfolio Summary",
    "Portfolio Details",
    "Cashflow Timeline",
    "Add Bonds",
  ];

  const [activeTab, setActiveTab] = useState("Cashflow Timeline");

  return (
  <div className="">
  <div className="relative flex justify-between">
  
  {/* gray base line */}
  <div className="absolute bottom-0 left-0 h-[3.5px] w-full bg-[#e1e6e8]" />

  <div className="flex gap-10">
    {tabs.map((tab) => (
      <div
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative pb-2 cursor-pointer text-md
          ${tab === activeTab ? "text-[#002C59]" : "text-[#666666]"}
        `}
      >
        {tab === "Add Bonds" ? (
          <div className="flex items-center gap-2 text-[#ef4822]">
            <PlusIcon className="h-5 w-5 bg-[#ef4822] text-white rounded-xs p-0.5" />
            <span>{tab}</span>
          </div>
        ) : (
          tab
        )}

        {tab === activeTab && (
          <span className="absolute left-0 bottom-0 h-[3.5px] w-full bg-[#002C59]" />
        )}
      </div>
    ))}
  </div>

  <div>Matured Bonds</div>
</div>
<FiltersBar/>
<Timeline/>
  </div>

  );
}
