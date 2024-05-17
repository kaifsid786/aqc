import "./BlogMain.scss";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import WhatsApp from "../../WhatsApp/WhatsApp";
import PreFooter from "../../PreFooter/PreFooter";
import { useState } from "react";
import BlogPhone from "../BlogPhone/BlogPhone";
import BlogCard from "../BlogCard/BlogCard";
import img from "../../../../public/blog1.png";
import img2 from "../../../../public/blog2.png";
import img3 from "../../../../public/blog3.png";
export default function BlogMain() {
  const [border1, setBorder1] = useState(true);
  const [border2, setBorder2] = useState(false);
  const [border3, setBorder3] = useState(false);
  const [border4, setBorder4] = useState(false);
  const [border5, setBorder5] = useState(false);
  const [border6, setBorder6] = useState(false);
  const [border7, setBorder7] = useState(false);
  const [clickedIndexC, setClickedIndexC] = useState(0);
  const [clickedIndexT, setClickedIndexT] = useState(0);

  const handleClickC = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndexC(index);
  };
  const handleClickT = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndexT(index);
  };
  const isClickedC = (index) => {
    // Check if the current element is clicked
    return index === clickedIndexC;
  };
  const isClickedT = (index) => {
    // Check if the current element is clicked
    return index === clickedIndexT;
  };

  const allCat = [
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
    },
    {
      date: "01|July|2023",
      title:
        "Revolutionary Research Unveils New Insights into Gut-Brain Connection for Optimal Mental Health",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img2,
    },
    {
      date: "01|July|2023",
      title:
        "Breakthrough Discovery: Superfood Extracts Found to Potentially Enhance Longevity & Vitality",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img3,
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
    },
  ];

  const cat = [
    "Cookies",
    "Technology",
    "Nutritional Food",
    "Nutritional Beverages",
    "Markets",
  ];

  const tag = [
    "Health",
    "Campaign",
    "Spray Drying",
    "Manufactured Vitamins",
    "Nutrition",
  ];

  return (
    <>
      <NavBar />
      <div className="main-Blogmain">
        <div className="banner">
          <h3>Blog</h3>
          <p>
            Uncover the latest nutritional insights and wellness trends in our
            blog section. <br />
            Explore a treasure trove of expert advice and interesting article.
          </p>
        </div>

        <div className="sections">
          <div className="left">
            <BlogPhone />
            <div
              className="menu"
              style={window.innerWidth <= 900 ? { display: "none" } : {}}
            >
              <span
                onClick={() => {
                  setBorder1(true);
                  setBorder2(false);
                  setBorder3(false);
                  setBorder4(false);
                  setBorder5(false);
                  setBorder6(false);
                  setBorder7(false);
                }}
                style={
                  border1
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                All Category
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(true);
                  setBorder3(false);
                  setBorder4(false);
                  setBorder5(false);
                  setBorder6(false);
                  setBorder7(false);
                }}
                style={
                  border2
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Nutrition
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(false);
                  setBorder3(true);
                  setBorder4(false);
                  setBorder5(false);
                  setBorder6(false);
                  setBorder7(false);
                }}
                style={
                  border3
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Markets
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(false);
                  setBorder3(false);
                  setBorder4(true);
                  setBorder5(false);
                  setBorder6(false);
                  setBorder7(false);
                }}
                style={
                  border4
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Guide
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(false);
                  setBorder3(false);
                  setBorder4(false);
                  setBorder5(true);
                  setBorder6(false);
                  setBorder7(false);
                }}
                style={
                  border5
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Marketing
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(false);
                  setBorder3(false);
                  setBorder4(false);
                  setBorder5(false);
                  setBorder6(true);
                  setBorder7(false);
                }}
                style={
                  border6
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Nutritional Beverages
              </span>
              <span
                onClick={() => {
                  setBorder1(false);
                  setBorder2(false);
                  setBorder3(false);
                  setBorder4(false);
                  setBorder5(false);
                  setBorder6(false);
                  setBorder7(true);
                }}
                style={
                  border7
                    ? { borderBottom: "2px solid black", color: "black" }
                    : {}
                }
              >
                Food science
              </span>
            </div>

            <div className="img-wrapper">
              {allCat.map((val, i) => {
                return (
                  <BlogCard
                    date={allCat[i].date}
                    title={allCat[i].title}
                    des={allCat[i].des}
                    img={allCat[i].img}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="right"
            style={window.innerWidth <= 900 ? { display: "none" } : {}}
          >
            <select name="filter" id="">
              <option value="popularBlog">Popular Blog</option>
              <option value="">Latest Blog</option>
              <option value="">Most Viewed</option>
            </select>

            <div className="section1">
              <h3>Categories</h3>
              <div className="section-wrapper">
                {cat.map((val, i) => {
                  return (
                    <div
                      className="content"
                      onClick={() => handleClickC(i)}
                      style={
                        isClickedC(i)
                          ? { background: "#003E71", color: "white" }
                          : {}
                      }
                    >
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="section1">
              <h3>Tags</h3>
              <div className="section-wrapper">
                {tag.map((val, i) => {
                  return (
                    <div
                      className="content"
                      onClick={() => handleClickT(i)}
                      style={
                        isClickedT(i)
                          ? { background: "#003E71", color: "white" }
                          : {}
                      }
                    >
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="pagination">
          <Pagination count={15} />
        </div>

        <PreFooter />

        {/* whatsapp */}
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      <Footer />
    </>
  );
}
