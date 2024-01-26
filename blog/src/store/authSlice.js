import {createSlice}  from "@reduxjs/toolkit";

const initialState={
    state: false,
    userData : null
}

const authSlice= createSlice({
    name : "auth",
    initialState,
    reducers: {
        login : (state, action)=> {
            state.status = true;
            state.userData = action.playload.userdata
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }

    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer;