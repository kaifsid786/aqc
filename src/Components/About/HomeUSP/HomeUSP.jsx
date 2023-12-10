import React from "react";
import "./HomeUSP.css";
export default function HomeUSP({ homeUsp }) {
  // console.log(homeUsp);
  return (
    <>
      <div className="main-homeUSP xyz">
        <div className="homeUSP-left">
          <div className="homeUSP-left-content">
            <h1>{homeUsp?.title}</h1>
            <p>{homeUsp?.titleInfo}</p>
          </div>
        </div>
        <div className="homeUSP-right">

          {homeUsp.cards &&
            homeUsp.cards.length > 0 &&
            homeUsp.cards.map((item, index) => (
              <div className="homeUSP-right-content" key={index}>
                <h1>{item.cardTitle}</h1>
                <p>{item.cardInfo}</p>
              </div>
            ))}

        </div>
      </div>
    </>
  );
}
