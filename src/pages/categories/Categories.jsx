import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import MaterialTable from "material-table";
import tableIcons from "../../utils/tableIcons";
import "./categories.css";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { Field, Form, Formik, validateYupSchema } from "formik";
import * as Yup from "yup";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    // padding: theme.spacing(1),
  },
}));

const theme = createTheme();

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const tableColumns = [
  {
    title: "#",
    field: "serialNo",
    sorting: true,
    filtering: false,
  },
  {
    title: "Icon",
    field: "icon",
    sorting: false,
    filtering: false,
  },
  {
    title: "Thumbnail",
    field: "thumbnail",
    sorting: false,
    filtering: false,
  },
  {
    title: "Name",
    field: "name",
    sorting: true,
    filtering: false,
  },
  {
    title: "Action",
    field: "action",
    sorting: false,
    filtering: false,
  },
];
const categoryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter Category"),
  slug: Yup.string().required("Please enter Slug"),
  // icon: removeImageRequiredValidation
  // ? Yup.mixed().notRequired(): Yup.mixed()
  // .required("Please select a icon")
  // .test("fileType", "Unsupported file format", (value) => {
  //   if (!value) return true; // No file selected is fine
  //   return [
  //     "image/jpeg",
  //     "image/jpg",
  //     "image/png",
  //     "image/webp",
  //   ].includes(value.type);
  // }),
  // thumbnail: removeImageRequiredValidation
  //     ? Yup.mixed().notRequired():
  //       Yup.mixed()
  //         .required("Please select a thumbnail")
  //         .test("fileType", "Unsupported file format", (value) => {
  //           if (!value) return true; // No file selected is fine
  //           return [
  //             "image/jpeg",
  //             "image/jpg",
  //             "image/png",
  //             "image/webp",
  //           ].includes(value.type);
  //         }),
});
const Categories = () => {
  const [open, setOpen] = useState(false);

  // const [validationSchema, setValidationSchema] = useState(
  //   categoryValidationSchema(false)
  // )
  const handleAddCategory = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BreadCrumb page="Categories" />

      <div>
        <div className="d-flex justify-content-end ">
          <Button className="modalBtnStyle" onClick={handleAddCategory}>
            Add Category
          </Button>
        </div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Formik
            initialValues={{
              name: "",
              slug: "",
              icon: null,
              thumbnail: null,
            }}
            validationSchema={categoryValidationSchema}
            // onSubmit={handleSubmit}
          >
            {({ errors, onChange, handleChange, touched, values }) => (
              <Form>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  Modal title
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                  <Grid
                    container
                    justifyContent="center"
                    spacing={2}
                    sx={{ flexFlow: 1 }}
                  >
                    <Grid item xs={12} md={12}>
                      <Field
                        as={TextField}
                        size="small"
                        label="Category"
                        fullWidth
                        name="name"
                        // error={!!errors.name}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      {errors.name && touched.name ? (
                        <small className="error">{errors.name}</small>
                      ) : null}
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Field
                        as={TextField}
                        size="slug"
                        label="Slug"
                        fullWidth
                        name="name"
                        value={values.slug}
                        // error={!!errors.name}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      {errors.slug && touched.slug ? (
                        <small className="error">{errors.slug}</small>
                      ) : null}
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button className="categorieSubmitBtn" type="submit">
                    Submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </BootstrapDialog>
      </div>

      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Categories"
          icons={tableIcons}
          columns={tableColumns}
          //   data={editable}
          options={{
            sorting: true,
            search: true,
            searchFieldAlignment: "right",
            filtering: false,
            paging: true,
            // pageSizeOptions: createArrayWithBreakdowns(editable?.length, 5),
            pageSize: 5,
            paginationType: "stepped",
            showFirstLastPageButtons: true,
            paginationPosition: "bottom",
            exportButton: false,
            exportAllData: false,
            exportFileName: "Category data",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: false,
            showSelectAllCheckbox: false,
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default Categories;
