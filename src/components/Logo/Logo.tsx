"use client"
import React from 'react'
import { usePathname,useRouter } from 'next/navigation';
import Scene from '../Canvas/Canvas';

function Logo() {
  const Router = usePathname().split("/")
  const navigate = useRouter()

  const resToClick = () => {
    return navigate.push("/")
  }
  return (
    <div
      className="round-50 absolute top-4 left-1 md:top-8 w-[80px] h-[80px] md:w-[110px] md:h-[110px]"
      style={{ zIndex: 5 }}
      onClick={resToClick}
    >
      {Router[1] ? (
          <Scene />
      ) : (
        <img
          src="/istockphoto-1197070997-612x612-removebg-preview.png"
          alt=""
          className="w-auto h-auto"
        />
      )}
    </div>
  );
}

export default Logo
















