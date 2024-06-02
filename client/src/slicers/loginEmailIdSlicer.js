import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    emailId:"",
    savedEmailID:""
}

export const loginEmailIdSlicer =  createSlice({
    name:"login",
    initialState,
    reducers:{
        setEmailId:(state,action)=>{
            state.emailId = action.payload
        },
        savedEmailID:(state,action)=>{
            state.savedEmailID = localStorage.getItem(("loggedInEmailID"))
        }
    }
})



export const {setEmailId} = loginEmailIdSlicer.actions;


export default loginEmailIdSlicer.reducer
