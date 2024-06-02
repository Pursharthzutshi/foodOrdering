import React from "react";
import headerLogoDiv from "../../../images/burger.png"
import { BrowserRouter as Router,Link} from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginCredentials } from "../../../slicers/LoginSlicer";
import { setEmailId } from "../../../slicers/loginEmailIdSlicer";
import { setEmailPassword } from "../../../slicers/loginPasswordSlicer";

function Navbar({size,setShowCartPaymentPage,loggedInButtonState,setCart,viewOrdersPageDetails}){

    const showLogOutButton = useSelector((state)=>state.login.showLogOutButton)

    // const emailId = useSelector(state=>state.loginSlicer.emailId)
    // const emailPassword = useSelector(state=>state.passwordSlicer.emailPassword)
    const dispatch = useDispatch();

    const logOutSession = () =>{
         axios.get("http://localhost:3001/Registration/logout").then((res)=>{
         console.log(res)
              
    })    

    setCart([])

    localStorage.setItem("loggedInEmailID",null)
    localStorage.setItem("showLogOutButton","false")
    dispatch(loginCredentials(false));
    loggedInButtonState = JSON.parse(localStorage.getItem("showLogOutButton")) 
    dispatch(setEmailId(""))
    dispatch(setEmailPassword(""))   
    }

    return(
        <nav className="header-nav-bar">
        <ul className="header-nav-bar-links-div">

        <Link className="header-logo-div" to = "/">
        <img src={headerLogoDiv}/>
       <h3>TasteBuds Delight</h3>
       </Link>
        </ul>
        <div className="header-nav-button-container">
             
            {
            showLogOutButton && 
            <div className="cart-logout-button-div">
                <Link onClick={viewOrdersPageDetails} className="order-button" to ="/orderPurchasedPage">Order</Link>
            <Link className="cart-button" onClick={()=>{setShowCartPaymentPage(true)}} to ="/paymentCartPage">Cart {size}</Link> 
             <Link to="/" onClick={logOutSession}  className="log-out-button">Log Out</Link>
            </div>
            }

        </div>
    </nav>
    )
}

export default Navbar