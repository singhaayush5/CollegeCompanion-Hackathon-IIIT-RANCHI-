import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useState from "react-usestateref";
const GradePortal = () => {
  const [curr, setcurr, currRef] = useState(0);
  const [sub, setsub, subRef] = useState("DSA");
  const [name, setname, nameRef] = useState("Anish");
  const [email, setemail, emailRef] = useState("anishkumarsingh45@gmail.com");
  const handle = (e) => {
    setcurr(e.target.value);
  };
  const handlesub = (e) => {
    setsub(e.target.value);
  };
  const PostGrade = async (e) => {
    e.preventDefault();
    const res = await fetch("/gradepost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data.status === 400 || !data || data.error) {
      Swal.fire({
        title: "Bad Credentials",
        text: "Please enter valid details",
        icon: "error",
        confirmButtonText: "Retry",
      });
    } else {
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        timer: 1000,
      });
      console.log("Successfully Logged In");
      setTimeout(() => {
        navigate("/tlogin");
      }, 1500);
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
      <Button variant="outlined" onClick={postGrade}>
        Submit Grades
      </Button>
    </div>
  );
};

export default GradePortal;
