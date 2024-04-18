import React from "react";

function Skeleton() {
  return (
    <div className=" bg-slate-100 m-4 h-72 w-80 flex-col border-2 border-white rounded-lg p-0 overflow-hidden hover:shadow-2xl ring-white">
      <div className="imgdiv  p-2  w-full h-2/5 overflow-hidden ">
        <div className="img h-full w-full bg-gray-400 animate-pulse "></div>
      </div>
      <div className="textCont h-3/5 flex p-2 px-4 flex-col justify-between bg-opacity-50  ">
        <div className="">
          <div className=" bg-gray-400 animate-pulse w-full h-4 rounded-xl mb-3"></div>
          <div className=" bg-gray-400 animate-pulse w-full h-3 rounded-xl mb-2"></div>
          <div className=" bg-gray-400 animate-pulse w-64 h-3 rounded-xl mb-2"></div>
          <div className=" bg-gray-400 animate-pulse w-40 h-3 rounded-xl mb-2"></div>
        </div>
        <div className="">
          <div className=" bg-gray-500 animate-pulse w-20 h-4 rounded-xl mb-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
