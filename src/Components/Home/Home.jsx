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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        {windowWidth <= 500 ? <CounterMob /> : <Counter />}

        <ProductSection />
        <Awd />
        <Awards />
        <Blog />

        {/* whatsapp */}
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
