import React from 'react'

function page() {
  return (
    <div className="flex gap-2 flex-col md:flex-row flex-evenly">
      <span className="absolute top-8 right-8 border-[1px] w-[20px] h-[20px] block border-black"></span>
      <div className="w-full md:w-2/5 lg:w-1/4 border-[1px] flex flex-col-reverse md:block">
        <div className="  w-4/5 h-[350px] md:w-[250px] md:h-[350px] md:mt-60 lg:mt-40 mt-3 md:ml-5 mx-auto relative border-[1px] border-black">
          <span className="absolute top-10 left-10 right-10 bottom-10 z-[2] bg-black/50 border-[1px] border-black/30  hover:bg-black/0"></span>

          <img
            src="istockphoto-1496672997-612x612.jpg"
            className="w-full h-full"
          />
        </div>

        <span className="uppercase block md:ml-5 mx-auto mt-[6.5rem] lg:mt-2 md:mt-8 text-green-500 w-4/5 md:w-[250px] text-lg">
          you are a step away to verify your identity from your id
        </span>
      </div>

      <div className="border-[1px] md:w-3/5 lg:w-3/4 w-full  md:mt-40 py-2">
        <div className="w-4/5 h-[350px] border-[1px] border-black/35 mx-auto flex justify-center items-center">
          <span className="block hover:mouse-pointer capitalize">scan</span>
        </div>
        <div className="w-4/5 h-[350px] border-[1px] border-black/35 mx-auto mt-10 flex justify-center items-center flex-col ">
          <span className="block hover:mouse-pointer">.....</span>

          <span className="block hover:mouse-pointer text-green-400 capitalize">
            upload id
          </span>
        </div>
      </div>
    </div>
  );
}

export default page
