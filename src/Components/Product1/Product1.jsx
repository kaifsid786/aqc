import React, { useEffect, useState } from "react";
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
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import axios from "axios";

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

  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const [data,setData]=useState('');
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/micronutrient-premixes?populate[0]=Banner_Image&populate[1]=Micronutrient_Products.Image&populate[2]=Micronutrient_Products.Icon`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const profData = res.data.data[0].attributes;
          console.log(profData);
          setData(profData);
          
        }

        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
              {ReactHtmlParser(data?.Banner_Heading)}
            </motion.h3>
          </motion.div>
          <img src={`${ImgURL}${data?.Banner_Image?.data?.attributes?.url}`} alt="prod1-banner" />
        </div>

        {/* section -1  */}
        {/* <div className="section1">
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
        </div> */}


{/* section2 */}
        <div
          className="section2"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {data?.Micronutrient_Products?.map((val, i) => {
            return (
              <div style={{ width: "100%", height: "18rem" }}>
                <Prod1Card
                  title={val?.Heading}
                  img={val.img}
                  key={i}
                  des={val?.Description}
                  height="12rem"
                  cursor={val.cursor}
                />
              </div>
            );
          })}
        </div>

        {/* section - 4 */}
        

        

        {/* section-6 */}
        

        {/* section-7 */}
        

       
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
