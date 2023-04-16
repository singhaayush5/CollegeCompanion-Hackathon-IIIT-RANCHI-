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
    <div>
      <TextField
        label="Enter Marks"
        type="number"
        value={currRef.current}
        onChange={handle}
      />
      <TextField
        label="Enter Marks"
        type="text"
        value={subRef.current}
        onChange={handlesub}
      />
    </div>
  );
};

export default GradePortal;
