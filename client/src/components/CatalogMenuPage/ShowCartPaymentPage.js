import React, { useEffect } from "react";
import axios from "axios";
import "../CatalogMenuPage/ShowCartPaymentPage.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

function ShowCartPaymentPage({
  cart,
  price,
  updateItemQuantity,
  setCart,
  setShowAddressOption,

}) {


  const [clearAllButton, setClearAllButton] = useState(false);
  const [showLeftContainerBox, setShowLeftContainer] = useState(false);

  const [phoneNo, setPhoneNo] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [secondAddress, setSecondAddress] = useState("");

  const [showAddressErrorMsg, setShowAffressErrorMsg] = useState("");

  const [orderPlacedMsg, setOrderPlacedMsg] = useState(false);

  const [orderDate, setOrderDate] = useState("");

  const [orderPurchasedEmailID, setOrderPurchasedEmailID] = useState("");

  const [test,setTest] =useState(false);

  const clearAllItems = () => {
    setCart([]);
  };

  useEffect(() => {
    if (cart.length) {
      setClearAllButton(true);
      setShowLeftContainer(true);
      setShowAddressOption(true);
    } else {
      setClearAllButton(false);
      setShowLeftContainer(false);
      setShowAddressOption(false);
    }
  }, [cart, setShowAddressOption]);

  const deleteItem = (itemSlug) => {
    setCart((existingCart) =>
      existingCart.filter((cartItem) => {
        return itemSlug !== cartItem.slug;
      })
    );
  };

  useEffect(() => {
    let emailID = localStorage.getItem("loggedInEmailID");
    setOrderPurchasedEmailID(emailID);
    console.log(orderPurchasedEmailID);

    setOrderDate(Date());
  }, [orderPurchasedEmailID]);

  const initiatePaymentAndVerifyOrder = async (order) => {
    const options = {
      key: "rzp_test_XkDeMiDaDklURU",
      order_id: order.id,
      amount: order.amount,
      name: "Resturant Website",

      handler: async (response) => {
        await axios.post(`http://localhost:3001/PaymentOrderAndVerify/verify`, response);        
        setTest(true)

        //order info
        const orderInfoResponse = await axios.post(
          "http://localhost:3001/InsertPaymentDetails/insertOrderInfo",
          {
            orderID: order.id,
            orderPurchasedEmailID: orderPurchasedEmailID,
            phoneNo: phoneNo,
            name: name,
            address: address,
            secondAddress: secondAddress,
            amount: order.amount,
          }
        );


        //order summary
        const orderSummary = await axios.post(
          "http://localhost:3001/InsertPaymentDetails/insertOrderSummary",
          {
            orderID: order.id,
            itemName: cart.map((a) => a.title).join(","),
            noOfItems: cart.map((val)=>val.amount).join(","),
            orderDate: orderDate,
          }
        );
        setOrderPlacedMsg(true);

        console.log(orderSummary);
        // setCart(["order Placed"]);
      },

      // callback_url:"http://localhost:3000",
      // redirect:true,
    };


    const Razorpay = new window.Razorpay(options);
    await Razorpay.open();
  };

  const onClickToPay = async () => {
    if (phoneNo === "") {
      return setShowAffressErrorMsg("Phone No not filled");
    }

    if (name === "") {
      return setShowAffressErrorMsg("Name not filled");
    }

    if (address === "" || secondAddress === "") {
      return setShowAffressErrorMsg("Address not filled");
    }

    if (phoneNo.length !== 8) {
      return setShowAffressErrorMsg("Phone no should be of 8 digits");
    }

    // setShowAffressErrorMsg("");
    const { data: orderResponse } = await axios.post(
      `http://localhost:3001/PaymentOrderAndVerify/orders`,
      { price: price }
    );

    await initiatePaymentAndVerifyOrder(orderResponse.array);
    console.log(orderResponse.array.amount);
  };

  return (
    <div>
              {
                test && <Navigate to ="/"/>
            }

      {showLeftContainerBox ? (
        <nav className="show-cart-payment-page">
          <div className="payment-cart-cards-container">
            {clearAllButton ? (
              <button className="clear-all-button" onClick={clearAllItems}>Clear All</button>
            ) : null}
            {orderPlacedMsg && 
            <div>
            <p>Order Placed Go To Your Orders</p>
            <Link to="/OrderPurchasedPage">Orders</Link>
            </div>
}

            {cart.map((cartItem) => {
              

              return (
                <div className="payment-cart-cards">
                  <div>
                    {cartItem.amount}
                    <img src={cartItem.img} />
                    <p>{cartItem.title}</p>
                    <p>Price : {cartItem.price}</p>
                  </div>
                  <div className="line"></div>

                  <div className="payment-cart-cards-counter-buttons-container">
                    <p>Quantity :</p>
                      
                        <button
                        onClick={() => {
                          updateItemQuantity(cartItem, -1);
                        }}
                      >
                        -
                      </button>
                      
                    <p>{cartItem.amount}</p>
                    
                    <button 
                      onClick={() => {
                        updateItemQuantity(cartItem, +1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button className="delete-item-button"
                    onClick={() => {
                      deleteItem(cartItem.slug);
                    }}
                  >
                    Delete Item
                  </button>
                  
                </div>
              );
            })}
          </div>

          <div className="total-price-section-container">
            <form className="payment-address-info-form">
              <h3>Your Address</h3>

              <input
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                placeholder="Phone No"
                type="text"
              />
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
                type="text"
              />
              <textarea
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                placeholder="Your Address Col 1"
              ></textarea>
              <textarea
                onChange={(e) => {
                  setSecondAddress(e.target.value);
                }}
                placeholder="Your Address Col 2"
              ></textarea>
            </form>
            {!price ? (
              <h3 className="cart-empty-heading">Your Cart is Empty</h3>
            ) : (
              <div>
                <h3>Total Price = {price}</h3>

                <button className="pay-button" onClick={onClickToPay}>
                  Pay For Order
                </button>
                <p className="fill-address-msg">{showAddressErrorMsg}</p>

                <Link to="/orderNowPage">Back to Menu</Link>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <div className="cart-empty-heading-div">
          <h3>Your Cart is empty 😢 </h3>
          <br></br>
          <Link to="/orderNowPage">Back to Menu</Link>
        </div>
      )}
    </div>
  );
}

export default ShowCartPaymentPage;
