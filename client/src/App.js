import "./App.css";
import { Routes, Route } from "react-router-dom";
import CatalogMenuPage from "./components/CatalogMenuPage/CatalogMenuPage";
import HomePage from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import ShowCartPaymentPage from "./components/CatalogMenuPage/ShowCartPaymentPage";
import Navbar from "./components/HomePage/Header/Navbar";
import SignUpPage from "./components/Register/SignUpPage";
import LogInPage from "./components/Register/LogInPage";
import axios from "axios";
import OrderPurchasedPage from "./components/CatalogMenuPage/OrderPurchasedPage";
import { useDispatch, useSelector } from "react-redux";
import { loginCredentials } from "./slicers/LoginSlicer";

function App() {

  const [viewOrdersPageDetails,setViewOrdersPageDetails] = useState("");
  const [showAddressOption, setShowAddressOption] = useState(false);

  const [welcomeBackMessageTimeInterval,setWelcomeBackMessageTimeInterval] = useState(false);

  // const [signUpMessage,setSignUpMessage] = useState(false)

  const [test, setTest] = useState(false);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [showCartPaymentPage, setShowCartPaymentPage] = useState(false);
  const [userName, setUserName] = useState("");
  
  const [orderLoggedInEmailID,setorderloggedInEmailID] = useState("");

  const [showUserSignedUp, setShowUserSignedUp] = useState(false);


  const [savedAddresDialogBox, setSavedAddresDialogBox] = useState(false);

  axios.defaults.withCredentials = true;

  const dispatch = useDispatch();

  const showUserLoggedIn  = useSelector((state)=>state.login.showUserLoggedIn)
  

useEffect(()=>{
    setTimeout(()=>{
        // setSignUpMessage(false)
          setTest(false)
        setWelcomeBackMessageTimeInterval(false)
    },3000)

})

  useEffect(() => {
    axios.get(`http://localhost:3001/Registration/login`).then((response) => {
      if (response.data.loggedIn === true) {
        dispatch(loginCredentials(true));

      } else {
        dispatch(loginCredentials(false));
      }
    });
  });


  const incOrDecCartItemQuantity = (selectedCartIem, incOrDecBy) => {
  
    setCart((existingCart) => existingCart.map(cartItem => {
      
      if(cartItem.slug === selectedCartIem.slug) {

        if((cartItem.amount > 1 )){
          return {
            ...cartItem,
            amount: cartItem.amount + incOrDecBy,
          }
        } else if(cartItem.amount === 1 && incOrDecBy === 1){

          console.log(cartItem.amount)
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          }
        }       
      }

      return cartItem;
    }))
  };

  function handleAddItemToCart(cartItem, e) {
  
    const alreadyAddedItems =  cart.find((itemSlug)=>itemSlug.slug === cartItem.slug)
    
    if(alreadyAddedItems){
      setTest(true)
     console.log(alreadyAddedItems)

    }
     else
    {
      setTest(false)
      setCart((existingCart) => [...existingCart, cartItem]);
     }  

  }

  useEffect(() => {
    const totalPrice = cart.reduce((total, cartItem) => {
      return cartItem.amount * cartItem.price + total;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  return (
    <div className="App">
      <Navbar
      viewOrdersPageDetails={viewOrdersPageDetails}
      setViewOrdersPageDetails={setViewOrdersPageDetails}
        setCart={setCart}
        showAddressOption={showAddressOption}
        setShowCartPaymentPage={setShowCartPaymentPage}
        size={cart.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              showUserSignedUp={showUserSignedUp}
              cart={cart}
            />
          }
        />

        <Route
          path="/signUpPage"
          element={
          <SignUpPage 
          setShowUserSignedUp={setShowUserSignedUp}
           />
          }
        />

    

        {showCartPaymentPage && (
          <Route
            path="/paymentCartPage"
            element={
              <ShowCartPaymentPage
                setCart={setCart}
                setShowAddressOption={setShowAddressOption}
                updateItemQuantity={incOrDecCartItemQuantity}
                price={totalPrice}
                cart={cart}
              />
            }
          />
        )}

        {showUserLoggedIn ? (
          <Route
            path="/orderNowPage"
            element={
              <CatalogMenuPage
              welcomeBackMessageTimeInterval={welcomeBackMessageTimeInterval}
               userName={userName}
                itemQuantity={incOrDecCartItemQuantity}
                cart={cart}
                size={cart.length}
                test={test}
                setTest={setTest}
                handleClick={handleAddItemToCart}
              />
            }
          />
        ) : (
          <Route
            path="/orderNowPage"
            element={
              <LogInPage
              setUserName={setUserName}
              />
            }
          />
        )}

        <Route
          path="/orderPurchasedPage"
          element={
            <OrderPurchasedPage viewOrdersPageDetails={viewOrdersPageDetails} orderLoggedInEmailID={orderLoggedInEmailID} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
