import "./BlogMain.scss";
import Pagination from "@mui/material/Pagination";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import WhatsApp from "../../WhatsApp/WhatsApp";
import PreFooter from "../../PreFooter/PreFooter";
import { useEffect, useRef, useState } from "react";
import BlogPhone from "../BlogPhone/BlogPhone";
import BlogCard from "../BlogCard/BlogCard";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function BlogMain() {
  // Backend Setup --------------------------------------------------------->
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const [data, setData] = useState([]);
  const [prod, setProd] = useState([]);
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/blogs?populate[0]=Banner_Image&populate[1]=blog_pages.Image`,
          {
            headers: headers,
          }
        );
        // console.log(res);
        if (res.data) {
          const profData = res.data.data?.[0]?.attributes;
          // console.log(profData);
          setData(profData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setFilteredCat(data?.blog_pages?.data);
  }, []);
  console.log(data);

  // Filteration-------------------------------------------------------->
  const [selectedCat, setSelectedCat] = useState(0);
  const [filteredCat, setFilteredCat] = useState(data?.blog_pages?.data);

  //for phone
  const [filteredPhoneCat, setFilteredPhoneCat] = useState([]);

  useEffect(() => {
    if (selectedCat === 0) setFilteredCat(undefined);
    const filtered = data?.blog_pages?.data?.filter(
      (items) =>
        items?.attributes?.Tags?.[0] === data?.Categories?.[selectedCat].name
    );

    setFilteredCat(filtered);
  }, [selectedCat]);

  const selectCat = (indx) => {
    setSelectedCat(indx);
  };

  console.log(data?.Categories?.[selectedCat].name);
  console.log(data?.blog_pages?.data?.[0]?.attributes?.Tags?.[0]);

  // Pagination Logic------------------------------------------------->
  if (window.innerWidth > 800) {
    if (filteredCat != undefined) {
      if (filteredCat?.length % 5 === 0)
        var pages = parseInt(filteredCat?.length / 5);
      else var pages = parseInt(filteredCat?.length / 5) + 1;
    } else {
      if (data?.blog_pages?.data?.length % 5 === 0)
        var pages = parseInt(data?.blog_pages?.data?.length / 5);
      else var pages = parseInt(data?.blog_pages?.data?.length / 5) + 1;
    }
  } else {
    if (filteredPhoneCat != undefined) {
      if (filteredPhoneCat?.length % 5 === 0)
        var pages = parseInt(filteredPhoneCat?.length / 5);
      else var pages = parseInt(filteredPhoneCat?.length / 5) + 1;
    } else {
      if (data?.blog_pages?.data?.length % 5 === 0)
        var pages = parseInt(data?.blog_pages?.data?.length / 5);
      else var pages = parseInt(data?.blog_pages?.data?.length / 5) + 1;
    }
  }

  const [pageIndx, setPageIndx] = useState(1);
  // ----------------------------------------------------------------->

  return (
    <>
      <NavBar />
      <div className="main-Blogmain">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${ImgURL}${data?.Banner_Image?.data?.attributes?.url})`,
          }}
        >
          {ReactHtmlParser(data?.Blog_Content)}
        </div>

        <div className="sections">
          <div className="left">
            <BlogPhone
              phData={data}
              allCat={data?.Categories}
              filteredPhoneCat={filteredPhoneCat}
              setFilteredPhoneCat={setFilteredPhoneCat}
            />
            <div
              className="menu"
              style={window.innerWidth <= 900 ? { display: "none" } : {}}
            >
              {data?.Categories?.map((val, i) => {
                return (
                  <span
                    key={i}
                    style={
                      selectedCat === i
                        ? {
                            borderBottom: "2px solid black",
                            fontWeight: "600",
                            color: "black",
                          }
                        : {}
                    }
                    onClick={() => selectCat(i)}
                  >
                    {val.name}
                  </span>
                );
              })}
            </div>

            <div className="img-wrapper">
              {window.innerWidth > 900
                ? filteredCat != undefined
                  ? filteredCat?.map((val, i) => {
                      if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
                        return (
                          <BlogCard
                            date={(val?.attributes?.createdAt).substr(0, 10)}
                            title={val?.attributes?.Heading}
                            des={val?.attributes?.Blogless_content}
                            img={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                            AllContent={val}
                          />
                        );
                    })
                  : data?.blog_pages?.data?.map((val, i) => {
                      if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
                        return (
                          <BlogCard
                            date={(val?.attributes?.createdAt).substr(0, 10)}
                            title={val?.attributes?.Heading}
                            des={val?.attributes?.Blogless_content}
                            img={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                            AllContent={val}
                          />
                        );
                    })
                : filteredPhoneCat != undefined
                ? filteredPhoneCat.map((val, i) => {
                    if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
                      return (
                        <BlogCard
                          date={(val?.attributes?.createdAt).substr(0, 10)}
                          title={val?.attributes?.Heading}
                          des={val?.attributes?.Blogless_content}
                          img={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                          AllContent={val}
                        />
                      );
                  })
                : data?.blog_pages?.data?.map((val, i) => {
                    if (i >= 5 * (pageIndx - 1) && i < 5 * pageIndx)
                      return (
                        <BlogCard
                          date={(val?.attributes?.createdAt).substr(0, 10)}
                          title={val?.attributes?.Heading}
                          des={val?.attributes?.Blogless_content}
                          img={`${ImgURL}${val?.attributes?.Image?.data?.attributes?.url}`}
                          AllContent={val}
                        />
                      );
                  })}
            </div>
          </div>
        </div>

        <div className="pagination">
          <Pagination
            count={pages}
            onChange={(e, page) => {
              setPageIndx(page);
            }}
          />
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
