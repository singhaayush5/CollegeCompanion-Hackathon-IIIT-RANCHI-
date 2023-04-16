import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const [curr, setcur] = useState(0);
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
