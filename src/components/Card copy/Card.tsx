"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function Card({ imgUrl, title, width,url }: { imgUrl: string, title: string, width: string,url:string }) {
  const Router = useRouter()
  const handleClick = () => {
    return Router.push(`/${url}`)
  }
  return (
    <div className={`relative w-full h-[300px] ${width} border-[1px] border-black`} onClick={handleClick}>
      <span className="absolute top-10 left-10 right-10 bottom-10 z-[2] bg-black/50 border-[1px] border-black/30  hover:bg-black/0"></span>
      <img src={imgUrl} alt="" className="w-full h-full" />
      <span className="absolute text-white w-full text-center bottom-2/4 text-lg uppercase z-20">
        {title}
      </span>
    </div>
  );
}

export default Card
