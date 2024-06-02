// import { createSlice } from "@reduxjs/toolkit"
// import { useState,useEffect } from "react"

// // const [loggedInEmailID,setLoggedInEmailID] = useState("");

// // useEffect(()=>{
 
// //         let emailID  = localStorage.getItem("loggedInEmailID") 
// //         setLoggedInEmailID(emailID)

// // },[loggedInEmailID])


// const initialState={
//     test:localStorage.getItem("loggedInEmailID")
// }

// export const OrderDetailsSlicer = createSlice({
//     name:"orderDetails",
//     initialState,
//     reducers:{
//         orderId: (state) =>{
//             state.test =  localStorage.getItem("loggedInEmailID") 

//         }
//     }
// })

// export const {orderId} = OrderDetailsSlicer.actions;

// export default OrderDetailsSlicer.reducer;