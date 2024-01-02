import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogDetail.scss";
import img from "/blog1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PreFooter from "../PreFooter/PreFooter";
export default function BlogDetail() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const handleClick = (index) => {
    // Update the clickedIndex to the current clicked element
    setClickedIndex(index);
  };
  const isClicked = (index) => {
    // Check if the current element is clicked
    return index === clickedIndex;
  };

  const table = [
    "Introduction",
    "The Power of Time Management",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Lorem Ipsum is simply dummy text",
    "Introducing the Markets we serve all over the World simply dummy text",
    "How it Balance Lorem Ipsum is simply dummy text",
  ];

  const section = [
    {
      title: "Section 1: Lorem Ipsum is simply dummy text ",
      des: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        "Lorem Ipsum is simply dummy text of the printing.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      title: "Section 2: Lorem Ipsum is simply dummy text ",
      des: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        "Lorem Ipsum is simply dummy text of the printing.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      title: "Section 3: Lorem Ipsum is simply dummy text ",
      des: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        "Lorem Ipsum is simply dummy text of the printing.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    {
      title: "Section 4: Lorem Ipsum is simply dummy text ",
      des: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
        "Lorem Ipsum is simply dummy text of the printing.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
  ];

  const relatedBlog = [
    {
      img: img,
      des: "Cutting-Edge Study Reveals Surprising Benefits of Microgreens in Boosting Immunity",
    },
    {
      img: img,
      des: "Revolutionary Research Unveils New Insights into Gut-Brain Connection for Optimal Mental Health",
    },
    {
      img: img,
      des: "Breakthrough Discovery: Superfood Extracts Found to Potentially Enhance Longevity and Vitality",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="main-blogDetail">
        <div className="banner">
          <p>
            Cutting-Edge Study Reveals Surprising Benefits of Microgreens in
            Boosting Immunity
          </p>
        </div>

        <div className="section">
          <div
            className="left"
            style={window.innerWidth <= 900 ? { display: "none" } : {}}
          >
            <h3>Table of Content</h3>
            <div className="content">
              {table.map((val, i) => {
                return (
                  <span
                    onClick={() => handleClick(i)}
                    style={isClicked(i) ? { color: "#3F4DA1" } : {}}
                  >
                    {val}
                  </span>
                );
              })}
            </div>
            <div className="social-media">
              <h3>Share this Article:</h3>
              <div className="social-links">
                <div className="circle">
                  <FaFacebookF />
                </div>
                <div className="circle">
                  <FaTwitter />
                </div>
                <div className="circle">
                  <AiFillInstagram />
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <img src={img} alt="" />
            <div className="intro">
              <h3>Introduction</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
            <div className="content">
              {section.map((val) => {
                return (
                  <div className="div">
                    <h3>{val.title}</h3>
                    <p>
                      {val.des.map((data) => {
                        return (
                          <span>
                            &#x2022; {data} <br />
                          </span>
                        );
                      })}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="intro">
              <h3>Conclusion</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>

            <div className="social-media">
              <h3>Share this Article:</h3>
              <div className="social-links">
                <div className="circle">
                  <FaFacebookF />
                </div>
                <div className="circle">
                  <FaTwitter />
                </div>
                <div className="circle">
                  <AiFillInstagram />
                </div>
              </div>
            </div>

            <div className="buttons">
              <div className="btn">&larr; &nbsp; Previous</div>
              <div className="btn">Next &nbsp; &rarr;</div>
            </div>

            <div className="related-blogs">
              <div className="header">
                <h3>Related Blogs</h3>
                <p style={window.innerWidth <= 900 ? { display: "none" } : {}}>
                  View More &nbsp; &rarr;
                </p>
              </div>
              <div className="content">
                {relatedBlog.map((val) => {
                  return (
                    <div className="blogCard">
                      <img src={val.img} alt="" />
                      <h4>{val.des}</h4>
                      <p>Read our blog</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <PreFooter />
      </div>
      <Footer />
    </>
  );
}
