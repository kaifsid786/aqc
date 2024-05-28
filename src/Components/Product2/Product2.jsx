import React, { useEffect, useState } from "react";
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
import axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

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
          `${baseURL}/food-additives?populate[0]=Banner_Image&populate[1]=Food_Additives_Products.Image`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const profData = res.data.data[0].attributes;
          // console.log(profData);
          setData(profData);
          
        }
      } catch (error) {
        console.error(error);
      }
    };

    

    fetchData();
    
  }, []);
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
            {ReactHtmlParser(data?.Banner_Heading)}
            </motion.h3>
          </motion.div>
          <img src={`${ImgURL}${data?.Banner_Image?.data?.attributes?.url}`} alt="" />
        </div>

        <div className="para">
          {data?.Information}
        </div>

        {/* section */}
        <div className="section">
          <div className="left">
            <div className="info">
              <h3>{data?.Food_Additives_Products?.[index]?.Heading}</h3>
              <p>{data?.Food_Additives_Products?.[index]?.Description}</p>
              <p style={{ fontWeight: "600" }}>
                **customized formulations available as per customer's
                requirements
              </p>
            </div>
            
            <div className="types">

            {
              Array.isArray(data?.Food_Additives_Products) && data?.Food_Additives_Products?.map((val,index)=>{
                return(
                  
                      <h4
                        style={
                          selectBorder === index
                            ? { borderBottom: "2px solid  #10C08E", color: "#10C08E" }
                            : {}
                        }
                        onClick={() => {
                          setSelectedBorder(index);
                          setSelectedImg(`${ImgURL}${val?.Image?.data?.attributes?.url}`);
                          setIndex(index);
                        }}
                      >
                        {val?.Heading}
                      </h4>
                    
                )
              })
            }
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
