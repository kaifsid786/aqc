import React, { useRef, useState } from "react";
import "./Prod1Card.scss";
const Prod1Card = ({ title, des, img, height, cursor }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const ref = useRef();
  return (
    <div
      className="prod1-Card"
      ref={ref}
      onMouseEnter={() => setIsAnimate(!isAnimate)}
      onMouseLeave={() => setIsAnimate(!isAnimate)}
      onClick={() => setIsAnimate(!isAnimate)}
      style={{ cursor: `url(${cursor}),pointer` }}
    >
      <img src={img} alt="" className="insideContainer" />

      <div className="outsideContainer">
        <h3>{title}</h3>
        <p
          style={
            isAnimate
              ? window.innerWidth > 500
                ? { height: height, opacity: "1", visibility: "visible" }
                : { height: "3rem", opacity: "1", visibility: "visible" }
              : { height: "0", opacity: 0, visibility: "hidden" }
          }
        >
          {des}
          {/* <br /> <br />
          <span>
            **customized formulations available as per customer's requirements
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default Prod1Card;
