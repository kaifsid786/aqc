import NavBar from '../NavBar/NavBar';
import './Contract.scss';
import img from '../../../public/Contr2.png'
import Footer from '../Footer/Footer';
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

export default function Contract() {

  const navigate = useNavigate();

  const [banner,setBanner]=useState('')
  const [service,setService]=useState('');
  const [collaborater,setCollaborater]=useState('');
  const [bottomBanner,setBottomBanner]=useState('');
// console.log(banner)
// console.log(import.meta.env.VITE_REACT_APP_API_TOKEN);
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
  const headers = {
    Authorization: `Bearer ${token}`, // Using template literals for cleaner code
  };
    const fetchData = async () => {
      
      try {
        const res = await axios.get(`${baseURL}/contract-banners?populate=*`, {
          headers: headers,
        });
        // console.log(res.data.data[0].attributes); 
        if(res.data){
          const contractData=res.data.data[0].attributes;
          setBanner(contractData);
          setService(contractData?.contract_manufacturer_service?.data?.attributes);
          
          setBottomBanner(contractData?.contract_bottom_banner.data?.attributes);
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
        setCollaborater(collab);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    fetchCollaborator();
  }, []);
 
// console.log(banner?.Sub_Heading[0].children[0].text)

// console.log(banner?.Heading)
  return (
  <>
  <NavBar />
     <div className="main-contract">
         <div className="banner"
         style={{
          background: `url(http://localhost:1337${banner?.BannerImg?.data?.attributes?.url})`
        }}
          >
             <div className="banner-gradient"></div>
               <motion.div className="banner-text" variants={varient} initial="initial" animate="animate">
              
  
               <div dangerouslySetInnerHTML={{ __html: banner.Heading }} />
               <div dangerouslySetInnerHTML={{ __html: banner.Sub_Heading }} />
               
               
               
               </motion.div>
             </div>

         <div className="services">
             <div className="wrapper">
             <div dangerouslySetInnerHTML={{ __html: service.Heading }} />
                  <div className="contents">
                       <div className="card">
                        
                         <div dangerouslySetInnerHTML={{ __html: service.Card1 }} />
                          {/* <h6>{service?.heading && service?.serviceInfo[0]?.SNO}</h6>
                          <h3>{service?.heading && service?.serviceInfo[0]?.heading}</h3>
                          <p>{service?.heading && service?.serviceInfo[0]?.info}</p> */}
                       </div> 
                      
                       <div className="card">
                       <div dangerouslySetInnerHTML={{ __html: service.Card2 }} />
                          {/* <h6>{service?.heading && service?.serviceInfo[1]?.SNO}</h6>
                          <h3>{service?.heading && service?.serviceInfo[1]?.heading}</h3>
                          <p>{service?.heading && service?.serviceInfo[1]?.info}</p> */}
                       </div>
                       <div className="card">
                       <div dangerouslySetInnerHTML={{ __html: service.Card3 }} />
                          {/* <h6>{service?.heading && service?.serviceInfo[2]?.SNO}</h6>
                          <h3>{service?.heading && service?.serviceInfo[2]?.heading}</h3>
                          <p>{service?.heading && service?.serviceInfo[2]?.info} </p> */}
                       </div>
                  </div>
             </div>
         </div>

         <div className="commitment">
           <div className="wrapper">
              <div className="left">
             
             <div dangerouslySetInnerHTML={{ __html: collaborater.Heading }} />
             
             <p>
             <div dangerouslySetInnerHTML={{ __html: collaborater.Information }} />
             </p>
             <button>Get Started</button>
          </div>
            <div className="right">
            <img src={`http://localhost:1337${collaborater?.img?.data?.attributes?.url}`} alt="" />

             </div>
          </div>
      </div>

      <div className="contact">
             <div className="left">
               <h3><div dangerouslySetInnerHTML={{ __html: bottomBanner.Heading}} /></h3>
               <p><div dangerouslySetInnerHTML={{ __html: bottomBanner.Sub_Heading }} /> </p>
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
