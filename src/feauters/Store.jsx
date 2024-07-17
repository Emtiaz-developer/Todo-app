import { configureStore } from "@reduxjs/toolkit";
import TaskViewSlice from "./TaskViewSlice";

const store = configureStore({
    reducer:{
        Tasks : TaskViewSlice
    }
})

export default store;