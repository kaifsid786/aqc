import React from "react";
import "./Awd.css";

const awd = () => {
  return (
    <div className="awards">
      <div className="awd-awards-title">Certifications</div>
      <div className="awd-awards-wrapper">
        <img
          style={
            window.innerWidth > 480 ? { width: "10rem" } : { width: "7rem" }
          }
          src="/fssc.png"
          alt=""
        />
        <img
          style={
            window.innerWidth > 480 ? { width: "70px" } : { width: "4rem" }
          }
          src="/halal.png"
          alt=""
        />
        <img
          style={
            window.innerWidth > 480 ? { width: "6rem" } : { width: "5rem" }
          }
          src="/iso.png"
          alt=""
        />
        <img
          style={
            window.innerWidth > 480 ? { width: "9rem" } : { width: "7rem" }
          }
          src="/gain.png"
          alt=""
        />
        <img
          style={
            window.innerWidth > 480 ? { width: "7rem" } : { width: "5rem" }
          }
          src="/fssai.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default awd;
