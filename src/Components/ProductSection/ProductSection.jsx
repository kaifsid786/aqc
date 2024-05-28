import React, { useEffect, useState } from "react";
import "./ProductSection.css";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/autoplay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./TestSliderMod.css";

import { sliderSettings } from "../../utils/common";
import PropertyCard2 from "../PropertyCard2/PropertyCard2";
import Gallery from "../Gallery/Gallery";
import diet from "../../images/dietary-supplement-capsules-ingredients-hand-pharmacist-writes-notebook 1.png";
import svg1 from "../../images/handshake_9261993 (1).png";
import svg2 from "../../images/experiments_1974484.png";
import svg3 from "../../images/capsule_1948415.png";
import svg4 from "/Micronutrient premixes.svg";
import GalleryMob from "../Gallery/GalleryMob";
import { delay } from "framer-motion";

const ProductSection = ({gall,slidesContent}) => {
  // console.log(slidesContent)
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    {
      img: svg4,
      title: "Micronutrient Premixes",
      info: "These are nutritional strategies which involve adding a formulated mixture of vitamins and minerals to commonly consumed food products to enhance nutritional value. ",
    },
    {
      img: svg3,
      title: "Food Additives",
      info: "Food Additives are essential substances which are used in the food industry to enhance the flavour, texture, appearance and shelf life of many products.",
    },
    {
      img: svg2,
      title: "Lab Equipments",
      info: "We Believe that state of art technology and the best technology is the foundation of reliable scientific analysis. That is why we are committed to provide you with top notch equipment.",
    },
    {
      img: svg1,
      title: "Contract Manufacturing",
      info: "Your trusted partner in contract manufacturing solutions while committing to quality, innovation & precision.",
    },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: window.innerWidth <= 700 ? 1 : 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setImgIndx(next),
  };
  const [imgIndx, setImgIndx] = useState(0);
  const [slidePerView, setSlidePerView] = useState(3);
  return (
    <div className="all-container">
      <div className="ProductSection">
        <div
          className="health-magic"
          style={{ display: "flex", gap: "3rem", marginTop: "7rem" }}
        >
          <img src={diet} alt="" />
          <div
            className="health-magic-info"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              justifyContent: "center",
            }}
          >
            <div className="magic-title">About Us</div>
            <div className="health-magin-info-title">
              Nutrition Redefined- Where Taste
              {windowWidth <= 480 ? "" : <br />}
              Meets Nutrition
            </div>

            <div
              className="health-magic-info-desc"
              style={{ fontSize: "0.8rem", fontWeight: "300" }}
            >
              Established in 2009, AQC Chem Lab Pvt. Ltd. has evolved with a
              mission to revolutionize food enhancement through advanced
              technology. Our commitment is to craft nutritious, healthy, and
              tasty products sustainably.
            </div>
            <div className="health-magic-info-btn">
              <button onClick={() => navigate("/about")}>Know More</button>
            </div>
          </div>
        </div>

        <div
          className="pas pas-ch"
          style={
            window.innerWidth <= 1500
              ? { marginTop: "2rem", marginBottom: "1rem" }
              : {}
          }
        >
          Products and Services
        </div>
        {windowWidth <= 480 ? (
          slidesContent?.map((card, i) => <PropertyCard2 card={card} key={i} />)
        ) : (
          <div className="product-slider">
            <Slider {...settings}>
              {slidesContent?.map((val, i) => {
                return (
                  <PropertyCard2
                    card={val}
                    key={i}
                    st={i === imgIndx ? true : false}
                  />
                );
              })}
            </Slider>
          </div>
        )}

        <div className="e-d-h">
          <div
            className="pas pas-ph"
            style={
              window.innerWidth > 1500
                ? { marginTop: "7rem" }
                : { marginTop: "5rem" }
            }
          >
            Explore the Diverse Horizons:
          </div>
          <div className="pas ">
            Discover the{" "}
            <span className="pas2" style={{ color: "#10C08E" }}>
              Markets We Serve
            </span>
          </div>
        </div>

        {windowWidth <= 480 ? <GalleryMob /> : <Gallery gall={gall} />}
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
