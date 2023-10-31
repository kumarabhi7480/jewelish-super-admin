import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
const ForGotPassword = () => {
  const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter email"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
      } catch (error) {}
    },
  });
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
          <form onSubmit={formik.handleSubmit}>
            <Card style={{ width: "350px" }}>
              <Typography variant="h6" sx={{ p: 1.5 }}>
                Forgot Password
              </Typography>
              <hr />

              <Grid item xs={12} sx={{ p: 1.5 }}>
                <TextField
                  label="Please Enter Email"
                  id="outlined-size-small"
                  defaultValue=""
                  size="small"
                  fullWidth={true}
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email ? (
                  <small className="error">{formik.errors.email}</small>
                ) : null}
              </Grid>
              <Grid item xs={12} sx={{ p: 1.5 }}>
                <Button
                  type="submit"
                  fullWidth
                  sx={{ backgroundColor: "#04395e", color: "white", mb: 1 }}
                >
                  SEND EMAIL
                </Button>
                <NavLink
                  to="/login"
                  style={{ display: "block", textAlign: "right" }}
                  className={"text-decoration-none"}
                >
                  Login
                </NavLink>
                {/* <small
                  className={`text-center d-block ${
                    isSuccess ? "success" : "error"
                  }`}
                >
                  {isSuccess ? successMessage : isError ? error : ""}
                </small> */}
              </Grid>
            </Card>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default ForGotPassword;
