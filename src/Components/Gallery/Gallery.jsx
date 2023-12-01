
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
    <motion.div
    
    
    className='Gallery' style={{display:'flex'}}>
         <AnimatePresence>
        <motion.div
       initial={{y:"15rem"}}
        whileInView={{y:"0"}}
        transition={{
          duration: 2,
          type: "spring",
        }}
        
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
       
        className="G-col1" style={{display:'flex',flexDirection:'column'}}>
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
        </motion.div>
        </AnimatePresence>
    </motion.div>
  )
}

export default Gallery


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];