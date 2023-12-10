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
  // const [visionMission,setVisionMission]=useState();


  const [data, setData] = useState({
    headerInfo: '',
    aboutImg:'',
    desc1: '',
    desc2: '',
    
    our_team: '',
    vision_mission: '',
    why_aqc: '',
    
    // Add other attributes here with default values if needed
  });

  

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
        if (res.data?.data && res.data.data.length > 0) {
          const aboutData = res.data.data[0].attributes;
          setData({
            aboutImg:aboutData.img || '',
            headerInfo: aboutData.headerInfo || '',
            desc1: aboutData.desc1 || '',
            desc2: aboutData.desc2 || '',
          
            our_team: aboutData.our_team?.data?.attributes || '',
            vision_mission: aboutData?.vision_mission?.data?.attributes || '',
            why_aqc: aboutData.why_aqc?.data?.attributes || '',
            
            // Update with other attributes as needed
          });
          
        }
        console.log(res.data.data[0]);
        
       
      } catch (error) {
        console.log(error);
      }
    }

    const fetchCommitment=async()=>{
      try {
        const res=await axios.get(`${baseURL}/commitments?populate=*`,{ 
          headers:headers
        })
        const commitmentData=res?.data?.data[0].attributes;
        // console.log(commitmentData);
        setCommitment(commitmentData);
      } catch (error) {
        console.log(error)
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
    fetchData();
    fetchCommitment();
    fetchAwd();
  },[])

// console.log("http://localhost:1337/"+"data?.aboutImg?.data?.attributes?.url");
const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

// console.log(ImgURL)
// console.log(awd)
  return (
    
    <>
    <NavBar />
    <div className="main-about">
      <div className="about-banner" style={{
           background: `url( "http://localhost:1337"+"/data?.aboutImg?.data?.attributes?.url")`
      }}>
           <div className="banner-gradient"></div>
           <motion.div className="banner-text" variants={varient} initial="initial" animate="animate">
            <motion.h3 variants={varient}>We take “ <motion.span variants={varient} style={{color:"#10C08E"}}>Your Wish, Our Command!”</motion.span> very seriously.</motion.h3>
            <motion.p variants={varient}>{data.headerInfo}  </motion.p>
           </motion.div>
      </div>
      <div className="intro">
       
       {/* Embarking on our journey in 2009, <span style={{fontWeight:"800"}}>AQC Chem</span> set out with a grand vision: to transform the world of nutrition through innovation and sheer excellence. Born with the minds of a team from industry experts and right from the start our dedication was clear– to seamlessly blend technology and culinary science into a harmonious union.  */}
       {data.desc1}
        <br /> <br />
       
       {/* Through years of learning, we honed our expertise and skills, prioritising research and development and we swiftly emerged as a pioneering presence in the nutrition domain. In our early years we took time to deeply understand industry's intricacies, guiding us to customise our offerings to meet specific requisites. As time passed, our unwavering dedication to quality and precision propelled us to create our flagship products – micronutrient premixes, nutraceutical solutions, and specialised laboratory equipment. These pillars of innovation not only enhanced the nutritional quotient of foods but also revolutionised production methodologies, setting new industry benchmarks. <span style={{fontWeight:"800",cursor:"pointer",color:"#10C08E"}}>READ MORE</span>  */}
       {data.desc2}
       <span style={{fontWeight:"800",cursor:"pointer",color:"#10C08E"}}> READ MORE</span> 
      </div>

      <motion.div variants={varient2} initial="initial" whileInView="whileInView" viewport={{once:true}} className="mission-vission">
         <motion.div className="card">
            <h3>{data.vision_mission?.vision}</h3>
            <p>{data.vision_mission?.visionInfo}</p>
         </motion.div>
         <motion.div className="card">
            <h3>{data.vision_mission?.mission}</h3>
            <p>{data.vision_mission?.missionInfo}</p>
         </motion.div>
      </motion.div>

      <div className="commitment">
        <div className="wrapper">
          <div className="left">
            <h3>{commitment?.title} </h3>
            <p>{commitment?.info1}
              <br /> <br />
              {commitment?.info2}
            </p> 
          </div>
          <div className="right">
          <img src={`http://localhost:1337${commitment?.img?.data?.attributes?.url}`} alt="" />
          </div></div>
      </div>

      <div className="usp">
        <HomeUSP homeUsp={data.why_aqc}/>
      </div>

      <div className="team-section">
        <div className="wrapper">
           <h3>{data.our_team?.heading}</h3>
           <p>{data.our_team?.desc}</p>
           <div className="horz-bar"></div>
           {
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
          }
           

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
