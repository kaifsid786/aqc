import React, { useState } from "react";
import "./Product3.scss";
import NavBar from "../NavBar/NavBar";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import WhatsApp from "../WhatsApp/WhatsApp";
import prod3Banner from "/prod3-banner.jpg";
import prod1 from "/prod1/COLOUR GRADER.png";
import prod2 from "/prod1/Digital Moisture Meter.png";
import prod3 from "/prod1/DOUGH MIXER.png";
import prod4 from "/prod1/ELECTRIC OVEN.png";
import prod5 from "/prod1/FALLING NUMBER APPARATUS.png";
import prod6 from "/prod1/Gluten Washer.png";
import prod7 from "/prod1/Hectolitre Weight App.png";
import prod8 from "/prod1/Hectolitre Weight.png";
import prod9 from "/prod1/Infrared MOISTURE METER.png";
import prod10 from "/prod1/Lab Grinder.png";
import prod11 from "/prod2/Lab Sifter.png";
import prod12 from "/prod2/Muffle Furnace.png";
import prod13 from "/prod2/Paddy Cleaner.png";
import prod14 from "/prod2/Rice Polisher.png";
import prod15 from "/prod2/Rice Sheller.png";
import prod16 from "/prod2/S.S.png";
import prod17 from "/prod2/Sedimentation Shaker.png";
import prod18 from "/prod2/SIEVE - SHAKER.png";
import prod19 from "/prod2/Whitness Tester 2.png";
import { motion } from "framer-motion";

const varient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Product3 = () => {
  const prod3Data = [
    {
      title: "Colour Grader",
      subTitle: "",
      img: prod1,
      des: "It is used to measure the color of wheat flour",
      height: "3rem",
    },
    {
      title: "Digital Moisture Meter",
      subTitle: "",
      img: prod2,
      des: "It is used to measure the moisture content in wheat grains. ",
      height: "3rem",
    },
    {
      title: "Dough Mixer",
      subTitle: "",
      img: prod3,
      des: "It is designed to mix dough ingredients and ensures that the ingredients are evenly mixed, resulting in a consistent texture and taste in the final product.",
      height: "5rem",
    },
    {
      title: "Electric Oven",
      subTitle: "",
      img: prod4,
      des: "It is used to measure loss on drying, to dry out the gluten & check the baking properties.",
      height: "3rem",
    },
    {
      title: "Falling Number Appatus",
      subTitle: "",
      img: prod5,
      des: "It is used to determine the level of alpha-amylase activity in a sample of flour or grain. This is important because high levels of alpha-amylase can lead to sticky dough and poor bread quality, while low levels can result in flour that is unsuitable for baking.",
      height: "6rem",
    },
    {
      title: "Gluten Washer",
      subTitle: "",
      img: prod6,
      des: "It is specifically used to extract the gluten protein from flour or wheat samples for further analysis.",
      height: "4rem",
    },
    {
      title: "Hologen Moisture Meter",
      subTitle: "",
      img: prod7,
      des: " It is used to measure the moisture content in a wide range of materials, including grains, food products, wood, and construction materials.These are popular in industries where precise moisture measurement is critical, such as agriculture, food processing, and construction. They are known for their accuracy, speed, and ease of use, making them valuable tools for quality control and process optimization.",
      height: "10rem",
    },
    {
      title: "Hectoliter Weight",
      subTitle: "",
      img: prod8,
      des: "hecotlitre Weight is a measuring equipment for the weight of a substance per hectoliter (100 liters). It is used in the food industry to determine the weight of a certain volume of grain or other bulk materials.",
      height: "6rem",
    },
    {
      title: "I.R. Moisture Meter",
      subTitle: "",
      img: prod9,
      des: "An infrared moisture meter is a device used to measure the moisture content of  grain, and other substances. Unlike traditional moisture meters that rely on the conductivity or capacitance of the material to measure moisture, infrared moisture meters use infrared technology to determine moisture levels. Infrared moisture meters are popular due to their non-destructive nature, speed, and ease of use. ",
      height: "10rem",
    },
    {
      title: "Lab Grinder",
      subTitle: "",
      img: prod10,
      des: " It is used in scientific laboratories to grind, homogenize, or mix samples of grains for various analytical procedures. These grinders are designed to handle small quantities of samples and are often used in research, quality control, and testing application.",
      height: "6rem",
    },
    {
      title: "Lab Sifter",
      subTitle: "",
      img: prod11,
      des: "It is used to to perform particle size analysis. It helps to separate the particles according to their size, with the finer particles passing through the finer mesh sieves and the coarser particles retained on the coarser mesh sieves.",
      height: "6rem",
    },
    {
      title: "SS Micro Feeder",
      subTitle: "",
      img: prod16,
      des: "A micro feeder is a precision feeding device specifically designed to handle materials in very small amounts, typically ranging from milligrams to grams to be used to accurately dispense small quantities of powdered or granular materials.They are commonly used in applications where precise control over the feeding rate and accuracy is critical, such as in the production of pharmaceutical tablets, laboratory research, and material testing.",
      height: "10.5rem",
    },
    {
      title: "Sedimentation Shaker",
      subTitle: "",
      img: prod17,
      des: "It is Used to measure the sedimentation (settling of particles in a liquid) value in flour. By controlling the speed and duration of the shaking, scientists can study the settling behavior of particles and determine properties such as particle size distribution, settling rate, and sedimentation volume.",
      height: "8rem",
    },
    {
      title: "Sieve Shaker",
      subTitle: "",
      img: prod18,
      des: "It is used to measure the refrection limits in grains.",
      height: "3rem",
    },
    {
      title: "Spectrometer",
      subTitle: "",
      img: prod12,
      des: "A spectrometer is a scientific instrument used to separate and measure spectral components of a physical phenomenon.",
      height: "3rem",
    },
    {
      title: "Whiteness Tester",
      subTitle: "",
      img: prod19,
      des: " A whiteness tester is a device used to measure the whiteness or brightness of flour samples.",
      height: "3rem",
    },
    {
      title: "Paddy Cleaner",
      subTitle: "Rice Mill Equipment",
      img: prod13,
      des: " It is used to remove various impurities including dust, stones, straw, and other foreign materials from paddy rice. ",
      height: "3rem",
    },
    {
      title: "Rice Polisher",
      subTitle: "Rice Mill Equipment",
      img: prod14,
      des: "It is used to remove the bran layer from brown rice to produce white rice to improve the appearance, texture, and shelf life of the rice.",
      height: "3rem",
    },
    {
      title: "Rice Sheller",
      subTitle: "Rice Mill Equipment",
      img: prod15,
      des: "It is used to remove the outer husk or hull from rice grains. Available in different sizes and capacities.",
      height: "3rem",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(0);

  return (
    <>
      <NavBar />
      <div className="product3">
        <div className="banner">
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={varient}>
              Driving Innovation
              <br />
              <motion.span
                variants={varient}
                style={{ color: "rgb(16, 192, 142)l" }}
              >
                with Precision Lab Equipment
              </motion.span>{" "}
            </motion.h3>
          </motion.div>
          <img src={prod3Banner} alt="" />
        </div>

        {/* para */}
        <div className="para">
          Step into the realm of precision and efficiency with our advanced lab
          equipment, meticulously designed to elevate the standards of the food
          processing industry. From Automatic Failing Number Apparatus to
          Infrared Moisture Meters, our cutting-edge tools empower you to
          achieve unparalleled accuracy in your production processes.
        </div>

        {/* section */}
        <div
          className="section"
          style={window.innerWidth < 900 ? { display: "none" } : {}}
        >
          {prod3Data.map((val, i) => {
            return (
              <div className="card" key={i}>
                <h3
                  style={
                    hoveredCard === i
                      ? {
                          fontWeight: "800",
                        }
                      : {}
                  }
                  onMouseOver={() => setHoveredCard(i)}
                >
                  {val.title}
                </h3>
                <h5>{val.subTitle}</h5>
                <p
                  style={
                    hoveredCard === i
                      ? { height: val.height, opacity: 1 }
                      : { heght: "0", opacity: 0 }
                  }
                >
                  {val.des}
                </p>
                <img
                  src={val.img}
                  alt=""
                  style={
                    hoveredCard != i
                      ? { display: "none" }
                      : i % 2 === 0
                      ? {
                          rotate: "-7.21deg",
                          top: `${i * 4.4}rem`,
                          opacity: "1",
                        }
                      : {
                          rotate: "7.21deg",
                          top: `${i * 4.4}rem`,
                          opacity: "1",
                        }
                  }
                />
              </div>
            );
          })}
        </div>

        {/* mobile-section */}
        <div
          className="mob-section"
          style={window.innerWidth >= 900 ? { display: "none" } : {}}
        >
          {prod3Data.map((val, i) => {
            return (
              <div className="card" key={i}>
                <img src={val.img} alt="" />
                <h3>{val.title}</h3>
                <h5>{val.subTitle}</h5>
                <p
                  style={{
                    height: "2.4rem",
                    fontSize: "0.5rem",
                    overflow: "hidden",
                    textAlign: "center",
                  }}
                >
                  {val.des}
                </p>
              </div>
            );
          })}
        </div>
        <PreFooter />

        {/* whatsapp */}
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default Product3;
