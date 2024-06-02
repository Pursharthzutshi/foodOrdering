import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpState:"",
    signUpMessage:false,
    errorMsgStatus:false,
    navigateToMainPage:false,
}

export const SignUpSlicer = createSlice({
    name:"signup",
    initialState,
    reducers:{
        signUpCredentials:(state,action)=>{
            if(action.payload == true){
                state.signUpMessage = true;
                state.errorMsgStatus = false;
                state.navigateToMainPage = true;
            }else{
                state.setErrorMessages = true;
                state.errorMsgStatus = true;
                state.navigateToMainPage = false; 
            }
        }
    }
})


export const {signUpCredentials} = SignUpSlicer.actions;


export default SignUpSlicer.reducer;