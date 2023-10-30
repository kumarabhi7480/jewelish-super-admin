import { createReducer } from "@reduxjs/toolkit";
const initialValues={
    loading: false,
    isAuthenticated: false,
    user: null,
    error:null,
    successMessage: null,
    isLogdin:false,
};

export const authReducer = createReducer(initialValues,{
    // Login form action
    loginRequest: (state,action)=>{
        state.loading= true;
        state.isAuthenticated= false;
        state.error=action.payload;
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
    },
    logoutRequest: (state)=>{
        state.loading = true;
    },
    logoutSuccess: (state)=>{
        state.loading = false;
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        state.isAuthenticated = false;
        state.user = null;
    },
    logoutFail: (state)=> {
        state.loading = false;
        state.isAuthenticated = true;
    }
})