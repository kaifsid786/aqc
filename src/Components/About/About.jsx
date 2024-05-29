import React, { useEffect, useState } from "react";
import "./About.scss";
import img from "../../../public/AboutBan.png";
import WhatsApp from "../WhatsApp/WhatsApp";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Awd from "../Awd/Awd";
import PreFooter from "../PreFooter/PreFooter";
import quality from "/qualityAss.svg";
import innovation from "/innovation.svg";
import sustain from "/sustain.svg";
import axios from 'axios' 
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

const varient2 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const uspCard = [
  {
    title: "Quality Assurance",
    des: "Stringent quality control measures and commitment to source the finest materials",
    img: quality,
  },
  {
    title: "Innovation",
    des: "Rigorously looking for new ways to stay ahead in an ever evolving industry.",
    img: innovation,
  },
  {
    title: "Sustainability",
    des: "Seeking eco-friendly practices and packaging options to strive to minimise carbon footprint ",
    img: sustain,
  },
];

export default function About() {
  const navigate = useNavigate();
  const ImgURL=import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const [aboutData,setAboutData]=useState(' ');

  const [whyAqc,setWhyAqc]=useState();
const [ourTeam,setOurTeam]=useState();
const [commitment,setCommitment]=useState('');
const [awd,setAwd]=useState('');
  useEffect(()=>{
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`, // Using template literals for cleaner code
    };
    const fetchData=async()=>{
      try {
        
        const res=await axios.get(`${baseURL}/abouts?populate=*`,{ 
          headers:headers
        })
        if(res.data){
          const Data=res.data.data[0].attributes;
          setAboutData(Data);
          
         setOurTeam(Data.our_teams);
        }
        // console.log(res.data.data[0].attributes);
        
       
      } catch (error) {
        console.log(error);
      }
    }

    

    const fetchAwd=async()=>{
      try {
        const res=await axios.get(`${baseURL}/awards?populate=*`,{ 
          headers:headers
        })
        const awdData=res?.data?.data[0].attributes;
        setAwd(awdData)
      } catch (error) {
        console.log(error);
      }
    }
    const fetchCommetment=async()=>{
      try {
        const res=await axios.get(`${baseURL}/our-commitments?populate=*`,{ 
          headers:headers
        })
        const cmt=res?.data?.data[0].attributes;
        setCommitment(cmt);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchWhy=async()=>{
      try {
        const res=await axios.get(`${baseURL}/why-aqcs?populate=*`,{ 
          headers:headers
        })
        const why=res?.data?.data[0].attributes;
        setWhyAqc(why);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    fetchCommetment();
    fetchAwd();
    fetchWhy();
  },[])

  return (
    <>
      <NavBar />
      <div className="main-about">
        <div className="about-banner" style={{background:`url(${ImgURL}${aboutData?.Banner_Image?.data?.attributes?.url})`}}>
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={varient}>
              <div dangerouslySetInnerHTML={{ __html: aboutData.Heading}} />
            </motion.h3>
            <motion.p variants={varient}>
              <div dangerouslySetInnerHTML={{ __html: aboutData.Sub_Heading}} />
            </motion.p>
          </motion.div>
        </div>
        <div className="intro">
          <div dangerouslySetInnerHTML={{ __html: aboutData.About_Information}} />
          {/* <span
            style={{
              fontWeight: "500",
              cursor: "pointer",
              color: "#10C08E",
              textDecoration: "underline",
            }}
          >
            READ MORE
          </span> */}
        </div>

        <motion.div
          variants={varient2}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mission-vission"
        >
          <motion.div className="card">
            <div dangerouslySetInnerHTML={{ __html: aboutData.Vision}} />
          </motion.div>
          <motion.div className="card about-type2">
            <div dangerouslySetInnerHTML={{ __html: aboutData.Mission}} />
          </motion.div>
        </motion.div>

        <div className="commitment">
          <div className="wrapper">
            <div className="left">
              <div dangerouslySetInnerHTML={{ __html: aboutData.Commitment}} />
            </div>
            <div className="right">
            <img src={`${ImgURL}${aboutData?.Commitment_Image?.data?.attributes?.url}`} alt="" />
            </div>
          </div>
        </div>

        <motion.div
          className="usp"
          initial={{
            x: "-5rem",
            opacity: 0,
          }}
          whileInView={{
            x: "0",
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          {ReactHtmlParser(aboutData?.Why_Aqc)}

          <div className="usp-wrapper">
            {aboutData?.why_aqc_cards?.data.map((val,index) => {
              return (
                <div className="card" key={index}>
                  {ReactHtmlParser(val?.attributes?.Card)}
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="team-section">
          {/* <div className="wrapper">
            <h3>Our Team</h3>
            <p>At AQC Chem Pvt Ltd, Our core values are -</p>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Yash Raj Chaudhary</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Sulekha Naina</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Vaibhav Singhal</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Roshan Mehta</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Raghav Kulkarni</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
          </div> */}
          <div className="wrapper">
            {ReactHtmlParser(aboutData?.Our_Team)}
          </div>
        </div>

        <div
          className="awards"
          style={window.innerWidth <= 480 ? { display: "none" } : {}}
        >
          <Awd Certifications={aboutData?.Certifications}/>
        </div>
        {window.innerWidth <= 480 ? <Awd /> : ""}

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
