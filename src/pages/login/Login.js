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
import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/Actions/Auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const {} = useSelector()
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const dispatch = useDispatch()
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter email"),
    password: Yup.string().required("Please enter password"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      // console.log(values);
      dispatch(login(values));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  defaultValue={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="error">{formik.errors.email}</small>
                ) : null}
              </Grid>
              <Grid item xs={12} sx={{ p: 1.5, pt: 0 }}>
                <TextField
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  size="small"
                  fullWidth={true}
                  onChange={formik.handleChange}
                  defaultValue={formik.values.password}
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
                {formik.errors.password && formik.touched.password ? (
                  <small className="error">{formik.errors.password}</small>
                ) : null}
              </Grid>
              <Grid item xs={12} sx={{ p: 1.5 }}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{ backgroundColor: "#04395e", color: "white", mb: 1 }}
                >
                  SIGN IN
                </Button>
                <NavLink
                  to="#"
                  style={{
                    display: "block",
                    textAlign: "right",
                    background: "none",
                  }}
                  className={"text-decoration-none"}
                >
                  Forget Password ?
                </NavLink>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Login;
