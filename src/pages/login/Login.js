import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          item
        >
          <Card style={{ width: "350px" }}>
            <Typography variant="h6" sx={{ p: 1.5 }}>
              Login
            </Typography>
            <hr />
            <Grid item xs={12} sx={{ p: 1.5 }}>
              <TextField
                label="User Name"
                name="email"
                id="outline-size-small"
                size="small"
                fullWidth={true}
              />
            </Grid>
            <Grid item xs={12} sx={{ p: 1.5, pt: 0 }}>
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                size="small"
                fullWidth={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password"
              />
            </Grid>
            <Grid item xs={12} sx={{p:1.5}}>
                <Button type="submit" fullWidth sx={{backgroundColor: "#04395e", color: "white", mb:1 }}>
                    SIGN IN
                </Button>
                <NavLink to="#" style={{display: "block", textAlign: "right", background:"none"}} className={"text-decoration-none"}>
                    Forget Password ?
                </NavLink>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
