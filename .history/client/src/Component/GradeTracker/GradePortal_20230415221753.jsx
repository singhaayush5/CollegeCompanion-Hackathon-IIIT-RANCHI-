import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import useStateRef from "react-usestateref";

useStateRef;
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
