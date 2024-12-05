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
        "My grandmother was cared for by Mimi and her staff for the last couple years leading up to her death. The owners and staff at Saint Gabriel are wonderful. The love they give to their patients is like no other we’ve seen. My grandmothers life even after her death was so cherished by Mimi and her family. Working with Dementia patients is such a difficult job and Mimi and her staff were so good at it. I would have no hesitation having your loved one live her.",
      name: "Lindsey Myers",
      profession: "Customer",
    },
    {
      message:
        'I am so very grateful to have my client in residence at St. Gabriel AFH.  An aging person suffering in the throws of dementia requires a safe, consistent, warm, engaging environment in addition to quality care and nutritious food.  My client is well cared for and is happy in what he calls his "home".  Thank you Mimi and your amazing staff.',
      name: "Coya Eubank-Kirby",
      profession: "Customer",
    },
    {
      message:
        "Mimi is an incredible, professional and caring caregiver who maintains high standards.  She thoroughly trains her staff and has high expectations for them as well.  Her attention to detail is without fault and she cares deeply for any in her care and welcomes all to her AFH.",
      name: "Maria Othman",
      profession: "Customer",
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
