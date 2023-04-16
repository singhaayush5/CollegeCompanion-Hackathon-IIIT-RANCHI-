import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
import Navbar from "./Component/Navbar";
import GradePortal from "./Component/GradeTracker/GradePortal";
import AttendancePage from "./Component/attendance/attendancepage";
import Login from "./Component/authentication/login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signup from "./Component/authentication/register";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="job" element={<Job />}></Route>
        <Route path="grade" element={<GradePortal />}></Route>
      </Route>
    )
  );
        <Route path="user">
          <Route path="login" element={<Login/>}></Route>
          <Route path="register" element={<Signup/>}></Route>
          <Route path=":id">
            <Route path="attendance" element={<AttendancePage/>}></Route>
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;