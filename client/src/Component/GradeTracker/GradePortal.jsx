import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useState from "react-usestateref";
import React, { useEffect } from "react";
import { useState } from "react";


const [userData, setUserData] = useState({});

const calldata = async () => {
  try {
    const res = await fetch("/login", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    props.setUserData(data);
    if (!res.status === 200) {
      const error = new Error(res.error);
      // navigate("/tlogin");
      throw error;
    }
  } catch (err) {
    console.log(err);
    navigate("/loginteach");
  }
};

useEffect(() => {
  calldata();
}, []);


const GradePortal = () => {
  const [Student, setStudent] = useState({
    name: "Tanish",
    email: "tanishkumar25@gmail.com",
    subject: "DSA",
    marks: 0,
  });
  let name, value;
  const handle = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setStudent({ ...Student, [name]: value });
  };
  const PostGrade = async (e) => {
    console.log(Student);
    e.preventDefault();
    const { name, email, subject, marks } = Student;
    const subObj = {
      subject,
      marks,
    };
    const res = await fetch("http://localhost:3000/gradepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subObj,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === 400 || !data || data.error) {
      window.alert("Grade Successful");
    } else {
      window.alert("Grade Failed");
    }
  };
  return (
    <div className="flex flex-col m-5 p-5 bg-gray-200 h-96 justify-evenly items-center">
      <div>
        <h2 className="text-semibold text-2xl">Hey Welcome TAnish</h2>
        <h6>Enter your grades for details</h6>
      </div>
      <div className="flex justify-around items-center">
        <div className="">
          <TextField
            name="subject"
            label="Enter Subject"
            type="text"
            value={Student.subject}
            onChange={handle}
          />
        </div>
        <div className="">
          <TextField
            label="Enter Marks"
            type="number"
            name="marks"
            value={Student.marks}
            onChange={handle}
          />
        </div>
      </div>
      <Button variant="outlined" onClick={PostGrade}>
        Submit Grades
      </Button>
    </div>
  );
};

export default GradePortal;
