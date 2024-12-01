import React from "react";
import "./Certificates.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certificates = () => {
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}>
      <h1>Certificates</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-prev">
            <FaChevronLeft />
          </div>
          <div className="swiper-next">
            <FaChevronRight />
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Certificates;
