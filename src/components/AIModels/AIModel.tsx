import React from 'react'

function AIModel({title,imgUrl,time}:{title:string,imgUrl:string, time:string}) {
  return (
    <div className="w-[120px] h-[120px] relative">
      <span className="block relative h-[100px] w-[100px]">
        <img
          src={imgUrl}
          alt={imgUrl}
          className="w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            animation: `rotateModel ${time}s infinite linear`,
          }}
        />
        <style>
          {`
          @keyframes rotateModel {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotatey(360deg);
            }
          }
        `}
        </style>
      </span>
      <span className="block">{title}</span>
    </div>
  );
}


function SideBar() {
    return (
      <div className="fixed flex gap-2 flex-col justify-evenly  right-1 top-3 bottom-14 z-[20]">
        <AIModel
                title=""
                time='200'
          imgUrl="istockphoto-1197070997-612x612-removebg-preview.png"
        />
        <AIModel title="" imgUrl="istockphoto-1432931039-612x612.jpg"  time='180'/>
        <AIModel title="" imgUrl="istockphoto-1438569629-170667a.webp" time="150"/>
      </div>
    );
}


export default SideBar;

