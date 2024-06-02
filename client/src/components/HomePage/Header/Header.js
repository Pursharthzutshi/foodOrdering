import React from "react";
import QRCode from 'qrcode.react';

import "../Header/Header.css"
import headerContentImage from "../../../images/image-from-rawpixel-id-6121211-png.png"
import headerContentImageTwo from "../../../images/image-from-rawpixel-id-3282840-jpeg.jpg"
import headerContentImageThree from "../../../images/image-from-rawpixel-id-7733248-png.png"
import { BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';
import Navbar from "../Header/Navbar"
import { useSelector } from "react-redux";

function Header(){
    const showLogOutButton = useSelector((state)=>state.login.showLogOutButton)

    return(
        <section className="header-section">

<div className="header-content-container">

<div className="header-content-image-div">
<img src={headerContentImage}/>
<img src={headerContentImageTwo}/>
<img src={headerContentImageThree}/>
</div>

<div className="header-content-heading-button-div">
    <h2><span>Welcome </span>to TasteBuds Delight!, <br></br>Indulge in a culinary journey like no other with TasteBuds Delight.</h2>
    
    
    <QRCode value="https://restaurant-website-catalog-menu-page-mobile.vercel.app/"/>

    <p>Scan QR code to view menu</p>

    <Link className="order-login-button" to="/orderNowPage">
    {
    showLogOutButton ?<p className="order-now-button">Order Now</p>:<p className="login-button">Log In to Order Now</p>
    }
    
        </Link>
    </div>

</div>
            
        </section>
    )
}

export default Header;