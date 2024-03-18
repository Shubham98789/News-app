import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Board from "./Components/Board";
import { Route, Routes } from "react-router-dom";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }
  return (
    <div className=" h-full w-full ">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} />

      <Routes>
        <Route path="/" element={<Board topic="Today" />} />
        <Route path="/Business" element={<Board topic="Business" />} />
        <Route path="/Entertainment" element={<Board topic="Entertainment" />}/>
        <Route path="/General" element={<Board topic="General" />} />
        <Route path="/Health" element={<Board topic="Health" />} />
        <Route path="/Science" element={<Board topic="Science" />} />
        <Route path="/Sports" element={<Board topic="Sports" />} />
        <Route path="/Technology" element={<Board topic="Technology" />} />
      </Routes>
    </div>
  );
}

export default App;
