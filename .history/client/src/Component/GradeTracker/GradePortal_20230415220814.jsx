import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
const GradePortal = () => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Physics"}>Physics</MenuItem>
          <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
          <MenuItem value={Mathematics}>Mathematics</MenuItem>
          <MenuItem value={ComputerScience}>ComputerScience</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default GradePortal;
