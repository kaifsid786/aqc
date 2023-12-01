import NavBar from '../NavBar/NavBar';
import './Contract.scss';
import img from '../../../public/Contr2.png'
import Footer from '../Footer/Footer';
import {motion} from "framer-motion";

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
  return (
  <>
  <NavBar />
     <div className="main-contract">
         <div className="banner">
             <div className="banner-gradient"></div>
               <motion.div className="banner-text" variants={varient} initial="initial" animate="animate">
               <motion.h3 variants={varient}>We bring  <motion.span variants={varient} style={{color:"#10C08E"}}>years of experience & expertise</motion.span> to the table at AQC</motion.h3>
               <motion.p variants={varient}>which make us your trusted partner in contract manufacturing solutions. The commitment to quality, innovation and precision sets us apart from others in the industry.  </motion.p>
               </motion.div>
             </div>

         <div className="services">
             <div className="wrapper">
                 <h3>OUR <span style={{color:"#10C08E"}}>CONTRACT MANUFACTURING</span> SERVICES</h3>
                  <div className="contents">
                       <div className="card">
                          <h6>01</h6>
                          <h3>Custom Made Formulations:</h3>
                          <p>AQC Chem Pvt Ltd understands that there cannot be one solution for all. The team of experts work closely to develop tailor made solutions to cater your exact specifications.</p>
                       </div>
                       <div className="card">
                          <h6>02</h6>
                          <h3>State-of-the art Facility:</h3>
                          <p>AQC Chem Pvt Ltd understands that there cannot be one solution for all. The team of experts work closely to develop tailor made solutions to cater your exact specifications.</p>
                       </div>
                       <div className="card">
                          <h6>03</h6>
                          <h3>Quality Assurance</h3>
                          <p>AQC Chem Pvt Ltd understands that there cannot be one solution for all. The team of experts work closely to develop tailor made solutions to cater your exact specifications.</p>
                       </div>
                  </div>
             </div>
         </div>

         <div className="commitment">
           <div className="wrapper">
              <div className="left">
             <h3>Collaborate with confidence </h3>
             <p>
              As a contract manufacturer, choosing our company as a partner means choosing a team which is dedicated to your success. The experience, commitment of quality and focused innovation our company holds ensure that our clients get top-tier service that meet your expectations.
             </p>
             <button>Get Started</button>
          </div>
            <div className="right">
              <img src={img} alt="" />
             </div>
          </div>
      </div>

      <div className="contact">
             <div className="left">
               <h3>A journey towards a healthy lifestyle.</h3>
               <p>We promise to turn your vision into reality and be your partner in contract manufacturing experience. </p>
             </div>
             <div className="right">
              <button>Contact</button>
             </div>
         </div>

     </div>

     <Footer />
  </>
  )
}
