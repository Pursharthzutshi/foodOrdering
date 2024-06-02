import React from "react";
import "../Register/SignUpPage.css"
import { Link, Navigate } from "react-router-dom";
import LogInPage from "./LogInPage";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpCredentials } from "./SignUpSlicer";

function SignUpPage({setShowUserSignedUp,setSignUpMessage}){

    const [name,setName] = useState("")
    const [emailID,setEmailID] = useState("")
    const [password,setPassword] = useState("")
    const [reCheckPassword,setReCheckPassword] = useState("")

    const [showErrorMsg,setShowErrorMsg] = useState("");


    const errorMsgStatus = useSelector((state)=>state.signup.errorMsgStatus);
    const navigateToMainPage = useSelector((state)=>state.signup.navigateToMainPage);

    const dispatch = useDispatch();


    const submitUserInfo = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:3001/Registration/signUp`,({name:name,emailID:emailID,password:password,reCheckPassword:reCheckPassword})).then((response)=>{
            console.log(response);
            if(response.data.message){
            setShowErrorMsg(response.data.message)
            dispatch(signUpCredentials(false))
        }else{
            setShowErrorMsg("")
            setShowUserSignedUp(true)
            dispatch(signUpCredentials(true))
        }
    })

    }

    return(
        <section className="sign-up-section">
            

            {
                navigateToMainPage && <Navigate to ="/orderNowPage"/>
            }
            <h3>Sign Up Page</h3>
            <h3>Sign Up Page</h3>

           <form onSubmit = {submitUserInfo}>
           
            <input onChange={(e)=>{setName(e.target.value)}} placeholder="Name" type="text"/>
            <input onChange={(e)=>{setEmailID(e.target.value)}} placeholder="Email Id" type="email"/>
            <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password"/>
            <input onChange={(e)=>{setReCheckPassword(e.target.value)}} placeholder="reCheckPassword" type="password"/>
           
            <button onClick={submitUserInfo}>Sign Up</button>
            <h3>OR</h3>
            {/* <LogInPage/> */}
            
            <Link className="log-in-button" to ="/orderNowPage">Log In</Link>

                {
                errorMsgStatus?<p className="error-msg">{showErrorMsg}</p>:null
                }

           </form>

        </section>
    )
}

export default SignUpPage;