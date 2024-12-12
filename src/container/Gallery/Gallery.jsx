import React, { useState } from "react";
import "./Gallery.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  aboutus1,
  aboutus2,
  oldPerson,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../img";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="gallery-section"
      whileInView={{ x: [300, 0] }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <HiX onClick={() => setModel(false)} />
      </div>

      <h1 className="heading">Gallery</h1>
      <div className="line"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 3,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        <SwiperSlide className="swiper-slide">
          <img src={testimonial1} alt="" onClick={() => getImg(testimonial1)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={testimonial2} alt="" onClick={() => getImg(testimonial2)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={aboutus1} alt="" onClick={() => getImg(aboutus1)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={testimonial3} alt="" onClick={() => getImg(testimonial3)} />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev gallery-slider-arrow">
            {/* <FaChevronLeft /> */}
          </div>
          <div className="swiper-button-next gallery-slider-arrow">
            {/* <FaChevronRight /> */}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>

      <Link to="/gallery" className="more-gallery">
        More <FaChevronRight />
      </Link>
    </motion.div>
  );
};

export default Gallery;
