import React from "react";
import TextField from "@mui/material/TextField";
import useState from "react-usestateref";

const GradePortal = () => {
  const [curr, setcurr, currRef] = useState(0);
  return (
    <div>
      <TextField
        label="Enter a number"
        type="number"
        value={currRef.current}
        // onChange={handleInputChange}
      />
    </div>
  );
};

export default GradePortal;
