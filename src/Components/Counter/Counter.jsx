import React from 'react'
import './Counter.css';
import img1 from "../../images/Vector.png";
import img2 from "../../images/country.png";
import img3 from "../../images/Group 1171277277.png";
import img4 from "../../images/Smile Face.png";
import img5 from "../../images/Group.png";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <div className='counters'>
      <div className="parent">
        <div className="prof">
            <img src={img1} alt="" />
            <span>Professionals</span>
            <span>
            <CountUp
            end={50}
            duration={2}
            />+
            </span>
        </div>
        <div className="prof">
            <img src={img2} alt="" />
            <span>Countries</span>
            <span>
            <CountUp
            end={50}
            duration={2}
            />
            </span>
        </div>
        <div className="prof">
            <img src={img3} alt="" />
            <span>Annual production</span>
            <span>
            <CountUp
            end={50000}
            duration={4}
            />mt
            </span>
            
        </div>
        <div className="prof">
            <img src={img4} alt="" />
            <span>clients</span>
            <span>
            <CountUp
            end={500}
            duration={3}
            />+
            </span>
        </div>
        <div className="prof">
            <img src={img5} alt="" />
            <span>Yrs. of Experience</span>
            <span>
            <CountUp
            end={10}
            duration={2}
            />+
            </span>
        </div>
      </div>
    </div>
  )
}

export default Counter
