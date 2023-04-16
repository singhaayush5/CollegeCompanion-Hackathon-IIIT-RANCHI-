import {
    CircularProgress,
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    ButtonGroup,
  } from "@mui/material";
  
  import { useState } from "react";
  
  const buttons = [
    <Button sx={{fontSize:"3vh", fontWeight:"900", borderRadius: 8 }} color="success">
      +
    </Button>,
    <Button sx={{ fontSize:"3vh", fontWeight:"900",borderRadius: 8 }} color="error">
      -
    </Button>,
  ];
  
  function AttendanceComp({values}) {
      console.log(values);
      
  
      // handlePresent = (eve) =>{
          
      // }
  
      const pct = (values.attd * 100)/(values.tot);
      console.log(pct);
  
  
  
    return (
      <>
      
        <Card sx={{ margin:"2% auto", padding: 2, display: "flex", justifyContent: "center" }}>
        <Box
            sx={{
              margin: " auto auto auto 1%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
          <Typography sx={{ margin: "auto auto auto 1%", fontWeight:"700", fontSize:"4vh" }} variant="h5">
            {values.subject}
          </Typography>
          <Typography sx={{ margin: "auto auto auto 1%", fontWeight:"600", fontSize:10 }} variant="h5">
            Attended : {values.attd}/{values.tot}
          </Typography>
  
          </Box>
  
          
  
          <Box
            sx={{
              margin: "auto 1% auto auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{ margin: "9% auto", position: "relative", display: "flex" }}
            >
              <CircularProgress
                color="success"
                variant="determinate"
                value={pct}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{fontWeight:600}}
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(pct)}%`}
                </Typography>
              </Box>
            </Box>
            <ButtonGroup
              size="small"
              sx={{ borderRadius: 8, margin: "auto auto auto auto" }}
              aria-label=" contained button group"
              variant="contained"
            >
              {buttons}
            </ButtonGroup>
          </Box>
        </Card>
      </>
    );
  }
  
  export default AttendanceComp;
  