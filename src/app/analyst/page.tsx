"use client"
import { BsCalendar2Date } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlinePermIdentity } from "react-icons/md";

import React from 'react'
import Chart from '@/components/Chart/Chart';
import TransactionCard from '@/components/TransactionCard/TransactionCard';
import AnalystCard from '@/components/AnalstCard/AnalystCard';

function page() {
  return (
    <div className="mt-[15vh]">

      <div className="md:h-[70px] w-[50px] h-[50px] absolute right-3 top-20  md:w-[70px] border-[1px] border-green-500 text-green-500 md:text-xl text-md flex items-center justify-center">
        +
        <span className="absolute text-[10px]  md:text-sm bottom-1 md:capitalize">
          add card
        </span>
      </div>

      <div className="p-3">
        <h2 className=" text-lg font-bold">Your Cards</h2>
        <span className="text-sm text-slate-400">
          Easily mentain your active and used cards
        </span>
      </div>

      <div className="flex flex-col md:flex-row lg:gap-3 ">
        <div className="relative w-full overflow-auto no-scrollbar md:w-4/12 lg:w-1/5 md:h-[85vh] md:border-r-[1px]  p-2 pb-4">
          <div className="flex md:flex-col gap-3">
            <AnalystCard />
            <AnalystCard />
            <AnalystCard />
            <AnalystCard />

            <div className="h-[70px] relative  w-[70px] border-[1px] border-green-500 text-green-500 md:text-xl text-md hidden md:flex items-center justify-center">
              +
              <span className="absolute text-[10px]  md:text-sm bottom-0 md:capitalize">
                add card
              </span>
            </div>
          </div>
        </div>
        <div className=" p-2 w-full md:w-8/12 lg:w-4/5 md:h-[85vh]  overflow-auto no-scrollbar ">
          <h2 className=" text-lg">
            Card <span className="text-sm text-slate-400">Information</span>
          </h2>
          <div className="p-3 bg-slate-100 flex gap-1 overflow-auto">
            <CardInfo Icon={<MdOutlinePermIdentity />} color="bg-green-200" title="Card hoilder" description="owusu"/>
            <CardInfo Icon={<BsCalendar2Date />} color="bg-blue-200" title="Availability" description="13 march, 2026"/>
            <CardInfo Icon={<IoMdCheckmark />} title="status" description="Active"/>
          </div>
          <div className="mt-6 ">
            <h2 className="text-lg text-black capitalize">
              money <span className="text-sm text-slate-400">Flow</span>
            </h2>
            <div className="h-[200px] md:h-[300px] w-full border-[1px]">
              <Chart />
            </div>
          </div>

          <div className="mt-4 border-[1px] ">
            <h2 className=" text-lg">
              Card <span className="text-sm text-slate-400">Information</span>
            </h2>
            <div className="mt-1  border-[1px]">
              <TransactionCard />
              <TransactionCard />
              <TransactionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page




function CardInfo({Icon,color,title, description}:{Icon  : React.ReactNode, color ? : string, title : string, description : string}) {
    return (
      <div className='border-[1px] w-[220px] shrink-0'>
        <div className='flex h-[45px] gap-2 items-center'>
          <span className={`block border-[1px]  w-1/5 h-full ${color} flex justify-center items-center text-lg`}>{Icon }</span>
                <div className='w-4/5 h-full pb-5'>
            <span className='text-slate-400 '>{title}</span>
                    <h5 className='text-md text-black block m-0 capitalize font-bold'>{description}</h5>
                </div>
        </div>
      </div>
    );
}


