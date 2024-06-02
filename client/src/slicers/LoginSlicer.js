import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    test:false,
    showLogOutButton:false,
    showUserLoggedIn:false,
    MyOrderButton:false,
    loginErrorMessageBox:false,
    welcomeBackMessageTimeInterval:false,    
}

export const LoginSlicer =  createSlice({
    name:"login",
    initialState,
    reducers:{
        loginCredentials:(state,action)=>{
            state.test = action.payload
            if(state.test == true){
                state.showLogOutButton = true
                state.showUserLoggedIn = true
                state.MyOrderButton = true
                state.loginErrorMessageBox = false
                state.welcomeBackMessageTimeInterval = true
            }else{
                state.showLogOutButton = false
                state.showUserLoggedIn = false
                state.MyOrderButton = false
                state.loginErrorMessageBox = true
                state.welcomeBackMessageTimeInterval = false
            }
        }

    }
})



export const {loginCredentials} = LoginSlicer.actions;


export default LoginSlicer.reducer
