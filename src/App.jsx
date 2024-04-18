import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Board from "./Components/Board";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [click, setClick] = useState(false);

  function handleSearch(query) {
    setSearchQuery(query);
  }

  function toggleSubmit(e) {
    setClick(!click);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className="  w-full overflow-hidden ">
      <Navbar
        toggleSidebar={toggleSidebar}
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setClick={setClick}
        click={click}
      />
      <Sidebar isOpen={sidebarOpen} />
      <div className=" overflow-x-auto h-screen w-full bg-gradient-to-l from-black via-blue-950 to-black ">
        <Routes>
          <Route
            path="/"
            element={
              <Board topic="Today" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Business"
            element={
              <Board topic="Business" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Entertainment"
            element={
              <Board
                topic="Entertainment"
                searchQuery={searchQuery}
                click={click}
              />
            }
          />
          <Route
            path="/General"
            element={
              <Board topic="General" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Health"
            element={
              <Board topic="Health" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Science"
            element={
              <Board topic="Science" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Sports"
            element={
              <Board topic="Sports" searchQuery={searchQuery} click={click} />
            }
          />
          <Route
            path="/Technology"
            element={
              <Board
                topic="Technology"
                searchQuery={searchQuery}
                click={click}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
