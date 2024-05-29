import NavBar from "../NavBar/NavBar";
import "./Contract.scss";
import img from "../../../public/Contr2.png";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PreFooter from "../PreFooter/PreFooter";
import WhatsApp from "../WhatsApp/WhatsApp";
import { useEffect, useState } from "react";
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

export default function Contract() {
  const ImgURL=import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const navigate = useNavigate();
  const [banner,setBanner]=useState('')
  
  
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
  const headers = {
    Authorization: `Bearer ${token}`, // Using template literals for cleaner code
  };
    const fetchData = async () => {
      
      try {
        const res = await axios.get(`${baseURL}/contracts?populate[0]=Banner_Image&populate[1]=Contract_Manifacture_card1.Image&populate[2]=Contract_Manifacture_card2.Image&populate[3]=Contract_Manifacture_card3.Image&populate[4]=Collaboration_Image` , {
          headers: headers,
        });
        // console.log(res.data.data[0].attributes); 
        if(res.data){
          const contractData=res.data.data[0].attributes;
          setBanner(contractData);
          console.log(contractData);
          // setService(contractData?.contract_manufacturer_service?.data?.attributes);
          
          // console.log(contractData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    

    fetchData();
    
  }, []);

  return (
    <>
      <NavBar />
      <div className="main-contract">
        <div className="banner" style={{background:`url(${ImgURL}${banner?.Banner_Image?.data?.attributes?.url})`}}>
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            {ReactHtmlParser(banner?.Banner_Information)}
          </motion.div>
        </div>

        <div className="services">
          <div className="wrapper"> 
            <h3>
              {ReactHtmlParser(banner?.Contract_Manifacture_Service_Heading)}
            </h3>
            <div className="contents">
              <div className="card">

                <h6>
                  <img src={`${ImgURL}${banner?.Contract_Manifacture_card1?.Image?.data?.attributes?.url}`} alt="" />
                </h6>
                <h3>{banner?.Contract_Manifacture_card1?.Heading}</h3>
                <p>
                  {banner?.Contract_Manifacture_card1?.Description}
                </p>
              </div>
              <div className="card">
                <h6>
                  <img src={`${ImgURL}${banner?.Contract_Manifacture_card2?.Image?.data?.attributes?.url}`} alt="" />
                </h6>
                <h3>{banner?.Contract_Manifacture_card2?.Heading}</h3>
                <p>
                  {banner?.Contract_Manifacture_card2?.Description}
                </p>
              </div>
              <div className="card">
              <h6>
                  <img src={`${ImgURL}${banner?.Contract_Manifacture_card3?.Image?.data?.attributes?.url}`} alt="" />
                </h6>
                <h3>{banner?.Contract_Manifacture_card3?.Heading}</h3>
                <p>
                  {banner?.Contract_Manifacture_card3?.Description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="commitment">
          <div className="wrapper">
            <div className="left">
              {ReactHtmlParser(banner?.Collaborate_with_confidence )}
              <button>Get Started</button>
            </div>
            <div className="right">
              <img src={`${ImgURL}${banner?.Collaboration_Image?.data?.attributes?.url}`} alt="" />
            </div>
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
}
