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
    <div className="flex p-2 bg-gray-400">
      <div className="m-2 p-2">
        <TextField
          label="Enter Marks"
          type="number"
          value={currRef.current}
          onChange={handle}
        />
      </div>
      <div className="m-2 p-2">
        <TextField
          label="Enter Subject"
          type="text"
          value={subRef.current}
          onChange={handlesub}
        />
      </div>
    </div>
  );
};

export default GradePortal;
