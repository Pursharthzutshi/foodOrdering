import "../BestSellerSection/BestSellerSection.css"
import BestSellerData from "../BestSellerSection/BestSellerSectionData"
import image from "../../../images/image-from-rawpixel-id-6121211-png.png"

function Header(){
    return(
        <section className="bestseller-section">
            
            <h3>Our BestSellers</h3>

            <div className="bestseller-container">
            {
            BestSellerData.map((val)=>{
                return(
            <div className="bestseller-div">
                <img src={val.img}/>
                        <h3>{val.title}</h3>
                        <p>{val.desc}</p>
                        {/* <button>Loreum Ipsum</button> */}
                        <br></br>
            </div>
                )
            })
            }
                </div>            

        </section>
    )
}

export default Header;