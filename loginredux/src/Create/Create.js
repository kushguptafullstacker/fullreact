import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../Createslice/Slice';

export const Createstore = configureStore({
    reducer: {
        login: loginReducer, 
    },
});
