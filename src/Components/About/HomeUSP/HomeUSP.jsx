import React from "react";
import "./HomeUSP.css";
export default function HomeUSP({ homeUsp }) {
  // console.log(homeUsp);
  return (
    <>
      <div className="main-homeUSP xyz">
        <div className="homeUSP-left">
          <div className="homeUSP-left-content">
            
            <div dangerouslySetInnerHTML={{ __html: homeUsp?.Heading }} />
          </div>
        </div>
        <div className="homeUSP-right">
          {homeUsp?.why_aqc_cards?.data.map((item, index) => {
            const card = item.attributes;
            return (
              <div className="homeUSP-right-content" key={index}>
                <div style={{display:'flex',gap:'1rem',flexDirection:'column'}} dangerouslySetInnerHTML={{ __html: card?.Card }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
