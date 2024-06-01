import React, { useState } from "react";
import "./Awd.css";

const awd = ({ Certifications }) => {
  // const [width, setWidth] = useState(0);

  // console.log(Cirtification)
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;
  return (
    <div className="awards">
      <div className="awd-awards-title">Certifications</div>
      <div className="awd-awards-wrapper">
        {Certifications?.data?.map((val, index) => {
          let width;
          let phWidth;
          if (index === 1) {
            width = 4;
            phWidth = 2;
          } else if (index === 3 || index === 4) phWidth = 4;
          else {
            width = 6;
            phWidth = 7;
          }
          return (
            <img
              style={
                window.innerWidth > 480
                  ? { width: `${width}rem` }
                  : { width: `${phWidth}rem` }
              }
              src={`${ImgURL}${val?.attributes?.url}`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default awd;
