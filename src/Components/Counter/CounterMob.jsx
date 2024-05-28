import React from "react";
import "./Counter.css";
import img1 from "../../images/Vector.png";
import img2 from "../../images/country.png";
import img3 from "../../images/Group 1171277277.png";
import img4 from "../../images/Smile Face.png";
import img5 from "../../images/Group.png";
import CountUp from "react-countup";
const CounterMob = ({counts}) => {
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  const len=counts?.length;
  const firstHalf=Math.ceil(len/2);
  return (
    <>
      <div
        className="counters"
        style={{ marginBottom: "2rem", marginTop: "6rem" }}
      >
        <div className="parent">
          {
            counts?.map((val,index)=>{
              if(index < firstHalf){
                return(
                  <div className="prof">
                    <img src={`${ImgURL}${val?.Image?.data?.attributes?.url}`} alt="" />
                    <span>{val?.Heading}</span>
                    <span>
                      <CountUp end={val?.Quantity} duration={10} />{val?.Post_Description}
                    </span>
                  </div>
                )
              }
              
            })
          }
        
        </div>
      </div>
      <div className="counters">
        <div className="parent">
        {
            counts?.map((val,index)=>{
              if(index >= firstHalf){
                return(
                  <div className="prof">
                    <img src={`${ImgURL}${val?.Image?.data?.attributes?.url}`} alt="" />
                    <span>{val?.Heading}</span>
                    <span>
                      <CountUp end={val?.Quantity} duration={10} />{val?.Post_Description}
                    </span>
                  </div>
                )
              }
              
            })
          }
          
        </div>
      </div>
    </>
  );
};

export default CounterMob;
