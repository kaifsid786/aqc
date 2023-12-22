import './Technology.scss';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Technology() {
  const [heading,setHeading]=useState(' ');
  const [techMethods,setTechMethods]=useState(' ');
   const navigate = useNavigate();

   const ImgURL=import.meta.env.VITE_REACT_APP_UPLOAD_URL;
   useEffect(() => {
      const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
      const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      const fetchData = async () => {
        try {
          const res = await axios.get(`${baseURL}/technologies?populate[technology_methods][populate]=*`, {
            headers: headers,
          });
          if(res.data){
            const techData=res.data.data[0].attributes;
            setHeading(techData);
            setTechMethods(techData?.technology_methods);
          }
          
          // console.log(res.data); 
        } catch (error) {
          console.error(error); 
        }
      };
  
      fetchData(); 
  
    }, []);
    console.log(techMethods.data);
  return (
    <>     
    <NavBar />
    <div className="main-tech">
         <div className="banner">
            <img src="/TechBan.png" alt="" />
         </div>
         <div className="intro">
            <h3><div dangerouslySetInnerHTML={{ __html: heading.Heading }} /></h3>
            <p> <span style={{fontWeight:"600"}}><div dangerouslySetInnerHTML={{ __html: heading.Sub_Heading
 }} /></span></p>
            
            
         </div>
         <div className="cards">

          {
            techMethods?.data?.map((item,ind)=>{
              const tech = item.attributes;
              // console.log(tech);
              return(
                <div className={ind%2==0?"card-1 type2":"card-1 type3"} key={ind}>
                 <div className="left">
                    {/* <h3>Encapsulation:</h3>
                    <p>Safeguarding the goodness</p> */}
                    <div dangerouslySetInnerHTML={{ __html: tech.Heading }} />
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    <div dangerouslySetInnerHTML={{ __html: tech.Information}} />
                    </p>
                 </div>
                 <div className="right">
                 <img src={`${ImgURL}${tech?.Image?.data?.attributes?.url}`} alt="" />
                 </div>
             </div>
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
  );
}
