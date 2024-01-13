import React, { useState } from "react";
import "./Product.scss";
import NavBar from "../NavBar/NavBar";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dumImg from "/Contr2.png";
import dumImg2 from "/mediaImg5.png";
import { motion } from "framer-motion";

function SampleNextArrow(props) {
  const { onClick, bgm } = props;
  // console.log(bgm);
  return (
    <div
      className={bgm ? "dis" : ""}
      style={
        window.innerWidth > 900
          ? {
              width: "2rem",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#003E71",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-40px",
              cursor: "pointer",
            }
          : {
              width: "1.2rem",
              height: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#003E71",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "-5px",
              cursor: "pointer",
              fontSize: "0.75rem",
            }
      }
      onClick={onClick}
    >
      &rarr;
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick, bgm } = props;
  return (
    <div
      className={bgm ? "dis" : ""}
      style={
        window.innerWidth > 900
          ? {
              width: "2rem",
              height: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#003E71",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "-40px",
              cursor: "pointer",
            }
          : {
              width: "1.2rem",
              height: "1.2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              background: "#003E71",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "-5px",
              cursor: "pointer",
              fontSize: "0.75rem",
              zIndex: "99",
            }
      }
      onClick={onClick}
    >
      &larr;
    </div>
  );
}

export default function Product() {
  const img = [dumImg, dumImg, dumImg, dumImg, dumImg2, dumImg2, dumImg2];
  const chNext = window.innerWidth > 900 ? img.length - 4 : img.length - 1;
  const [disNext, setDisNext] = useState(false);
  const [disPrev, setDisPrev] = useState(true);
  const [disNext2, setDisNext2] = useState(false);
  const [disPrev2, setDisPrev2] = useState(true);
  const [disNext3, setDisNext3] = useState(false);
  const [disPrev3, setDisPrev3] = useState(true);
  const img2 = [1, 2, 3];
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: window.innerWidth <= 700 ? 1 : 4,
    speed: 500,
    nextArrow: <SampleNextArrow bgm={disNext} />,
    prevArrow: <SamplePrevArrow bgm={disPrev} />,
    beforeChange: (current, next) => {
      if (next === 0) setDisPrev(true);
      else if (next === chNext) setDisNext(true);
      else {
        setDisNext(false);
        setDisPrev(false);
      }
      // if (prev === 1) setDisPrev(true);
      // else {
      //   setDisNext(false);
      //   setDisPrev(false);
      // }
      console.log(next);
    },
  };
  const settings2 = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: window.innerWidth <= 700 ? 1 : 4,
    speed: 500,
    nextArrow: <SampleNextArrow bgm={disNext2} />,
    prevArrow: <SamplePrevArrow bgm={disPrev2} />,
    beforeChange: (current, next) => {
      if (next === 0) setDisPrev2(true);
      else if (next === chNext) setDisNext2(true);
      else {
        setDisNext2(false);
        setDisPrev2(false);
      }
      // if (prev === 1) setDisPrev(true);
      // else {
      //   setDisNext(false);
      //   setDisPrev(false);
      // }
      console.log(next);
    },
  };
  const settings3 = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "10px",
    slidesToShow: window.innerWidth <= 700 ? 1 : 4,
    speed: 500,
    nextArrow: <SampleNextArrow bgm={disNext3} />,
    prevArrow: <SamplePrevArrow bgm={disPrev3} />,
    beforeChange: (current, next) => {
      if (next === 0) setDisPrev3(true);
      else if (next === chNext) setDisNext3(true);
      else {
        setDisNext3(false);
        setDisPrev3(false);
      }
      // if (prev === 1) setDisPrev(true);
      // else {
      //   setDisNext(false);
      //   setDisPrev(false);
      // }
      console.log(next);
    },
  };

  return (
    <>
      <NavBar />
      <div className="main-product">
        <motion.div
          className="banner"
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: "0",
            opacity: 1,
            transition: {
              duration: 1,
              staggerChildren: 0.5,
            },
          }}
        >
          <h3>
            <motion.span>Fuel Your Body With The</motion.span> <br />{" "}
            <motion.span>Nutrients It Needs!</motion.span>
          </h3>
        </motion.div>
        <div className="section-1">
          <h3>Lab Equipment for Flour Mill & Rice Mill</h3>
          <p>
            Step into the realm of precision and efficiency with our advanced
            lab equipment, meticulously designed to elevate the standards of the
            food processing industry. From Automatic Failing Number Apparatus to
            Infrared Moisture Meters, our cutting-edge tools empower you to
            achieve unparalleled accuracy in your production processes.{" "}
          </p>
        </div>

        {/* section-2 */}
        <div className="section-2">
          <Slider {...settings}>
            {img.map((val) => {
              return (
                <div className="product-aqc-card">
                  <img src={val} alt="" />
                  <p>Text here</p>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* section-3 */}
        <div className="section-2" style={{ marginTop: "2rem" }}>
          <Slider {...settings2}>
            {img.map((val) => {
              return (
                <div className="product-aqc-card">
                  <img src={val} alt="" />
                  <p>Text here</p>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* section-4 */}
        <div className="section-4">
          <div className="section-4-wrapper">
            <h3>FOOD ADDITIVES</h3>
            <p>
              Discover the art of flavor enhancement and food preservation with
              AQC Chem Lab's versatile food additives. Elevate your culinary
              creations with our range of natural extracts and functional
              additives, ensuring delicious taste and extended freshness.
              Unleash your creativity and take your dishes to new heights with
              our premium food additives, making every meal a delightful
              experience.
            </p>
            <div className="img-wrapper">
              {img2.map(() => {
                return (
                  <div className="prod-card-2">
                    <img src={dumImg2} alt="" />
                    <p>
                      Extending diverse range of liquid & dry flavors to
                      accelerate the aroma & taste of your cakes, confectionary,
                      chocolates, desserts, ice creams, shakes, Juices, breads
                      and a variety of baked & non-baked goods & beverages.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* section-5 */}
        <div className="section-4 section-5">
          <div className="section-4-wrapper">
            <h3>Nutrition</h3>
            <p>
              At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA. It is
              showcased through the cutting edge technologies that drive our
              food processing solutions. We harness a range of state-of-the-art
              technologies that redefine food science, enhancing product
              quality, efficacy, and consumer experience.
            </p>
            <div className="img-wrapper-2">
              <Slider {...settings3}>
                {img.map((val) => {
                  return (
                    <div className="product-aqc-card">
                      <img src={val} alt="" />
                      <p>Text here</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        <PreFooter />
      </div>
      <Footer />
    </>
  );
}
