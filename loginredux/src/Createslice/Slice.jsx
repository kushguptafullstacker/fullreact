import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    pass: "",
};

export const Loginslice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setPass: (state, action) => {  
            state.pass = action.payload;
        },
    }
});

export const { setUser, setPass } = Loginslice.actions;
export default Loginslice.reducer;
