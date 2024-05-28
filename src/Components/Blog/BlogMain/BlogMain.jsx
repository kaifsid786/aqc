import "./BlogMain.scss";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import WhatsApp from "../../WhatsApp/WhatsApp";
import PreFooter from "../../PreFooter/PreFooter";
import { useEffect, useState } from "react";
import BlogPhone from "../BlogPhone/BlogPhone";
import BlogCard from "../BlogCard/BlogCard";
import img from "../../../../public/blog1.png";
import img2 from "../../../../public/blog2.png";
import img3 from "../../../../public/blog3.png";
export default function BlogMain() {
  const [clickedIndexT, setClickedIndexT] = useState(0);

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
      cat: "Cookies",
      tag: "Health",
    },
    {
      date: "01|July|2023",
      title:
        "Revolutionary Research Unveils New Insights into Gut-Brain Connection for Optimal Mental Health",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img2,
      cat: "Cookies",
      tag: "Campaign",
    },
    {
      date: "01|July|2023",
      title:
        "Breakthrough Discovery: Superfood Extracts Found to Potentially Enhance Longevity & Vitality",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img3,
      cat: "Technology",
      tag: "Health",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Technology",
      tag: "Spray Drying",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Cookies",
      tag: "Spray Drying",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Nutritional Food",
      tag: "Campaign",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Nutritional Beverages",
      tag: "Nutrition",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Markets",
      tag: "Nutrition",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Guide",
      tag: "Manufactured Vitamins",
    },
    {
      date: "01|July|2023",
      title:
        "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
      des: "In today’s fast-paced world, time has become a precious resource. Whether you’re a student, a professional, or a business owner, managing your time effectively is crucial for success. Are you struggling to stay focused.",
      img: img,
      cat: "Food Science",
      tag: "Manufactured Vitamins",
    },
  ];

  const cat = [
    "All Category",
    "Nutrition",
    "Guide",
    "Marketing",
    "Nutritional Food",
    "Nutritional Beverages",
    "Food Science",
  ];

  const tag = [
    "All",
    "Health",
    "Campaign",
    "Spray Drying",
    "Manufactured Vitamins",
    "Nutrition",
  ];

  // Filteration-------------------------------------------------------->
  const [selectedCat, setSelectedCat] = useState(cat[0]);
  const [selectedTag, setSelectedTag] = useState(tag[0]);
  const [filteredCat, setFilteredCat] = useState(allCat);
  // for phone
  const [filteredPhoneCat, setFilteredPhoneCat] = useState(allCat);

  const [selectedCatTop, setSelectedCatTop] = useState(0);

  useEffect(() => {
    if (selectedCat === cat[0] && selectedTag === tag[0])
      setFilteredCat(allCat);
    else
      setFilteredCat(
        allCat.filter((data) => {
          return (
            selectedCat === "" ||
            data.cat === selectedCat ||
            selectedTag === "" ||
            data.tag === selectedTag
          );
        })
      );
  }, [selectedCat, selectedTag]);

  const selectCat = (indx) => {
    setSelectedCatTop(indx);
    setSelectedCat(cat[indx]);
  };
  const handleClickT = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndexT(index);
    setSelectedTag(tag[index]);
  };

  // ----------------------------------------------------------------------------------------->

  // Pagination Logic------------------------------------------------->
  if (window.innerWidth > 800) {
    if (filteredCat.length % 5 === 0)
      var pages = parseInt(filteredCat.length / 5);
    else var pages = parseInt(filteredCat.length / 5) + 1;
  } else {
    if (filteredPhoneCat.length % 5 === 0)
      var pages = parseInt(filteredPhoneCat.length / 5);
    else var pages = parseInt(filteredPhoneCat.length / 5) + 1;
  }
  const [pageIndx, setPageIndx] = useState(1);

  // ----------------------------------------------------------------->
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
            <BlogPhone
              allCat={allCat}
              phF={filteredPhoneCat}
              sPhF={setFilteredPhoneCat}
            />
            <div
              className="menu"
              style={window.innerWidth <= 900 ? { display: "none" } : {}}
            >
              {cat.map((val, i) => {
                return (
                  <span
                    key={i}
                    style={
                      selectedCatTop === i
                        ? {
                            borderBottom: "2px solid black",
                            fontWeight: "600",
                            color: "black",
                          }
                        : {}
                    }
                    onClick={() => selectCat(i)}
                  >
                    {val}
                  </span>
                );
              })}
            </div>

            <div className="img-wrapper">
              {window.innerWidth > 800
                ? filteredCat.map((val, i) => {
                    if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
                      return (
                        <BlogCard
                          date={allCat[i].date}
                          title={allCat[i].title}
                          des={allCat[i].des}
                          img={allCat[i].img}
                        />
                      );
                  })
                : filteredPhoneCat.map((val, i) => {
                    if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
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
                      onClick={() => selectCat(i)}
                      style={
                        selectedCatTop === i
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
          <Pagination count={pages} onChange={(e, page) => setPageIndx(page)} />
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
