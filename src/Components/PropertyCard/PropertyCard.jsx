import React, { useEffect } from "react";
import "./PropertyCard.css"
import ingredient from "../../images/ingredient-bags-full-flour.png";
import milk from "../../images/milk-products-wooden-table.png";
import rice from "../../images/various-type-rice.png";
import pills from "../../images/arrangement-with-pills-container.png";
import wooden from "../../images/stack-whole-meal-cookies-wooden-background.png";
import baby from "../../images/view-baby-food-with-apple.png";
import blue from "../../images/blue-capsules-pills-wall.png";
import uil from "../../images/uil_transaction.png"





const PropertyCard = ({card}) => {
  // console.log(card);
 
  
  return (
    
    <div className="flexColStart r-card" >
      <div className="t-s-h">
        <span style={{color:"#313131"}}> Enhancing <span style={{color:"#10C08E"}}>Nutrition</span></span>
     
     <span style={{color:"#10C08E"}}>
        Empowering <span style={{color:"#313131"}}>Tomorrow.</span></span> 
      </div>

      <div className="c-s">
        <div className="f-t-s">
        <div className="t-s-card">
            <img src={uil} alt="" />
            <div className="card-info">
                <span>16,300,587</span>
                <span>Customized Excellence</span>
            </div>
        </div>
        </div>

      
        
        <div className="s-t-s">
            <div className="im1-c">
               <img src={ingredient} alt="" />
               <img src={milk} alt="" />


            </div>
            <div className="im2-c">
                <img src={rice} alt="" />
                <img src={pills} alt="" />
                <img src={wooden} alt="" />

            </div>
            <div className="im3-c">
                <img src={baby} alt="" />
                <img src={blue} alt="" />
            </div>
        </div>

        <div className="t-t-s">
            <div className="t-s-card">
            <img src={uil} alt="" />
            <div className="card-info">
                <span>16,300,587</span>
                <span>Precise Nutrition</span>
            </div>
        </div>
        </div>
        </div>

    </div>
    
  );
  
};

export default PropertyCard;