import "./Media.scss";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import playBtn from "../../../public/PlayBtn.svg";
import { useState } from "react";
import axios from "axios";
export default function Media() {
  const [mediaData, setMediaData] = useState(" ");
  const [mediaImg, setMediaImg] = useState(" ");
  const [no_of_images, setNo_of_images] = useState(0);
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

  useState(() => {
    const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
    const token = import.meta.env.VITE_REACT_APP_API_TOKEN;
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const fetchData = async () => {
      try {
        const res = await axios.get(`${baseURL}/medias?populate=*`, {
          headers: headers,
        });
        if (res.data) {
          const media_data = res.data.data[0].attributes;
          setMediaData(media_data);
          setMediaImg(media_data?.Media_Photos);
          setNo_of_images(media_data?.Media_Photos.data.length);
        }

        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(mediaImg, no_of_images);
  return (
    <>
      <Navbar />
      <div className="main-media">
        <div className="banner">
          {/* <img src={playBtn} alt="" /> */}
          <img
            src={`${ImgURL}${mediaData?.Media_Video?.data?.attributes?.url}`}
            alt=""
          />
        </div>

        <div className="info">
          <div className="wrapper">
            <h3>
              <div dangerouslySetInnerHTML={{ __html: mediaData.Heading }} />
            </h3>
            <div className="vert-Bar"></div>
            <p>
              <div
                dangerouslySetInnerHTML={{ __html: mediaData.Sub_Heading }}
              />
            </p>
          </div>
        </div>

        <div
          className="images-section"
          style={window.innerWidth <= 500 ? { display: "none" } : {}}
        >

{window.innerWidth > 500 && (
    <>
      {(() => {
        const images = [];
        let j=0;
        for (let i = 0; i < mediaImg?.data?.length; i++) {
          
          

          if (j % 3 === 0) {
            const currentImage = (
              <div key={`row-${i}`} className="row-1">
                <img src={`${ImgURL}${mediaImg?.data?.[i]?.attributes?.url}`} alt="" />
                {mediaImg?.data?.[i + 1] && <img src={`${ImgURL}${mediaImg?.data?.[i + 1]?.attributes?.url}`} alt="" />}
                {mediaImg?.data?.[i + 2] && <img src={`${ImgURL}${mediaImg?.data?.[i + 2]?.attributes?.url}`} alt="" />}
              </div>

            );

            i += 2; 
            images.push(currentImage);
          }else if(j%3===1){
            const midImage=(
            <div className="row-4">
            <img
              style={{ width: "calc(30% - 20px)" }}
              src={`${ImgURL}${mediaImg?.data?.[i]?.attributes?.url}`}
              alt=""
            />
            {mediaImg?.data?.[i + 1] && <img  style={{ width: "calc(60% - 20px)" }} src={`${ImgURL}${mediaImg?.data?.[i + 1]?.attributes?.url}`} alt="" />}
          </div> 
            )
            i=i+1;
            images.push(midImage);
          } else {
            if (mediaImg?.data?.[i]) {
              const nextImage = (
                <div key={`row-${i}`} className="row-2">
                  <img src={`${ImgURL}${mediaImg?.data?.[i]?.attributes?.url}`} alt="" />
                </div>
              );
              images.push(nextImage);
            }
          }
          j++;
        }
        return images;
      })()}
    </>
  )}
          
          
        </div>

        <div
          className="ph-img-section"
          style={window.innerWidth > 500 ? { display: "none" } : {}}
        >
         {window.innerWidth <= 500 && (
    <>
      {(() => {
        const images = [];
        let j=0;
        for (let i = 0; i < mediaImg?.data?.length; i++) {
          
          

          if (j % 2 === 0) {
            const currentImage = (
              <div key={`row-${i}`} className="row-1">
                <img src={`${ImgURL}${mediaImg?.data?.[i]?.attributes?.url}`} alt="" />
                {mediaImg?.data?.[i + 1] && <img src={`${ImgURL}${mediaImg?.data?.[i + 1]?.attributes?.url}`} alt="" />}
              </div>
            );

            i += 1; 
            images.push(currentImage);
          } else {
            if (mediaImg?.data?.[i]) {
              const nextImage = (
                <div key={`row-${i}`} className="row-2">
                  <img src={`${ImgURL}${mediaImg?.data?.[i]?.attributes?.url}`} alt="" />
                </div>
              );
              images.push(nextImage);
            }
          }
          j++;
        }
        return images;
      })()}
    </>
  )}



        </div>

        <div className="btn">
          <button>Show More</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
