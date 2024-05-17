import React from "react";
import "./Counter.css";
import img1 from "../../images/Vector.png";
import img2 from "../../images/country.png";
import img3 from "../../images/Group 1171277277.png";
import img4 from "../../images/Smile Face.png";
import img5 from "../../images/Group.png";
import CountUp from "react-countup";
const CounterMob = () => {
  return (
    <>
      <div
        className="counters"
        style={{ marginBottom: "2rem", marginTop: "6rem" }}
      >
        <div className="parent">
          <div className="prof">
            <img src={img1} alt="" style={{ width: "3.9rem" }} />
            <span>Professionals</span>
            <span>
              <CountUp end={60} duration={5} />+
            </span>
          </div>
          <div className="prof">
            <img src={img2} alt="" />
            <span>Countries</span>
            <span>
              <CountUp end={70} duration={5} />+
            </span>
          </div>
          <div className="prof">
            <img src={img5} alt="" />
            <span>Yrs. of Experience</span>
            <span>
              <CountUp end={15} duration={5} />+
            </span>
          </div>
        </div>
      </div>
      <div className="counters">
        <div className="parent">
          <div className="prof">
            <img src={img4} alt="" />
            <span>clients</span>
            <span>
              <CountUp end={250} duration={5} />+
            </span>
          </div>
          <div className="prof">
            <img src={img3} alt="" />
            <span>Annual production</span>
            <span>
              <CountUp end={50000} duration={5} />
              +MT
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterMob;
