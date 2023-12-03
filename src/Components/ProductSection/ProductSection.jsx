import React from "react";
import "./ProductSection.css";



import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { sliderSettings } from "../../utils/common";
import PropertyCard2 from "../PropertyCard2/PropertyCard2";
import Gallery from "../Gallery/Gallery"
import diet from "../../images/dietary-supplement-capsules-ingredients-hand-pharmacist-writes-notebook 1.png";
import svg1 from "../../images/handshake_9261993 (1).png";
import svg2 from "../../images/experiments_1974484.png";
import svg3 from "../../images/capsule_1948415.png";

const ProductSection = () => {
    const data=[
        {
            img:svg1,
            title:"Contract Manufacturing",
            info:'Your trusted partner in contract manufacturing solutions while committing to quality, innovation & precision.'

        },
        {
            img:svg2,
            title:"Lab Equipments",
            info:'We Believe that state of art technology and the best technology is the foundation of reliable scientific analysis. That is why we are committed to provide you with top notch equipment.'

        },
        {
            img:svg3,
            title:"Food Additives",
            info:'Food Additives are essential substances which are used in the food industry to enhance the flavour, texture, appearance and shelf life of many products.'

        },
        {
            img:svg1,
            title:"Contract Manufacturing",
            info:'Your trusted partner in contract manufacturing solutions while committing to quality, innovation & precision.'

        },
        {
            img:svg2,
            title:"Lab Equipments",
            info:'We Believe that state of art technology and the best technology is the foundation of reliable scientific analysis. That is why we are committed to provide you with top notch equipment.'

        },
        {
            img:svg3,
            title:"Food Additives",
            info:'Food Additives are essential substances which are used in the food industry to enhance the flavour, texture, appearance and shelf life of many products.'

        },

    ]
  return (
    <div className="all-container">
    <div className="ProductSection">
      <div className="health-magic" style={{ display: "flex", gap: "3rem",marginTop:'7rem' }}>
        <img src={diet} alt="" />
        <div
          className="health-magic-info"
          style={{ display: "flex", flexDirection: "column", gap: "0.6rem",justifyContent:'center' }}
        >
          <div style={{ color: "#10C08E", fontSize: "0.7rem" }}>About Us</div>
          <div
            className="health-magin-info-title"
            style={{ fontSize: "2rem", lineHeight: "2.5rem" }}
          >
            Health Magic- Where Taste
            <br />
            Meets Nutrition
          </div>

          <div
            className="health-magic-info-desc"
            style={{ fontSize: "0.8rem", fontWeight: "300" }}
          >
            Founded in the year 1999-2000 , AQC Chem. Lab Pvt. Ltd has slowly
            but steadily grown to be one of the trusted names in the industry.
            We began our journey with a vision to redefine food enhancement by
            creating products which are not only delicious but are also healthy,
            safe and sustainable.
          </div>
          <div className="health-magic-info-btn">
            <button>know More</button>
          </div>
        </div>
      </div>

      <div
        className="pas"
      >
        Products and Services
      </div>

      <div className="product-slider">
        <div id="residencies2" className="r-wrapper">
          <div className="paddings innerWidth r-container2">
            <div className="flexColStart r-head2">
              <span className="orangeText"></span>
              <span className="primaryText"></span>
            </div>
           
            <Swiper {...sliderSettings}>
            <SlideNextButton />
              {/* slider */}
              {data?.map((card, i) => (
                <SwiperSlide key={i}>
                  <PropertyCard2 card={card} />
                </SwiperSlide>
              ))}
              
            </Swiper>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "2rem",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="pas">Explore the Diverse Horizons:</div>
        <div className="pas">
          Discover the{"  "}
          <span className="pas2" style={{ color: "#10C08E" }}>Markets We Serve</span>
        </div>
      </div>

      <Gallery/>

        
    </div>
    </div>
  );
};

export default ProductSection;


const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
      <div className="flexCenter r-buttons2">
        <button onClick={() => swiper.slidePrev()} className="swiper-button-prev">
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className="swiper-button-next">
          &gt;
        </button>
      </div>
    );
  };