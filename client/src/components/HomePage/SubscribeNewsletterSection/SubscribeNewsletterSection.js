import React from "react";
import "../SubscribeNewsletterSection/SubscribeNewsletterSection.css"

function SubscribeNewsletter(){
    return(
        <div className="subscribe-newsletter-info-section">
        
        <div className="subscribe-newsletter-info-left-side">
        <p>Subscribe To Our Newsletter</p>
        </div>

        <div className="subscribe-newsletter-info-right-side">
            <h3>Subscribe To </h3>
            <p>Stay in the loop with the latest culinary delights, exclusive offers, and mouthwatering recipes by subscribing to the TasteBuds Delight.newsletter! Whether you're a food enthusiast, a home cook, or simply someone who enjoys good food, our newsletter is your passport to a world of gastronomic delights.</p>
            <input placeholder="Enter Your Email" type="text"/>
            <button>Subscribe</button>
        </div>

        </div>
    )
}


export default SubscribeNewsletter