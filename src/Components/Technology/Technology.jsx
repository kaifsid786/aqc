import "./Technology.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PreFooter from "../PreFooter/PreFooter";
import WhatsApp from "../WhatsApp/WhatsApp";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function Technology() {
  const [hover1, setHover1] = useState();
  const [hover2, setHover2] = useState();
 
  const [ph, setPh] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 900) setPh(false);
    else setPh(true);
  }, []);

  const [data, setData] = useState(" ");
  
  const navigate = useNavigate();

  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  useEffect(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseURL}/technologies?populate[0]=BannerImg&populate[1]=Methods.Image`,
          {
            headers: headers,
          }
        );
        if (res.data) {
          const techData = res.data.data[0].attributes;
          console.log(techData);
          setData(techData);
          // setTechMethods(techData?.technology_methods);
        }

        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="main-tech">
        <div className="banner">
          <img src="/TechBan.png" alt="" />
        </div>
        <div className="intro">{ReactHtmlParser(data?.Heading)}</div>
        <div className="cards">
          {Array.isArray(data?.Methods) &&
            data?.Methods?.map((val, index) => {
              if (index % 2 == 0) {
                return (
                  <div
                    className="card-1"
                    style={hover1==index && ph ? { background: "#f6f6f6" } : {}}
                  >
                    <div className="left">
                      <h3 style={hover1==index && ph ? { color: "#003e71" } : {}}>
                        {val?.Heading}
                      </h3>
                      <p style={hover1==index && ph ? { color: "#003e71" } : {}}>
                      {val?.Description}
                      </p>
                      <p
                        className="p2"
                        style={
                          window.innerWidth > 500 ? { display: "none" } : {}
                        }
                      >
                        {val?.Information}
                      </p>
                    </div>
                    <div
                      className="right"
                      onMouseEnter={() => setHover1(index)}
                      onMouseLeave={() => setHover1()}
                    >
                      <img
                       src={`${ImgURL}${val?.Image?.data?.attributes?.url}`}
                        alt=""
                        style={
                          hover1==index && ph
                            ? { zIndex: -1, opacity: 0 }
                            : { zIndex: 9, opacity: 1 }
                        }
                      />
                      <p
                        className="p2"
                        style={
                          hover1!=index | !ph
                            ? { zIndex: -1, opacity: 0 }
                            : {
                                opacity: 1,
                                zIndex: 9,
                                background: "#003e71",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                padding: "0 1rem",
                                borderRadius: "10px",
                              }
                        }
                      >
                        {val?.Information}
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="card-1 type2"
                    style={hover2==index && ph ? { background: "#f6f6f6" } : {}}
                  >
                    <div className="left">
                      <h3 style={hover2==index && ph ? { color: "#003e71" } : {}}>
                       {val?.Heading}
                      </h3>
                      <p style={hover2==index && ph ? { color: "#003e71" } : {}}>
                      {val?.Description}
                      </p>
                      <p
                        className="p2"
                        style={
                          window.innerWidth > 500 ? { display: "none" } : {}
                        }
                      >
                       {val?.Information}
                      </p>
                    </div>
                    <div
                      className="right"
                      onMouseEnter={() => setHover2(index)}
                      onMouseLeave={() => setHover2()}
                    >
                      <img
                        src={`${ImgURL}${val?.Image?.data?.attributes?.url}`}
                        alt=""
                        style={
                          hover2==index && ph
                            ? { zIndex: -1, opacity: 0 }
                            : { zIndex: 9, opacity: 1 }
                        }
                      />
                      <p
                        className="p2"
                        style={
                          hover2!=index | !ph
                            ? { zIndex: -1, opacity: 0 }
                            : {
                                zIndex: 9,
                                opacity: 1,
                                background: "#003e71",
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                                padding: "0 1rem",
                                borderRadius: "10px",
                              }
                        }
                      >
                        {val?.Information}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          

         
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
