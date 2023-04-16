import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useState from "react-usestateref";
const GradePortal = () => {
  const [Student, setStudent] = useState({
    name: "Anish",
    email: "anishkumarsingh45@gmail.com",
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
    e.preventDefault();
    const res = await fetch("/gradepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        marks,
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
        <h2 className="text-semibold text-2xl">Hey Welcome Anish</h2>
        <h6>Enter your grades for details</h6>
      </div>
      <div className="flex justify-around items-center">
        <div className="">
          <TextField
            label="Enter Subject"
            type="text"
            value={subRef.current}
            onChange={handlesub}
          />
        </div>
        <div className="">
          <TextField
            label="Enter Marks"
            type="number"
            value={currRef.current}
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
