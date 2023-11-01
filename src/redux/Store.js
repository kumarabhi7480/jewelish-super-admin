import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/Auth";
import { sideBarReducer } from "./Reducers/SideBar";


const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sideBarReducer,
    }
})

export default store;