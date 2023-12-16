import React, { useEffect, useState } from 'react'
import './About.scss'
import img from '../../../public/AboutBan.png'
import HomeUSP from './HomeUSP/HomeUSP'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"
import axios from 'axios'


const varient = {
  initial:{
    x:-100,
    opacity:0
  },
  animate:{
    x:"0",
    opacity:1,
    transition:{
        duration:1,
        staggerChildren:0.5
    }
},
}

const varient2 = {
  initial:{
    y:100,
    opacity:0
  },
  whileInView:{
    y:"0",
    opacity:1,
    transition:{
        duration:1,
    }
},
}


export default function About() {

  const navigate = useNavigate();

  // const [data,setData]=useState('');
  // const [awd,setAwd]=useState();
  // const [ourTeam,setOurTeam]=useState();
  // const [whyAqc,setWhyAqc]=useState();
  // const [commitment,setCommitment]=useState();
 


 const [aboutData,setAboutData]=useState(' ');
 const [visionMission,setVisionMission]=useState();
  

const [commitment,setCommitment]=useState('');
const [awd,setAwd]=useState('');


const ImgURL=import.meta.env.VITE_REACT_APP_UPLOAD_URL;
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
          setVisionMission(Data.vision_mission?.data?.attributes);
         
        }
        console.log(res.data.data[0].attributes);
        
       
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
    fetchData();
    fetchCommetment();
    fetchAwd();
  },[])


  const backgroundImageStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    background: `url(${ImgURL}${aboutData?.Image?.data?.attributes?.url})`,
    width: "100%", 
    maxHeight: "55rem", 
    height: "calc(100vh - 100px)", 
    position: "relative", 
  };


// console.log(aboutData);
console.log(commitment);
// console.log(`${ImgURL}${aboutData?.Image?.data?.attributes?.url}`);
// console.log(awd)
  return (
    
    <>
    <NavBar />
    <div className="main-about">
    <div className="about-banner" 
    // style={backgroundImageStyle}
    >

           <div className="banner-gradient"></div>
           <motion.div className="banner-text" variants={varient} initial="initial" animate="animate">
            <motion.h3 variants={varient}><div dangerouslySetInnerHTML={{ __html: aboutData.Heading}} /></motion.h3>
            <motion.p variants={varient}><div dangerouslySetInnerHTML={{ __html: aboutData.Sub_Heading}} /> </motion.p>
           </motion.div>
      </div>
      <div className="intro">
      
       <div dangerouslySetInnerHTML={{ __html: aboutData.About_Information}} />
       <span style={{fontWeight:"800",cursor:"pointer",color:"#10C08E"}}> READ MORE</span> 
      </div>

      <motion.div variants={varient2} initial="initial" whileInView="whileInView" viewport={{once:true}} className="mission-vission">
         <motion.div className="card">
         <div dangerouslySetInnerHTML={{ __html: visionMission?.Vision}} />
         <div dangerouslySetInnerHTML={{ __html: visionMission?.Vision_Information}} />
         </motion.div>
         <motion.div className="card">
         <div dangerouslySetInnerHTML={{ __html: visionMission?.Mission}} />
         <div dangerouslySetInnerHTML={{ __html: visionMission?.Mission_Information}} />
         </motion.div>
      </motion.div>

      <div className="commitment">
        <div className="wrapper">
          <div className="left">
          <div dangerouslySetInnerHTML={{ __html: commitment?.Heading}} />
          </div>
          <div className="right">
          {/* <img src={`http://localhost:1337${commitment?.img?.data?.attributes?.url}`} alt="" /> */}
          </div></div>
      </div>

      <div className="usp">
        {/* <HomeUSP homeUsp={data.why_aqc}/> */}
      </div>

      <div className="team-section">
        <div className="wrapper">
           {/* <h3>{data.our_team?.heading}</h3>
           <p>{data.our_team?.desc}</p> */}
           <div className="horz-bar"></div>
           {/* {
          data.our_team?.team &&
          data.our_team?.team.map((item, index) => {
             return (
             <>
                <div className="team" key={index}>
                <h3>{item?.title}</h3>
                <p>{item?.info}</p>
               </div>
               <div className="horz-bar" ></div>
               </>
            );
           })
          } */}
           

      </div>
      </div>

        <div className="awards">
          {
            awd?.awards && awd?.awards?.data?.map((item,index)=>{
              return(
                
                  <img src={`http://localhost:1337${item?.attributes?.url}`} key={index} alt="" />
               
                
              )
            })
          }
          
          
        </div>
         
         <div className="contact">
             <div className="left">
               <h3>Together, Let's Build a Healthy world around us</h3>
               <p>Are you ready to take your food to the next level in terms of taste & nutritional value to build a healthier world around us?</p>
             </div>
             <div className="right">
              <button onClick={()=>navigate('/contact')}>Contact</button>
             </div>
         </div>
    </div>
      
      <Footer />
    </>
  )
}
