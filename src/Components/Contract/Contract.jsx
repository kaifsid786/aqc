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
        const res = await axios.get(`${baseURL}/contracts?populate=*`, {
          headers: headers,
        });
        // console.log(res.data.data[0].attributes); 
        if(res.data){
          const contractData=res.data.data[0].attributes;
          setBanner(contractData);
          setService(contractData?.contract_manufacturer_service?.data?.attributes);
          
          // console.log(contractData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const fetchCollaborator=async()=>{
      try {
        const res = await axios.get(`${baseURL}/collaborator-with-confidences?populate=*`, {
          headers: headers,
        });
       
        const collab=res.data.data[0].attributes;
        console.log(collab);
       
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    fetchCollaborator();
  }, []);

  return (
    <>
      <NavBar />
      <div className="main-contract">
        <div className="banner">
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
              {ReactHtmlParser(banner?.contract_manufacturer_services?.data?.[0]?.attributes?.Heading)}
            </h3>
            <div className="contents">
              <div className="card">
                {ReactHtmlParser(banner?.contract_manufacturer_services?.data?.[0]?.attributes?.Card1)}
              </div>
              <div className="card">
                {ReactHtmlParser(banner?.contract_manufacturer_services?.data?.[0]?.attributes?.Card2)}
              </div>
              <div className="card">
                {ReactHtmlParser(banner?.contract_manufacturer_services?.data?.[0]?.attributes?.Card3)}

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
