import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import "./Product2.scss";
import prod2Banner from "/prod2-banner.jpg";
import dough from "/prod3/homemade-bread 1.jpg";
import flavour from "/prod3/tasty-flat-lay-assortment-mixed-chocolate 1.jpg";
import improv from "/prod3/composition-pasta 1.jpg";
import WhatsApp from "../WhatsApp/WhatsApp";
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

const Product2 = () => {
  const [selectBorder, setSelectedBorder] = useState(0);
  const imgs = [dough, flavour, improv];
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const title = ["Dough Softeners", "Flavours", "Food Improvers"];
  const des = [
    "Elevate your dough with our innovative Dough Softeners and experience better texture, taste, fluff & volume in the food products.",
    "Extending diverse range of liquid & dry flavors to accelerate the aroma & taste of your cakes, confectionary, chocolates, desserts, ice creams, shakes, Juices, breads and a variety of baked & non baked goods & beverages.",
    " AQC is offering food improvers to elevate the texture & taste of food like noodles, pastas, vermicelli, cereals etc.",
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <NavBar />
      <div className="product2">
        <div className="banner">
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={varient}>
              Crafting Culinary <br />
              <motion.span
                variants={varient}
                style={{ color: "rgb(16, 192, 142)" }}
              >
                Excellence with our quality food additives
              </motion.span>{" "}
            </motion.h3>
          </motion.div>
          <img src={prod2Banner} alt="" />
        </div>

        <div className="para">
          Discover the art of flavor enhancement and food preservation with AQC
          Chem Lab's versatile food additives. Elevate your culinary creations
          with our range of natural extracts and functional additives, ensuring
          delicious taste and extended freshness. Unleash your creativity and
          take your dishes to new heights with our premium food additives,
          making every meal a delightful experience.
        </div>

        {/* section */}
        <div className="section">
          <div className="left">
            <div className="info">
              <h3>{title[index]}</h3>
              <p>{des[index]}</p>
              <p style={{ fontWeight: "600" }}>
                **customized formulations available as per customer's
                requirements
              </p>
            </div>
            <div className="types">
              <h4
                style={
                  selectBorder === 0
                    ? { borderBottom: "2px solid  #10C08E", color: "#10C08E" }
                    : {}
                }
                onClick={() => {
                  setSelectedBorder(0);
                  setSelectedImg(imgs[0]);
                  setIndex(0);
                }}
              >
                Dough Softeners
              </h4>
              <h4
                style={
                  selectBorder === 1
                    ? { borderBottom: "2px solid  #10C08E", color: "#10C08E" }
                    : {}
                }
                onClick={() => {
                  setSelectedBorder(1);
                  setSelectedImg(imgs[1]);
                  setIndex(1);
                }}
              >
                Flavours
              </h4>
              <h4
                style={
                  selectBorder === 2
                    ? { borderBottom: "2px solid  #10C08E", color: "#10C08E" }
                    : {}
                }
                onClick={() => {
                  setSelectedBorder(2);
                  setSelectedImg(imgs[2]);
                  setIndex(2);
                }}
              >
                Food Improvers
              </h4>
            </div>
          </div>
          <div className="right">
            <img src={selectedImg} alt="" />
          </div>
        </div>
        <PreFooter />

        {/* whatsapp */}
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product2;
