import React, { useRef } from "react";
import "./Testimonial.css";

import {
  profile1,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../img";
import Mskr from "./Mskr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      message:
        "They took care of my father in his last few weeks of life. They made his last few days as comfortable as they could. They are the best hands down! They treated him with respect and kindness every minute. They are the best care givers I have ever had the pleasure of knowing.",
      profile: profile1,
      name: "Barry Phraes",
      profession: "Local Guide",
    },
    {
      message:
        "They are the best hands down! They treated him with respect and kindness every minute. They are the best care givers I have ever had the pleasure of knowing.",
      profile: profile1,
      name: "Kibrom",
      profession: "Local Guide",
    },
    {
      message:
        "Moving my mother to Saint Gabriel was the best decision our family made. The staff is incredibly caring, and Mom is thriving in this wonderful environment.",
      profile: profile1,
      name: "Jane D.",
      profession: "Daughter of Resident",
    },
  ];

  const itemStyle = {
    scrollSnapAlign: "center", // Centers the testimonial
    border: "1px solid #ddd",
    borderRadius: "10px",
  };

  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -window.innerWidth * 0.8,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: window.innerWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <div className="testimonial">
      <div className="testimonial-imgs">
        <img src={testimonial1} alt="old-person" />
        <img src={testimonial2} alt="old-person" />
        <img src={testimonial3} alt="old-person" />
        <img src={testimonial4} alt="old-person" />
      </div>

      <div className="bottom">
        <h1>Testimonials</h1>
        <div className="underline" />

        <div
          className="container"
          ref={scrollContainer}
          style={{
            display: "flex",
            overflowX: "auto",
            padding: "20px",
            gap: "10px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Mskr
              key={index}
              message={testimonial.message}
              img={testimonial.profile}
              name={testimonial.name}
              profession={testimonial.profession}
              style={itemStyle}
            />
          ))}
        </div>
        <div className="buttons">
          <FaChevronLeft onClick={scrollLeft} />
          <FaChevronRight onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
