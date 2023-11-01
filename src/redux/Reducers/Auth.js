import { createReducer } from "@reduxjs/toolkit";
const initialValues={
    loading: false,
    isAuthenticated: false, //if  isAuthenticated false means user not logdin if isAuthenticated true means user logdin
    user: null,
    error:null,
    isError:false,
    successMessage: null,
    isLogdin:false,
};

export const authReducer = createReducer(initialValues,{
    // Login form action
    loginRequest: (state,action)=>{
        state.loading= true;
        state.isAuthenticated= false;
    },
    loginSuccess: (state)=>{
        state.loading= false;
        state.isAuthenticated=true;
        state.isLogdin=true;
        state.success=true;
    },
    loginFail: (state,action)=>{
        state.loading=false;
        state.isAuthenticated=false;
        state.error= action.payload;
        state.isError= true;
    },
    // logoutRequest: (state)=>{
    //     state.loading = true;
    // },
    // logoutSuccess: (state)=>{
    //     state.loading = false;
    //     localStorage.removeItem("authToken");
    //     localStorage.removeItem("user");
    //     state.isAuthenticated = false;
    //     state.user = null;
    // },
    // logoutFail: (state)=> {
    //     state.loading = false;
    //     state.isAuthenticated = true;
    // },
    loadUserRequest: (state) => {
        state.loading = true;
      },
    
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      },
    
      loadUserFail: (state, action) => {
        state.loading = false;
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        state.isAuthenticated = false;
        state.user = null;
        state.isError=true;
      },
    
      clearErrors: (state) => {
        state.error = null;
        state.isError = false;
      },
})