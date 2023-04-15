import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./Component/JobPortal/JobPortal";
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