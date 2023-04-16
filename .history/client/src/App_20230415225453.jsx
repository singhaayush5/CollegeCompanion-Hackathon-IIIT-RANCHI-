import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
import GradePortal from "./Component/GradeTracker/GradePortal";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Job />
      <GradePortal />
    </div>
  );
}

export default App;
