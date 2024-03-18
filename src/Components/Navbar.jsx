import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar({ toggleSidebar }) {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 drop-shadow-lg">
      <div className=" flex ">
        <div className="">
          <button className="text-white text-2xl z-20" onClick={toggleSidebar}>&#9776;</button>
        </div>

        <div className="text-white text-lg font-bold font-mono ml-3">Logo Name</div>
      </div>

      <div className="flex items-center sm:mr-5 mr-1">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded-lg mr-2"
        />
        <FaSearch className="text-white" />
      </div>
    </nav>
    // <nav className="navbar h-14 bg-gray-800 p-3 w-full flex items-center justify-between">
    //   <button className="sidebar-button cursor-pointer h-3 w-3 mb-4">☰</button>
    //   <div className="logo mr-36">Logo Name</div>
    //   <div className="search-container flex justify-between h-4">
    //     <input className=" rounded-lg h-6 mr-2" type="text" placeholder="Search..." />
    //     <FaSearch className="search-icon" />
    //   </div>
    // </nav>
  );
}

export default Navbar;
