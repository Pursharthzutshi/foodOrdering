import react from "react";
import "../Testimonials/Testimonials.css";
import TestimonialsData from "./TestimonialsData";

function Header() {
  return (
    <section className="testimonials-section">
      <h3>Our Testimonials</h3>
      {TestimonialsData.map((val) => {
        console.log(val);
        return (
          <div key={val.id} className="testimonials-div">
            <p>{val.name}</p>
            <p>{val.desc}</p>
          </div>
        );
      })}

      <div className="">
        <button>+</button>
        <button>+</button>
        <button>+</button>
        <button>+</button>
      </div>
    </section>
  );
}

export default Header;
