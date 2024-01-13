import React, { useState } from "react";
import "./Home.scss";
import Slider from "../Slides/TopSlider";
import NavBar from "../NavBar/NavBar";
import Awd from "../Awd/Awd";
import ProductSection from "../ProductSection/ProductSection";
import Awards from "../TestComp/Awards/Awards";
import Blog from "../TestComp/Blog/Blog";
import Footer from "../Footer/Footer";
import Counter from "../Counter/Counter";
import CounterMob from "../Counter/CounterMob";
import WhatsApp from "../WhatsApp/WhatsApp";
import video1 from "/1715412_Flour_Dough_Ingredient_1280x720 (1).mp4";
import video2 from "/4661195_Closeup_Woman_Baker_1280x720 (1).mp4";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log(windowWidth);
  useState(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="Home">
        <div className="t-slider">
          <Slider />
        </div>
        {windowWidth <= 480 ? <CounterMob /> : <Counter />}

        <ProductSection />
        <Awd />
        <Awards />
        <Blog />
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
