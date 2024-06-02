import React from "react";
import DownloadMobileAppImage from "../../../images/smartphone.png"
import "../DownloadMobileAppSection/DownloadMobileAppSection.css"
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

function DownloadMobileApp(){
    return(
        <div className="download-mobile-app-section">
            <h3>Download Our App</h3>
            <div className="donwload-mobile-app-container">
            <div className="">
            <img className="download-mobile-app-icon" src={DownloadMobileAppImage}/>
            </div>
            <div className="donwload-mobile-app-container-content-div">
            <h4><span>Download</span> our application on you android/ios mobile</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget lorem lorem. In a ante vel erat blandit faucibus.<br></br>Aenean scelerisque urna odio, a ultrices enim tempus sit amet. Proin feugiat cursus arcu, eu rhoncus nulla euismod aliquam.<br></br> Sed euismod iaculis libero, in vulputate lectus interdum ut. Ut sed leo dignissim metus ultricies dapibus eu vitae nisl. </p>
<br></br>
<div className="download-app-buttons-container">
            <button className="google-play-button">Get on <FaGooglePlay/>  Play Store</button>
            <button className="apple-app-button">Get on <FaAppStore/>  App Store</button>
            </div>
            </div>



            </div>
            <br></br>
        </div>
    )
}


export default DownloadMobileApp