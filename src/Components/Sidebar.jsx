import React from "react";
import { Link } from "react-router-dom";


function Sidebar({ isOpen }) {
  return isOpen ? (
    <div className="bg-black w-full sm:w-72  h-full fixed top-0 left-0 overflow-y-auto shadow-2xl z-90 mt-16">
      <ul className="py-4 flex items-center flex-col text-lg mt-3">
        <Link to="/"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Home</li></Link>
        <Link to="/Business"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Business</li></Link>
        <Link to="/Entertainment"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Entertainment</li></Link>
        <Link to="/General"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">General</li></Link>
        <Link to="/Health"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Health</li></Link>
        <Link to="/Science"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Science</li></Link>
        <Link to="/Sports"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Sports</li></Link>
        <Link to="/Technology"><li className=" text-slate-300 py-2 font-semibold hover:text-white cursor-pointer">Technology</li></Link>
      </ul>
    </div>
  ) : (
    ""
  );
}

export default Sidebar;


