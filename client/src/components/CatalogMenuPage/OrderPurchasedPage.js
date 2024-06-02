import React, { useEffect, useState } from "react";
import axios from "axios"
import OrderPurchasedPageDetails from "./OrderPurchasedPageDetails";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function OrderPurchasedPage({orderLoggedInEmailID,viewOrdersPageDetails}){

    const [emailID,setEmailId] = useState("");
    const [orderDetails,setOrderDetails] = useState([])
    const [showOrder,setShowOrder] = useState(false)

    // const emailID = useSelector((state)=>state.loginEmailId.emailID)
    // console.log(emailID)
 
    useEffect(()=>{
        setEmailId(localStorage.getItem(("loggedInEmailID")))
    })

                viewOrdersPageDetails = axios.post(`http://localhost:3001/FetchOrders/fetchOrderPurchasedData`,{emailID:emailID}).then((res)=>{
                    
                if(res.data.data){
                        console.log(emailID)
                        setShowOrder(true);
                        setOrderDetails(res.data.data)
                   }else {
                       setShowOrder(false);
                       setOrderDetails("Please Sign In First, Go back to Home Page")
                   }
            
               })    
 
    return(
    <div>
        <h4>asdasd</h4>
        <h4>My Orders</h4>

{
showOrder?
orderDetails.map((val)=>{
    return  <OrderPurchasedPageDetails  val={val}/>
})
:<p>{orderDetails}<Link to="/"/></p>

}
    </div>
    )
        
}

export default OrderPurchasedPage