import React from "react";
import NavBar from "../NavBar/NavBar";
import prod1Banner from "/prod1-banner.jpg";
import "./Product1.scss";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Prod1Card from "./Prod1Card/Prod1Card";
import dairy from "/prod4/dairy-products 1.png";
import confec from "/prod4/top-view-delicious-sweetness-composition-cake-slices-macarons-candies-with-cup-tea-white-surface 1.png";
import flour from "/prod4/flour 1.png";
import rice from "/prod4/Rice 1.png";
import oil from "/prod4/Oil 1.png";
import Salt from "/prod4/Salt 1.jpg";
import Biscuits from "/prod4/Biscuits & Cookies 1.png";
import WhatsApp from "../WhatsApp/WhatsApp";

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

const Product1 = () => {
  const section2Data = [
    {
      title: "Flour",
      img: flour,
      des: "Enhance your flour’s edible & nutritional values with our premium fortification premixes for a healthier diet.",
      cursor: "/prod4/cursor/flour.png",
    },
    {
      title: "Rice",
      img: rice,
      des: "Experience the power of fortified rice with our cutting - edged premix ensuring every grain is packed with the goodness of vital nutrients.",
      cursor: "/prod4/cursor/rice.png",
    },
    {
      title: "Oil",
      img: oil,
      des: "We offer perfect fortification solution that brings together the goodness of essential vitamins and minerals and enhances the nutritional value of your cooking oils.",
      cursor: "/prod4/cursor/oil.png",
    },
  ];

  const section3Data = [
    {
      title: "Salt",
      img: Salt,
      des: "Our Salt fortification premixes make every grain of salt count, infusing your meals with added nutrition.",
      cursor: "/prod4/cursor/salt.png",
      height: "9rem",
    },
    {
      title: "Micronutrient Sprinklers Sachet",
      img: "/prod4/hand-scraper-are-close-up 1.jpg",
      des: "Our micronutrient premix sachets are ready to use solutions to fortify your every meal with essential nutrients.",
      cursor: "/prod4/cursor/sachet.png",
    },
    {
      title: "Biscuits & Cookies",
      img: Biscuits,
      des: "Give your biscuits & cookies a healthy & Tasty twist with our premium fortification premixes.",
      cursor: "/prod4/cursor/cookie.png",
      height: "7rem",
    },
  ];

  const section5Data = [
    {
      title: " DIETARY HEALTH SUPPLEMENTS",
      img: "/prod4/diatery.jpg",
      des: "Fuel Your Body, Elevate Your Health: Explore The Ultimate Micronutrient Boost with nutrient premixesfor Dietary Supplements",
      cursor: "/prod4/cursor/pills.png",
    },
    {
      title: " PHARMACEUTICALS",
      img: "/prod4/pharma.jpg",
      des: "Optimize Your Pharmaceuticals Formulations with our Advanced Micronutrient Solutions for Pharmaceutical Innovation",
      cursor: "/prod4/cursor/pills.png",
    },
    {
      title: "INFANT NUTRITION",
      img: "/prod4/infant.jpg",
      des: "Our infant premix is carefully formulated to provide a balanced mix of vitamins and minerals crucial for infant health. It is designed to be easily mixed into your baby's food or formula, making it simple to ensure they are getting the nutrients they need.",
      cursor: "/prod4/cursor/bottle.png",
    },
  ];

  const section7Data = [
    {
      title: "SUPPLEMENTARY NUTRITION PRODUCTS",
      img: "/prod4/supplements.jpg",
      des: "Our Micronutrient Premix is the perfect solution. Designed to fortify your products with essential vitamins and minerals, our premix ensures that every serving delivers maximum nutrition",
      cursor: "/prod4/cursor/pills.png",
    },
    {
      title: " RUSF/RUTF",
      img: "/prod4/RUSF.jpg",
      des: "Our micronutrient premixes for RUSF/RUTF are carefully crafted to provide a balanced blend of key micronutrients crucial for combating malnutrition",
    },
    {
      title: "MALT BASED PRODUCTS",
      img: "/prod4/malt.jpg",
      des: "Our micronutrient premixes for weaning foods are packed with vitamins and minerals crucial for your baby's growth. So, our premix is the perfect solution to support healthy growth and development of your little one.",
      cursor: "/prod4/cursor/malt.png",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="product1">
        <div className="banner">
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={varient}>
              Unlocking Health Potential: <br />
              <motion.span
                variants={varient}
                style={{ color: "rgb(16, 192, 142)" }}
              >
                Explore Our Cutting-Edge Micronutrient Premix Solutions Elevate
                Your Nutrition
              </motion.span>{" "}
            </motion.h3>
          </motion.div>
          <img src={prod1Banner} alt="prod1-banner" />
        </div>

        {/* section -1  */}
        <div className="section1">
          <div className="left">
            <p>
              Elevate nutrition with our certified micronutrient premixes,
              curated for optimal health and fortified with essential vitamins
              and minerals.
            </p>
            <div className="img-section">
              <Prod1Card
                title="Milk & Dairy Products"
                img={dairy}
                des="Fortify your milk and dairy products with our firtification premixes formulated with nutritional excellence."
                height="7rem"
                cursor="/prod4/cursor/milk.png"
              />
            </div>
          </div>

          <div className="right">
            <div className="img-section-mob">
              <Prod1Card
                title="Milk & Dairy Products"
                img={dairy}
                des="Fortify your milk and dairy products with our firtification premixes formulated with nutritional excellence."
                height="6rem"
              />
            </div>
            <div className="right-img">
              <Prod1Card
                title="Confectioners"
                img={confec}
                des="Our confectionery fortification premixes are perfect for adding nutrients to your chocolates, bars, cakes and 
other confectionery items. So indulge youeself in the guilt free feast."
                height="10rem"
                cursor="/prod4/cursor/cupCake.png"
              />
            </div>
          </div>
        </div>

        {/* section - 2 */}
        <div className="section2">
          {section2Data.map((val, i) => {
            return (
              <div style={{ width: "calc(33% - 10px)", height: "18rem" }}>
                <Prod1Card
                  title={val.title}
                  img={val.img}
                  key={i}
                  des={val.des}
                  height="12rem"
                  cursor={val.cursor}
                />
              </div>
            );
          })}
        </div>

        {/* section- 3 */}
        <div
          className="section3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {section3Data.map((val, i) => {
            return (
              <div style={{ width: "calc(33% - 10px)", height: "18rem" }}>
                <Prod1Card
                  title={val.title}
                  img={val.img}
                  key={i}
                  des={val.des}
                  height="8rem"
                  cursor={val.cursor}
                />
              </div>
            );
          })}
        </div>

        {/* section - 4 */}
        {/* <div className="section4">
          <div className="left">
            <Prod1Card
              title="Salt"
              img={Salt}
              des="Our Salt fortification premixes make every grain of salt count, infusing your meals with added nutrition."
              height="9rem"
              cursor="/prod4/cursor/salt.png"
            />
          </div>
          <div className="right">
            <Prod1Card
              title="Biscuits & Cookies"
              img={Biscuits}
              des="Give your biscuits & cookies a healthy & Tasty twist with our premium fortification premixes."
              height="7rem"
              cursor="/prod4/cursor/cookie.png"
            />
          </div>
        </div> */}

        {/* section-5 */}
        <div className="section2">
          {section5Data.map((val, i) => {
            return (
              <div style={{ width: "calc(33% - 10px)", height: "18rem" }}>
                <Prod1Card
                  title={val.title}
                  img={val.img}
                  key={i}
                  des={val.des}
                  height="12rem"
                  cursor={val.cursor}
                />
              </div>
            );
          })}
        </div>

        {/* section-6 */}
        <div className="section4">
          <div className="left">
            <Prod1Card
              title="MEAT & MEAT PRODUCTS"
              img="/prod4/meat.jpg"
              des="Make your meat products stand out in the market by offering consumers a healthier option that doesn't 
compromise on taste. With our Micronutrient Premix for Meat & Meat Products, you can boost the 
nutritional value of your products and cater to the growing demand for healthier food choices."
              height="10rem"
              cursor="/prod4/cursor/meat.png"
            />
          </div>
          <div className="right">
            <Prod1Card
              title="SAVOURY & SNACKS"
              img="/prod4/snacks.jpg"
              des=" Savor the Flavor, Boost the Nutrition! Our Micronutrient Premix for Savory Snacks makes snacking a guilt
free pleasure. Our premixes are made with the highest quality ingredients to ensure you get the best possible 
product."
              height="7rem"
              cursor="/prod4/cursor/panCake.png"
            />
          </div>
        </div>

        {/* section-7 */}
        <div className="section2">
          {section7Data.map((val, i) => {
            return (
              <div style={{ width: "calc(33% - 10px)", height: "18rem" }}>
                <Prod1Card
                  title={val.title}
                  img={val.img}
                  key={i}
                  des={val.des}
                  height="12rem"
                  cursor={val.cursor}
                />
              </div>
            );
          })}
        </div>

        {/* customized Section */}
        <div className="section3">
          <Prod1Card
            title="Customized formulations available as per customer's requirements"
            img="/prod4/customised.jpg"
            des="You can customized your formulations as per your requirements"
            height="4rem"
          />
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

export default Product1;
