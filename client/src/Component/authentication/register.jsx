import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    
  });

  const handleChange = (eve) => {
    console.log(user);
    setUser({ ...user, [eve.target.name]: eve.target.value });
  };


  const PostData = async (e) => {
   
    e.preventDefault();

    const { name, email, password,phone } = user;
    const res = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone:phone,
        
      }),
    });

    const data = await res.json();

    if (data.status === 400 || !data || data.error) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Successfull Registration");
      console.log("Successfull Registration");
    }
    
  };



  return (
    <div>
      <Typography
        style={{ fontWeight: "700", margin: "5% auto" }}
        variant="h3"
        align="Center"
      >
        Register
      </Typography>
      <Card style={{ maxWidth: 400, margin: "5% auto", padding: "25px 6px" }}>
        <CardContent>
          <form>
            <Grid container spacing={2}>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  size="small"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
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
                  value={user.email}
                  onChange={handleChange}
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
        
              <Grid xs={12} item>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    required
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} item>
                <Button

                  sx={{ borderRadius: 6 }}
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={PostData}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Signup;
