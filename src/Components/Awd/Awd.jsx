import React from "react";
import "./Awd.css";

const awd = ({Certifications}) => {
  // console.log(Cirtification)
  const ImgURL=import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  return (
    <div className="awards">
      <div className="awd-awards-title">Certifications</div>
      <div className="awd-awards-wrapper">
        {
          Certifications?.data?.map((val,index)=>{
            return(
              <img
                style={
                  window.innerWidth > 480 ? { width: "8rem" } : { width: "7rem" }
                }
                src={`${ImgURL}${val?.attributes?.url}`}
                alt=""
              />
            )
          })
        }
        
      </div>
    </div>
  );
};

export default awd;
