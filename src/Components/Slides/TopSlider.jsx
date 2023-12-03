import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./TopSlider.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";


const TopSlidesr = () => {
  

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
         
        </div>
        <Swiper {...sliderSettings}>
          {/* <SlideNextButton /> */}
          {/* slider */}
          {/* {data?.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}> */}
              <PropertyCard/>
            {/* </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSlidesr;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter ">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
