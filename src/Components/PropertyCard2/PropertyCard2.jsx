import React, { useEffect } from "react";
import "./PropertyCard2.css";

const PropertyCard = ({ card, st }) => {
  // console.log(card);

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
      <img src={card.img} alt="home" />

      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}></span>
        <span className="card-title">{card.title}</span>
      </span>
      <span className="primaryText">{card.info}</span>
      {/* <span className="secondaryText">{truncate(card.description,{length:80})}</span> */}
    </div>
  );
};

export default PropertyCard;
