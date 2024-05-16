import React from "react";
import { HiSignal } from "react-icons/hi2";

export default function AnalystCard() {
  return (
    <div className="w-[220px] h-[120px] lg:h-[150px] md:w-full border-[1px] border-black  shrink-0 overflow-hidden lg:relative">
      <div className="p-2 pt-1">
        <h3 className="text-[18px]  text-black pb-2 capitalize font-medium">
          card Name
        </h3>
        <span className="text-sm block lg:mt-4">123-456-789-1099</span>
        <span className="text-slate-400 text-sm block">owner name</span>
      </div>

      <div className="flex py-1 justify-between items-center px-2 border-[1px] lg:absolute lg:bottom-0 left-0 right-0">
        <span className="text-[16px] font-medium">$700</span>
        <HiSignal className="font-medium text-lg" />{" "}
      </div>
    </div>
  );
}
