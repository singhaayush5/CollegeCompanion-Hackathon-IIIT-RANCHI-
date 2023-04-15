import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const GradePortal = () => {
  return (
    <div>
      <TextField
        label="Enter a number"
        type="number"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default GradePortal;
