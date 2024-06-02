import React from "react";
import "../RestaurantAnalysisInfoSection/RestaurantAnalysisInfoSection.css"

function DownloadMobileApp(){
    return(
        <div className="restaurant-analysis-info-section">
            <div className="restaurant-analysis-info-div">
                <h2>70</h2>
                <p>Average Daily Orders</p>
            </div>
            <div className="restaurant-analysis-info-div">
                <h2>9.5</h2>
                <p>Stars rating</p>
            </div>
            <div className="restaurant-analysis-info-div">
                <h2>12</h2>
                <p>Great Chefs</p>
            </div>
            <div className="restaurant-analysis-info-div">
                <h2>30</h2>
                <p>Different Cuisines</p>
            </div>
        </div>
    )
}


export default DownloadMobileApp