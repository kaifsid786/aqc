import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogDetail.scss";
import img from "/blog1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PreFooter from "../PreFooter/PreFooter";
import axios from "axios";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default function BlogDetail() {

  const {id }= useParams();
  const [data,setData]=useState('');
  // console.log(id);
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/blog-pages?filters[slug][$eq]=${id}&populate=*`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const profData = res.data.data?.[0]?.attributes;
          console.log(profData);
          setData(profData);
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  useEffect(()=>{
    fetchData();
  },[id]);
  const  memoizedData = useMemo(()=>data,[data]);
  // console.log(memoizedData);
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

  const renderContent = (content) => {
    if (!content || !content.type) return null;
  
    switch (content.type) {
      case 'heading':
        const HeadingTag = `h${content.level}`;
        return (
          <HeadingTag key={content.children[0]?.text} style={{width:"100%"}}>
            {content.children.map((child, index) => renderContent(child))}
          </HeadingTag>
        );
  
      case 'paragraph':
        return (
          <p key={content.children[0]?.text}>
            {content.children.map((child, index) => renderContent(child))}
          </p>
        );
  
      case 'list':
        return content.format === 'unordered' ? (
          <ul key={content.children[0]?.text}>
            {content.children.map((listItem, index) => (
              <li key={index}>{listItem.children.map((child) => renderContent(child))}</li>
            ))}
          </ul>
        ) : (
          <ol key={content.children[0]?.text}>
            {content.children.map((listItem, index) => (
              <li key={index}>{listItem.children.map((child) => renderContent(child))}</li>
            ))}
          </ol>
        );
  
      case 'list-item':
        return (
          <li key={content.children[0]?.text}>
            {content.children.map((child, index) => renderContent(child))}
          </li>
        );
  
      case 'text':
        let textElement = content.text;
        if (content.bold) textElement = <b key={content.text}>{textElement}</b>;
        if (content.italic) textElement = <i key={content.text}>{textElement}</i>;
        if (content.underline) textElement = <u key={content.text}>{textElement}</u>;
        if (content.strikethrough) textElement = <s key={content.text}>{textElement}</s>;
        if (content.link) textElement = <a href={content.link} key={content.text}>{textElement}</a>;
        return textElement;

        case 'link':
          return (
            <a href={content.url} key={content.url}>
              {content.children.map((child, index) => renderContent(child))}
            </a>
          );    
  
      case 'image':
        return <img src={content.image?.url} alt={content.image?.alt} key={content.image?.url} />;
  
      default:
        return null;
    }
  };
  return (
    <>
      <NavBar />
      <div className="main-blogDetail">
        <div className="banner">
          <p>
          {memoizedData?.Heading}
          </p>
        </div>

        <div className="section">
          <div
            className="left"
            style={window.innerWidth <= 900 ? { display: "none" } : {}}
          >
            <h3>Table of Content</h3>
            <div className="content">
              {memoizedData?.Blog_Content?.map((val, i) => {
                if(val?.type === "heading"){
                  return (
                    <span
                      onClick={() => handleClick(i)}
                      style={isClicked(i) ? { color: "#3F4DA1" } : {}}
                    >
                      {val?.children?.[0]?.text}
                    </span>
                  );
                }
                
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
            <img src={`${ImgURL}${memoizedData?.Image?.data?.attributes?.url}`}  alt="" />
            {/* {ReactHtmlParser(memoizedData?.Blog_Content)} */}
            {memoizedData?.Blog_Content?.map((content, index) => (
              <React.Fragment key={index}>
                {renderContent(content)}
              </React.Fragment>
            ))}
            {/* <div className="intro">
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
            </div> */}
            {/* <div className="content">
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
            </div> */}
            {/* <div className="intro">
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
            </div> */}

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
