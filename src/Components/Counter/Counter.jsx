import React from "react";
import "./Counter.css";
import img1 from "../../images/Vector.png";
import img2 from "../../images/country.png";
import img3 from "../../images/Group 1171277277.png";
import img4 from "../../images/Smile Face.png";
import img5 from "../../images/Group.png";
import CountUp from "react-countup";
const Counter = ({counts}) => {
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  return (
    <div className="counters">
      <div className="parent">
        {counts?.map((val,index)=>{
          return(
            <div className="prof" key={index}>
              <img src={`${ImgURL}${val?.Image?.data?.attributes?.url}`} alt="" />
              <span>{val?.Heading}</span>
              <span>
                <CountUp end={val?.Quantity} duration={10} />{val?.Post_Description}
              </span>
            </div>
          )  
        })}
        
      </div>
    </div>
  );
};

export default Counter;
