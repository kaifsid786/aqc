
import React from 'react'
import img1 from "../../images/spoon-ingredients-full-flour.png";


import img3 from "../../images/milled-rice-bowl-wooden-spoon-black-cement-floor.png";
import img4 from "../../images/assorted-pastry-near-raisins-nuts.png";
import img5 from "../../images/cocktail-glasses 1.png";
import img6 from "../../images/chocolate-cookies-with-chocolate-chips.png";
import img7 from "../../images/view-baby-food-with-apple.png";
import img8 from "../../images/view-baby-food-with-apple.png";
import img9 from "../../images/dairy-products.png";
import img10 from "../../images/gmo-chemical-modified-food-meat-high-view.png";
import img11 from "../../images/scientist-holding-petri-dish-tweezers.png";
import img12 from "../../images/selective-focus-shot-fresh-fruits-vegetables-with-different-medicine-wooden-spoon.png";
import img13 from "../../images/colorful-candies-jelly-marmalade-wooden-box-sweets-old-background-top-view-free-copy-space.png";
import './Gallery.css'
import {motion,AnimatePresence} from "framer-motion"
const Gallery = () => {
  return (
    <div className="gall-cont">
    <div className='Gallery' style={{display:'flex'}}>
         <AnimatePresence>
        <motion.div
       initial={{y:"15rem"}}
        whileInView={{y:"0"}}
        transition={{
          duration: 2,
          type: "spring",
        }}
        viewport={{once:true}}
        
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img1} alt="" />
            <img src={img9} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </motion.div>
        <motion.div
     initial={{y:"15rem"}}
     whileInView={{y:"0"}}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
            duration: 2,
          type: "spring",
        }}
        viewport={{once:true}}
     
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img1} alt="" />
        </motion.div>
        <motion.div 
      initial={{y:"15rem"}}
      whileInView={{y:"0"}}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
            duration: 2,
          type: "spring",
        }}
        viewport={{once:true}}
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img4} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
        </motion.div>
        <motion.div
        initial={{y:"15rem"}}
        whileInView={{y:"0"}}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
            duration: 2,
          type: "spring",
        }}
        viewport={{once:true}}
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
        </motion.div>
        <motion.div
       initial={{y:"15rem"}}
       whileInView={{y:"0"}}
        exit={{ opacity: 0, y: "2rem" }}
        transition={{
          duration: 2,
         type: "spring",
        }}
       viewport={{once:true}}
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
        </motion.div>
        </AnimatePresence>
    </div>
    </div>
  )
}

export default Gallery

