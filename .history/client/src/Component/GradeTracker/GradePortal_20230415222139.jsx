import React from "react";
import TextField from "@mui/material/TextField";
import useState from "react-usestateref";

const GradePortal = () => {
  const [curr, setcurr, currRef] = useState(0);
  const handle = (e) => {
    setcurr(e.target.value);
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
        value={currRef.current}
        onChange={handle}
      />
    </div>
  );
};

export default GradePortal;
