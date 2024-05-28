import React, { useEffect } from "react";
import "./PropertyCard2.css";

const PropertyCard = ({ card, st }) => {
  // console.log(card);
  const ImgURL = import.meta.env.VITE_REACT_APP_UPLOAD_URL;  
  return (
    <div
      className="flexColStart r-card2"
      style={
        st
          ? { scale: "1.1" }
          : window.innerWidth > 900
          ? { scale: "0.8" }
          : { scale: "1" }
      } 
    >
      <img src={`${ImgURL}${card?.Image?.data?.attributes?.url}`} alt="home" />

      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}></span>
        <span className="card-title">{card?.Heading}</span>
      </span>
      <span className="primaryText">{card?.Description}</span>
      {/* <span className="secondaryText">{truncate(card.description,{length:80})}</span> */}
    </div>
  );
};

export default PropertyCard;
