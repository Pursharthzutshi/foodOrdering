import React, { useEffect } from "react";
import Header from '../HomePage/Header/Header';
import Services from "../HomePage/Services/Services"
// import Testimonials from "../src/components/Testimonials/Testimonials"
import BestSeller from "../HomePage/BestSellerSection/BestSellerSection"
import DownloadMobileApp from '../HomePage/DownloadMobileAppSection/DownloadMobileAppSection';
import RestaurantAnalysisInfo from "../HomePage/RestaurantAnalysisInfoSection/RestaurantAnalysisInfoSection"
import SubscribeNewsletter from "../HomePage/SubscribeNewsletterSection/SubscribeNewsletterSection"
import Footer from "../HomePage/Footer/Footer"
import { useState } from "react";

function HomePage({cart,showUserSignedUp,loggedInEmailID}){


  const [showAccountCreatedStatus,setShowAccountCreatedStarted] = useState("")
  
  useEffect(()=>{
    setShowAccountCreatedStarted(false)
  }, [])
  
  return(
        <div>
            
      <Header cart={cart}/>
      
      {
      showUserSignedUp && <p className=""> {showAccountCreatedStatus}</p>
      }

      <Services/> 
      {/* <Testimonials/> */}
       <BestSeller/>
      <DownloadMobileApp/>
      <RestaurantAnalysisInfo/>
      <SubscribeNewsletter/>
      <Footer/>
        </div>
    )
}

export default HomePage