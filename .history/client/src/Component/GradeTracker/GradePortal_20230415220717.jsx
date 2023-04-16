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
          <MenuItem value={English}>Ten</MenuItem>
          <MenuItem value={Physics}>Ten</MenuItem>
          <MenuItem value={Chemistry}>Ten</MenuItem>
          <MenuItem value={Mathematics}>Twenty</MenuItem>
          <MenuItem value={Computer}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default GradePortal;
