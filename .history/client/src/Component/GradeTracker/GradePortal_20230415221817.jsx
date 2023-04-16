import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useStateRef from "react-usestateref";

const [curr, setcurr] = useState(0);
const GradePortal = () => {
  return (
    <div>
      <TextField
        label="Enter a number"
        type="number"
        value={value}
        // onChange={handleInputChange}
      />
    </div>
  );
};

export default GradePortal;
