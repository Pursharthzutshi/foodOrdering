import react from "react";
import "../Services/Services.css"
import ServicesImages from "../../../images/delivery-man.png"
import ServicesData from "../Services/ServicesData"

function Header(){
    return(
        <section className="services-section">
<h3>Our Services</h3>
            <div className="services-container">
 
<div className="services-container">
{
    ServicesData.map((val)=>{
        return(
        <div className="services-div">
            <img src={val.img}/>
            <p>{val.title}</p>
            <p>{val.desc}</p>
        </div>
        )
    })
}
</div>
            </div>
<br></br>
<br></br>
        </section>
    )
}

export default Header;