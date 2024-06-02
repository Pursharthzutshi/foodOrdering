import React from "react";
import "../Footer/Footer.css"
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaSadCry } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer-section">
            <p>Follow us on our social media</p>
            <div className="footer-section-icons-container">
            <FaFacebook className="footer-icons"/>
            <FaInstagram className="footer-icons"/>
            <FaTwitter className="footer-icons"/>
            <FaWhatsapp className="footer-icons"/>
            </div>
        </div>
    )
}


export default Footer