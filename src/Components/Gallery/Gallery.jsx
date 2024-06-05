import React, { useEffect, useState } from "react";
import img1 from "../../images/spoon-ingredients-full-flour.png";
import img2 from "../../../public/prod4/supplements.jpg";

import img3 from "../../images/milled-rice-bowl-wooden-spoon-black-cement-floor.png";
import img4 from "../../images/assorted-pastry-near-raisins-nuts.png";
import img5 from "../../images/cocktail-glasses 1.png";
import img6 from "../../images/chocolate-cookies-with-chocolate-chips.png";
import img7 from "../../images/view-baby-food-with-apple.png";

import img9 from "../../images/dairy-products.png";
import img10 from "../../images/gmo-chemical-modified-food-meat-high-view.png";
import img11 from "../../images/scientist-holding-petri-dish-tweezers.png";
import img12 from "../../images/selective-focus-shot-fresh-fruits-vegetables-with-different-medicine-wooden-spoon.png";
import img13 from "../../images/colorful-candies-jelly-marmalade-wooden-box-sweets-old-background-top-view-free-copy-space.png";
import img14 from "../../../public/prod4/meat.jpg";
import img15 from "../../../public/prod4/snacks.jpg";
import img16 from "../../../public/prod4/Oil 1.png";
import img17 from "../../../public/rnd1.jpg";
import img18 from "../../../public/prod4/flour 1.png";
import img19 from "../../../public/prod4/Biscuits & Cookies 1.png";
import img20 from "../../../public/prod4/diatery.jpg";
import img21 from "../../../public/prod3/composition-pasta 1.png";
import img22 from "../../../public/prod3/homemade-bread 1.jpg";
import img8 from "../../../public/prod3/mediaImg5.png";
import img23 from "../../../public/prod4/Salt 1.jpg";
import img24 from "../../../public/prod4/assortment-peanuts-with-shells 1.png";
import img25 from "../../../public/prod4/stack-whole-meal-cookies-wooden-background.png";

import "./Gallery.css";
import { motion, AnimatePresence } from "framer-motion";
const Gallery = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [trigger, setTrigger] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // console.log(window.scrollY)

      const element = document.querySelector(".gall-cont");
      const newScrollHeight = element.scrollHeight;
      if (window.innerWidth > 1500) {
        setStart(document.querySelector(".gall-cont").scrollHeight - 200);
        setEnd(
          document.querySelector(".gall-cont").scrollHeight +
            document.querySelector(".gall-cont").clientHeight +
            50
        );
        setScrollHeight(window.scrollY);

        if (scrollHeight >= end - 400) {
          document.querySelector(".gall-animation").classList.add("bottom");
          setTrigger(true);

          // bottom.style.background='linear-gradient(#00284900, #002849)'
        } else {
          setTrigger(false);
        }
      } else {
        setStart(document.querySelector(".gall-cont").scrollHeight - 10);
        setEnd(
          document.querySelector(".gall-cont").scrollHeight +
            document.querySelector(".gall-cont").clientHeight -
            50
        );
        setScrollHeight(window.scrollY);

        if (scrollHeight >= end - 100) {
          document.querySelector(".gall-animation").classList.add("bottom");
          setTrigger(true);

          // bottom.style.background='linear-gradient(#00284900, #002849)'
        } else {
          setTrigger(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollHeight]);

  const style = {
    height: scrollHeight >= start && scrollHeight <= end ? "40vh" : "0",
    background:
      windowWidth <= 1500
        ? scrollHeight >= start && scrollHeight <= end
          ? "linear-gradient(#00284900, #002849)"
          : "transparent"
        : scrollHeight >= start && scrollHeight <= end - 300
        ? "linear-gradient(#00284900, #002849)"
        : "transparent",
    zIndex: scrollHeight >= start && scrollHeight <= end ? "100" : "-1",
    filter:
      scrollHeight >= start && scrollHeight <= end ? "blur(10px)" : "blur(0px)",
  };

  return (
    <div className="gall-cont">
      {trigger ? (
        <div className="gall-animation bottom">
          <hr />
        </div>
      ) : (
        <div className="gall-animation" style={style}>
          <hr />
        </div>
      )}

      <div className="gall-animation" style={style}>
        <hr />
      </div>
      <div className="Gallery" style={{ display: "flex" }}>
        <AnimatePresence>
          <motion.div
            initial={{ y: "15rem" }}
            whileInView={{ y: "0" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="G-col1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img15} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "15rem" }}
            whileInView={{ y: "0" }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="G-col1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={img17} alt="" />

            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "15rem" }}
            whileInView={{ y: "0" }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="G-col1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "15rem" }}
            whileInView={{ y: "0" }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="G-col1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={img16} alt="" />
            <img src={img6} alt="" />
            <img src={img18} alt="" />
            <img src={img19} alt="" />
            <img src={img20} alt="" />
          </motion.div>
          <motion.div
            initial={{ y: "15rem" }}
            whileInView={{ y: "0" }}
            exit={{ opacity: 0, y: "2rem" }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="G-col1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img src={img21} alt="" />
            <img src={img22} alt="" />
            <img src={img23} alt="" />
            <img src={img24} alt="" />
            <img src={img25} alt="" />
            <img src={img5} alt="" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
