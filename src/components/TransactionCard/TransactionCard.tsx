import React from "react";

export default function TransactionCard() {
  return (
    <div className="overflow-auto  p-0 m-0">
      <div className="w-[500px] md:w-full pe-2 my-2 shrink-0">
        <div className=" flex justify-between items-center flex-nowrap text-black text-md  gap-2">
          <span className="w-[40px] h-[40px] bg-orange-200 rounded-full block shrink-0"></span>
          <span className="block shrink-0">Transportation</span>
          <span className="block shrink-0">13-04-24</span>
          <span className="block h-[10px] w-[100px] bg-gray-200 shrink-0">
            <span className="block w-3/5 bg-orange-200 h-full"></span>
          </span>
          <span className="block shrink-0">$400</span>
        </div>
      </div>
    </div>
  );
}
