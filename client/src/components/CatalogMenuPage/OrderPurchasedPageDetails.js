import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CatalogMenuPage/OrderPurchasedPageDetails.css";

function OrderPurchasedPageDetails({ val, loggedInEmailID }) {
  // const [orderDetails,setOrderDetails] = useState([])

  let {
    name,
    Phone_No,
    address,
    secondAddress,
    orderID,
    amount,
    itemName,
    itemQuantity,
    orderDate,
  } = val;
  console.log(itemName);
  return (
    <div className="order-purchased-page-details-page">
    
    <div className="orders-details-heading-div">
    <p>OrderID</p>
    <p>Name</p>
    <p>PhoneNo</p>
    <p>First Address</p>
    <p>Second Address</p>
    <p>Price</p>
    <p>ItemName</p>
    <p>itemQuantity</p>
    <p>Order Date</p>
     
    </div>

      <div className="order-details-div">
        <p>{orderID}</p>
        <p>{name}</p>
        <p>{Phone_No}</p>
        <p>{address}</p>
        <p>{secondAddress}</p>
        <p>₹{amount / 100}</p>
        <p>{itemName}</p>
        <p>{itemQuantity}</p>
        <p> {orderDate}</p>
      </div>

    </div>
  );
}

export default OrderPurchasedPageDetails;
