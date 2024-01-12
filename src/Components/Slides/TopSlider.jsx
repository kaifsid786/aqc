import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TopSlider.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import v1 from "../../images/v1.mp4";
import v2 from "../../images/v2.mp4";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function TopSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 7000 }}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PropertyCard/>
          
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          <video src={v1} autoPlay muted loop></video>
          <div class="cot">
          <h1>Enhancing Nutrition <br /> Empowering Tomorrow.</h1>
            <p>At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA. It is showcased
through <br /> the cutting edge technologies that drive our food processing.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
          <video src={v2} autoPlay muted loop></video>
          <div class="cot">
            <h1>Enhancing Nutrition <br /> Empowering Tomorrow.</h1>
            <p>At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA. It is showcased
through <br /> the cutting edge technologies that drive our food processing.</p>
          </div>
        </SwiperSlide>

        
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
