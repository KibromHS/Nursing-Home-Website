import React, { useState } from "react";
import "./Gallery.css";
import {
  aboutus1,
  aboutus2,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  oldPerson,
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "../../img";

import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";

const Gallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const data = [
    { id: 1, imgSrc: aboutus1 },
    { id: 2, imgSrc: oldPerson },
    { id: 3, imgSrc: testimonial1 },
    { id: 4, imgSrc: testimonial2 },
    { id: 5, imgSrc: testimonial3 },
    { id: 6, imgSrc: testimonial4 },
    { id: 7, imgSrc: aboutus2 },
    { id: 8, imgSrc: gallery1 },
    { id: 9, imgSrc: gallery2 },
    { id: 10, imgSrc: gallery3 },
    { id: 11, imgSrc: gallery4 },
  ];

  const getImg = (src) => {
    setTempImgSrc(src);
    setModel(true);
  };

  return (
    <motion.div
      className="gallery"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
    >
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <HiX onClick={() => setModel(false)} />
      </div>

      <h1>
        <span>Image Ga</span>llery
      </h1>

      <div className="gallery-imgs">
        {data.map((img) => (
          <div className="pics">
            <img
              src={img.imgSrc}
              key={img.id}
              alt=""
              onClick={() => getImg(img.imgSrc)}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
