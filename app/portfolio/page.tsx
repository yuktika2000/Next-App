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
    <div className="relative z-0 px-4">
      {/* TAB BAR */}
      <div className="sticky top-0 z-[100] bg-white h-16 overflow-hidden flex items-end justify-between relative">
        {/* gray base line */}
        <div className="absolute bottom-0 left-0 h-[3.5px] w-full bg-[#e1e6e8]" />

        <div className="flex gap-10 pb-2">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative cursor-pointer text-md font-semibold
                ${tab === activeTab ? "text-[#002C59]" : "text-[#666666]"}
              `}
            >
              {tab === "Add Bonds" ? (
                <div className="flex items-center gap-2 text-[#ef4822] font-semibold">
                  <PlusIcon className="h-5 w-5 bg-[#ef4822] text-white p-0.5" />
                  <span>{tab}</span>
                </div>
              ) : (
                tab
              )}

              {tab === activeTab && (
                <span className="absolute -bottom-2 left-0 h-[3.5px] w-full bg-[#002C59]" />
              )}
            </div>
          ))}
        </div>

        <div className="pb-2 font-semibold text-[#666666]">Matured Bonds</div>
      </div>

      <div className="relative z-10">
        <FiltersBar />
        <Timeline />
      </div>
    </div>
  );
}
