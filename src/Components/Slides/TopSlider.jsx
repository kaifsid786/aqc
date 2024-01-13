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
import v1 from "/1715412_Flour_Dough_Ingredient_1280x720 (1).mp4";
import v2 from "/4661195_Closeup_Woman_Baker_1280x720 (1).mp4";
import PropertyCard from "../PropertyCard/PropertyCard";

export default function TopSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
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
          <PropertyCard />
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
          <video src={v1} autoPlay muted loop></video>
          <div class="cot">
            <h1>
              Fueling Your Potential <br /> Nourishing Your Journey
            </h1>
            <p>
              Discover the essence of well-being with our meticulously crafted
              nutrition solutions at AQC. <br /> Fuel your potential and embark
              on a nourishing journey toward a healthier, happier you
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
          <video src={v2} autoPlay muted loop></video>
          <div class="cot">
            <h1>
              Elevate Your Plate <br />
              Where Nutrition Meets Flavor
            </h1>
            <p>
              Experience a culinary renaissance at AQC, <br />
              where we seamlessly blend nutrition and flavor to elevate every
              plate.
            </p>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
