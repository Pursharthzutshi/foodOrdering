import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    emailPassword:"",
}

export const loginPasswordSlicer =  createSlice({
    name:"login",
    initialState,
    reducers:{
        setEmailPassword:(state,action)=>{
            state.emailPassword = action.payload
        }
    }
})


export const {setEmailPassword} = loginPasswordSlicer.actions;


export default loginPasswordSlicer.reducer
