"use client";
import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import Scene from "../Canvas/Canvas";
// @ts-ignore
import BIRDS from "vanta/dist/vanta.net.min";

export default function Hero() {
  return (
    <>
      <div
        style={{ background: 0x0, position: "relative", overflow: "hidden" }}
        className="h-[60vh] w-screen"
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "30vh",
            right: 0,
            display: "block",
          }}

          className="!z-10"
        >
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              background: "transparent",
              overflow: "hidden",
              height: "100%",
              perspective: "800px",
            }}
          >
            <h1 className="text-xl text-white">REAL-TIME RECOGNITION</h1>
          </div>
        </div>
        {/* <div className="absolute top-[20vh] w-full z-10 text-white">
          <Scene />
        </div> */}
        <span className="absolute top-8 right-8 border-[1px] w-[20px] h-[20px] block border-white z-10"></span>

       
        <div className="bg-black h-[60vh] absolute top-0 left-0 bottom-0 right-0">
          <div className="flex justify-center pt-[20vh]">
            <Scene />
          </div>
        </div>
      </div>
      {/* <div className="bg-black h-[60vh]">
        <div className="absolute top-[20vh] z-10 text-white">
          <Scene />
        </div>
      </div> */}
    </>
  );
}
