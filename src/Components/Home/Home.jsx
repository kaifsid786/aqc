import React, { useEffect, useState } from "react";
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
import axios from "axios";

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


  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const [data,setData]=useState('');
  const [blogs,setBlogs]=useState([]);
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/homes?populate[0]=Home_Gallery&populate[1]=Company_Information.Image&populate[2]=Slider.Image&populate[3]=Used_Technologies.Image&populate[4]=Cirtifications`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const profData = res.data.data[0].attributes;
          // console.log(profData);
          setData(profData);
          
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/blog-pages?populate=*`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const profData = res.data.data;
          // console.log(profData);
          setBlogs(profData.slice(0, 3));
          
          
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchBlog();
    
  }, []);
  console.log(blogs)

  return (
    <>
      <NavBar />
      <div className="Home">
        <div className="t-slider">
          <Slider videoSrc={data?.Home_video?.url}/>
        </div>
        {windowWidth <= 480 ? <CounterMob counts={data?.Company_Information} /> : <Counter counts={data?.Company_Information} />}

        <ProductSection slidesContent={data?.Slider} gall = {data?.Home_Gallery}/>
        <Awd Certifications={data?.Cirtifications}/>
        <Awards TechHead={data?.Technology} TechMeth={data?.Used_Technologies}/>
        <Blog blogs={blogs}/>

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
