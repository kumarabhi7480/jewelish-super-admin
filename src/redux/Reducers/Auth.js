import { createReducer } from "@reduxjs/toolkit";
const initialValues={
    loading: false,
    isAuthenticated: false,
    user: null,
    error:null,
    successMessage: null,
};

export const authReducer = createReducer(initialValues,{
    // Login form action
    loginRequest: (state)=>{
        state.loading= true;
        state.isAuthenticated= false;
    },
    loginSuccess: (state)=>{
        state.loading= false;
        state.isAuthenticated=true;
    },
    // loginFail: (state)=>{
    //     state.loading=false;
    //     state.isAuthenticated=false;
    //     state.error= action.payload;
    // }
})