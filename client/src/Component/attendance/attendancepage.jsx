import { Box, Button, Modal, Grid, TextField, Card } from "@mui/material";
import AttendanceComp from "./attendancecomp";
import { useState } from "react";

const att = {
  subject: "Mathematics",
  attd: 43,
  tot: 45,
};

function AttendancePage() {
  const [newBookOpen, setNewBookOpen] = useState(false);

  const [subject, setSubject] = useState({
    subName : "",
    presentDays : 0,
    totalDays : 0
  });


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <AttendanceComp values={att} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => {
            setNewBookOpen(!newBookOpen);
          }}
          sx={{ margin: "auto", borderRadius: 6 }}
          variant="contained"
        >
          Add Subject
        </Button>
      </Box>
      
      <Modal keepMounted
        open={newBookOpen}
        onClose={() => setNewBookOpen(!newBookOpen)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
            <form>
            <Box sx={{display: "flex", justifyContent: "center", margin: "10% auto"}}>
            <Card sx={{backgroundColor:"white", width:500, padding: "3%",  borderRadius: 3}}>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  name="phno"
                  label="Phone No."
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              
              <Grid xs={12} item>
                <Button

                  sx={{ borderRadius: 6 }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            </Card>
            </Box>
            
            
          </form>
        </Modal>
    </>
  );
}

export default AttendancePage;
