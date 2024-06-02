import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import {QueryClient,QueryClientProvider } from "@tanstack/react-query"; 
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; 
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import OrderDetailsSlicer from './slicers/OrderDetailsSlicer';
import thunk from "redux-thunk"

import loginEmailIdSlicer from './slicers/loginEmailIdSlicer';
import loginPasswordSlicer from './slicers/loginPasswordSlicer';
import LoginSlicer from './slicers/LoginSlicer';
import SignUpSlicer from './components/Register/SignUpSlicer';

const store = configureStore({
  reducer:{
    // orderDetails:OrderDetailsSlicer,
    loginEmailId:loginEmailIdSlicer,
    loginPassword:loginPasswordSlicer,
    login:LoginSlicer,
    signup:SignUpSlicer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  <ReactQueryDevtools/>
    </QueryClientProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
