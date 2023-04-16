import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
import GradePortal from "./Component/GradeTracker/GradePortal";

function App() {
  return (
    <div className="App">
      {/* <Job /> */}
      <GradePortal />
    </div>
  );
}

export default App;
