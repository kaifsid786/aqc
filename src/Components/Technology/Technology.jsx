import './Technology.scss';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function Technology() {
   const navigate = useNavigate();
   useEffect(() => {
      const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
      const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      const fetchData = async () => {
        try {
          const res = await axios.get(`${baseURL}/technologies?populate=*`, {
            headers: headers,
          });
  
          
          console.log(res.data); 
        } catch (error) {
          console.error(error); // Log any potential errors
        }
      };
  
      fetchData(); // Call the fetchData function to initiate the API request
  
    }, []);
  return (
    <>     
    <NavBar />
    <div className="main-tech">
         <div className="banner">
            <img src="/TechBan.png" alt="" />
         </div>
         <div className="intro">
            <h3>TECHNOLOGY</h3>
            <p> <span style={{fontWeight:"600"}}>At AQC Chem. Lab Pvt. Ltd.</span>, innovation is in our DNA. It is showcased through the cutting edge technologies that drive our food processing solutions. We harness a range of state-of-the-art technologies that redefine food science, enhancing product quality, efficacy, and consumer experience.</p>
         </div>
         <div className="cards">
             <div className="card-1">
                 <div className="left">
                    <h3>Encapsulation:</h3>
                    <p>Safeguarding the goodness</p>
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    Our encapsulation technology is a cornerstone of product stability and controlled release. By encasing active ingredients within protective shells, we ensure their preservation until consumption, maximising potency and bioavailability. This empowers our partners to offer products with enhanced shelf life and targeted nutrient delivery.
                    </p>
                 </div>
                 <div className="right">
                    <img src="/Tech1.png" alt="" />
                 </div>
             </div>
             <div className="card-1 type2">
                 <div className="left">
                    <h3>Spray Drying: :</h3>
                    <p>The Art of Transformations</p>
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    Our encapsulation technology is a cornerstone of product stability and controlled release. By encasing active ingredients within protective shells, we ensure their preservation until consumption, maximising potency and bioavailability. This empowers our partners to offer products with enhanced shelf life and targeted nutrient delivery.
                      </p>
                 </div>
                 <div className="right">
                    <img src="/Tech3.jpg" alt="" />
                 </div>
             </div>
             <div className="card-1 type3">
                 <div className="left">
                    <h3>Blending:</h3>
                    <p>The Art of  Nutrient Synergy</p>
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    Our blending technology is an alchemy of precision and innovation. By combining diverse ingredients, we create nutrient-rich formulations that resonate with modern dietary demands. This process ensures uniform distribution of components, yielding products that deliver consistent nutritional impact.
                      </p>
                 </div>
                 <div className="right">
                 <p style={window.innerWidth<=500?{display:"none"}:{}}>Our blending technology is an alchemy of precision and innovation. By combining diverse ingredients, we create nutrient-rich formulations that resonate with modern dietary demands. This process ensures uniform distribution of components, yielding products that deliver consistent nutritional impact.</p>
                   <img style={window.innerWidth>500?{display:"none"}:{width:"100%"}} src="/Tech4.jpg" alt="" />
                 </div>
             </div>
             <div className="card-1 type2">
                 <div className="left">
                    <h3>Granulation::</h3>
                    <p>Solidifying Quality</p>
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    Granulation is our pathway to product cohesion and durability. By mixing and matching  fine particles, we ensure uniformity and homogeneity, elevating product handling and dissolution properties. The result is nutritional products that are as robust as they are effective.
                      </p>
                 </div>
                 <div className="right">
                 <img src="/Tech5.jpg" alt="" />
                 </div>
             </div>
             <div className="card-1">
                 <div className="left">
                    <h3>Extrusion:</h3>
                    <p>Shaping Nutritional Excellence</p>
                    <p className='p2' style={window.innerWidth>500?{display:"none"}:{}}>
                    This is where art meets nutrition. Extrusion technology shapes our commitment to nutritional excellence. It allows us to craft products with unique textures and structures while keeping all nutritional value. This technology is particularly vital for sculpting nutritional masterpieces for your taste buds. In the world of food processing, we are not just keeping up with the standards but we are leading the way with these mind blowing technologies. 
                      </p>
                 </div>
                 <div className="right">
                 <img src="/Tech2.jpg" alt="" />
                 </div>
             </div>
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
