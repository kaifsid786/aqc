import React, { useEffect, useState } from "react";
import "./PropertyCard.css"
import ingredient from "../../images/ingredient-bags-full-flour.png";
import milk from "../../images/milk-products-wooden-table.png";
import rice from "../../images/various-type-rice.png";
import pills from "../../images/arrangement-with-pills-container.png";
import wooden from "../../images/stack-whole-meal-cookies-wooden-background.png";
import baby from "../../images/view-baby-food-with-apple.png";
import blue from "../../images/blue-capsules-pills-wall.png";
import uil from "../../images/uil_transaction.png"

import {motion} from 'framer-motion';



const PropertyCard = ({card}) => {
  const [anim,setAnim] = useState(false);
  // console.log(card);
  const [direction, setDirection] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevDirection) => (prevDirection === 1 ? -1 : 1));
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
  
  return (
    
    <div className="flexColStart r-card" >
      <div className="t-s-h">
        <div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <span style={{ color: "#313131" }}>Enhancing </span>
      </motion.span>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span style={{ color: "#10C08E" }}>Nutrition</span>
      </motion.span>
      </div>
      <div>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span style={{ color: "#10C08E" }}>Empowering </span>
      </motion.span>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
        <span style={{ color: "#313131" }}>Tomorrow.</span>
      </motion.span>
      </div>
    </div>

      <div className="c-s" onMouseEnter={()=>setAnim(true)} onMouseLeave={()=>setAnim(false)}>
        <div className="f-t-s">
        <motion.div 
          initial={{y:0,opacity:0}}
          animate={{y:-100,opacity:1,
          transition:{
            duration:3,
          }}}
        className="t-s-card">
            <img src={uil} alt="" />
            <div className="card-info">
                <span>16,300,587</span>
                <span>Customized Excellence</span>
            </div>
        </motion.div>
        </div>

      
        
        <div className="s-t-s">
            <div className="im1-c">
               <motion.img 
                  initial={{y:-50,opacity:0}}
                  animate={{y:0,opacity:1,
                  transition:{
                    duration:3,
                  }}}
               src={ingredient} alt="" />
               <motion.img 
                   initial={{y:50,opacity:0}}
                   animate={{y:0,opacity:1,
                   transition:{
                     duration:3,
                   }}}
               src={milk} alt="" />


            </div>
            <div className="im2-c">
            <motion.img 
                initial={{y:0,opacity:0}}
                animate={{y:0,opacity:1,
                transition:{
                  duration:3,
                }}}
              src={rice} alt="" />

                <motion.img 
                src={pills} alt="" />
                <motion.img 
                    initial={{y:0,opacity:0}}
                    animate={{y:0,opacity:1,
                    transition:{
                      duration:3,
                    }}}
              src={wooden} alt="" />

            </div>
            <div className="im3-c">
            <motion.img 
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1,
                transition:{
                  duration:3,
                }}}
               src={baby} alt="" />
                <motion.img 
                    initial={{y:50,opacity:0}}
                    animate={{y:0,opacity:1,
                    transition:{
                      duration:3,
                    }}}
                 src={blue} alt="" />
            </div>
        </div>

        <div className="t-t-s">
           <motion.div 
               initial={{y:-50,opacity:0}}
               animate={{y:0,opacity:1,
               transition:{
                 duration:3,
               }}}
        className="t-s-card">
            <img src={uil} alt="" />
            <div className="card-info">
                <span>16,300,587</span>
                <span>Precise Nutrition</span>
            </div>
        </motion.div>
        </div>
        </div>

    </div>
    
  );
  
};

export default PropertyCard;