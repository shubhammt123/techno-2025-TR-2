import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        auth : false,
        role : null
    },
    reducers : {
        login : ()=>{},
        logout : ()=>{}
    }
})

export const {login , logout} = authSlice.actions;
export default authSlice.reducer;