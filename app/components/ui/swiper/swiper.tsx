"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import swiper CSS
import { StaticImageData } from "next/image";

interface SliderProps {
  slides: StaticImageData[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div style={{ width: "100%", height: "100%" }}>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
