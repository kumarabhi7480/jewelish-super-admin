import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,
}

export const sideBarReducer = createReducer(initialState,{
    setIsOpen: (state,action)=>{
        state.isOpen = action.payload;
    }
})