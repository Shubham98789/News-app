import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Navbar({ toggleSidebar, handleSearch, searchQuery, setSearchQuery, setClick ,click}) {

  function handleChange (e) {
    setSearchQuery(e.target.value);
  };

  function handleSubmit (e) {
    e.preventDefault();
    handleSearch(searchQuery);
    setClick(!click);
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 drop-shadow-lg z-50 fixed top-0 left-0 right-0 shadow-xl">
      <div className="flex">
        <div className="">
          <button className="text-white text-2xl z-20" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>

        <div className="text-white text-lg font-bold font-mono ml-3">
          Aap Tak
        </div>
      </div>

      <div className="flex items-center sm:mr-5 mr-1">
        <form onSubmit={handleSubmit} className="flex flex-grow">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-lg mr-2 w-full sm:w-auto"
            value={searchQuery}
            onChange={handleChange}
          />
          <button type="submit">
            <FaSearch className="text-white" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
