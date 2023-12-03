
import React, { useEffect } from "react";
import "./PropertyCard2.css"



const PropertyCard = ({card}) => {
  // console.log(card);
  
  
  return (
    <div className="flexColStart r-card2">
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