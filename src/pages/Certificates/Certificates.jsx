import React, { useState } from "react";
import "./Certificates.css";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
} from "../../img";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiX } from "react-icons/hi";

const Certificates = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [deg, setDeg] = useState("");

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
    if (src == cert6 || src == cert7) setDeg("rotate(-180deg)");
    else if (src == cert8) setDeg("rotate(90deg)");
    else setDeg("rotate(-90deg)");
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="certificates"
    >
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" style={{ transform: deg }} />
        <HiX onClick={() => setModel(false)} />
      </div>

      <h1 className="heading">
        <span>Cert</span>ificates
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 100,
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
          <img src={cert1} alt="" onClick={() => getImg(cert1)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert2} alt="" onClick={() => getImg(cert2)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert3} alt="" onClick={() => getImg(cert3)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert4} alt="" onClick={() => getImg(cert4)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert5} alt="" onClick={() => getImg(cert5)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert6} alt="" onClick={() => getImg(cert6)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert7} alt="" onClick={() => getImg(cert7)} />
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <img src={cert8} alt="" onClick={() => getImg(cert8)} />
        </SwiperSlide>

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            {/* <FaChevronLeft /> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            {/* <FaChevronRight /> */}
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Certificates;
