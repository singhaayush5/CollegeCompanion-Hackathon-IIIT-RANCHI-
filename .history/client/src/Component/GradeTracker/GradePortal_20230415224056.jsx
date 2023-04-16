import React from "react";
import TextField from "@mui/material/TextField";
import useState from "react-usestateref";

const GradePortal = () => {
  const [curr, setcurr, currRef] = useState(0);
  const [sub, setsub, subRef] = useState("DSA");
  const handle = (e) => {
    setcurr(e.target.value);
  };
  const handlesub = (e) => {
    setsub(e.target.value);
  };
  return (
    <div className="flex flex-col m-5 p-5 bg-gray-200 h-96 justify-evenly items-center">
      <h2>Hey Welcome Anish</h2>
      <h4>Enter your grades for details</h4>
      <div className="flex justify-evenly items-center">
        <div className="ml-2 mr-2">
          <TextField
            label="Enter Subject"
            type="text"
            value={subRef.current}
            onChange={handlesub}
          />
        </div>
        <div className="ml-2 mr-2">
          <TextField
            label="Enter Marks"
            type="number"
            value={currRef.current}
            onChange={handle}
          />
        </div>
      </div>
    </div>
  );
};

export default GradePortal;
