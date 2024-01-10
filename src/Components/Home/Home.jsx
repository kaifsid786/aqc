import React, { useEffect, useState } from "react";
import "./Home.scss";
import "./Home.css";
import Slider from "../Slides/TopSlider";
import NavBar from "../NavBar/NavBar";
import Awd from "../Awd/Awd";
import ProductSection from "../ProductSection/ProductSection";
import Awards from "../TestComp/Awards/Awards";
import Blog from "../TestComp/Blog/Blog";
import Footer from "../Footer/Footer";
import Counter from "../Counter/Counter";
import CounterMob from "../Counter/CounterMob";
import axios from "axios";
import video1 from "../../images/v1.mp4";
import video2 from "../../images/v2.mp4";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [gall, setGall] = useState(" ");
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

  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/home-galleries?populate=*`, {
          headers: headers,
        });
        if (res.data) {
          const data = res.data.data[0].attributes;
          setGall(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(gall);
  return (
    <>
      <NavBar />
      <div
        className="Home"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <div className="t-slider">

        <Slider />
        </div>
        
        
        {windowWidth <= 480 ? <CounterMob /> : <Counter />}

        <ProductSection gall={gall} />
        <Awd />
        <Awards />
        <Blog />
      </div>
      <Footer />
    </>
  );
};

export default Home;
