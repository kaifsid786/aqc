import React from "react";
import "../TopSlider.css";
import v1 from "/v2.mp4";
export default function VideoBan1() {
  return (
    <>
      <div className="div" style={{ width: "100%" }}>
        <video src={v1} autoPlay muted loop></video>
        <div class="cot">
          <h1>
            Fueling Your Potential <br /> Nourishing Your Journey
          </h1>
          <p>
            Discover the essence of well-being with our meticulously crafted
            nutrition solutions at AQC. <br /> Fuel your potential and embark on
            a nourishing journey toward a healthier, happier you
          </p>
        </div>
      </div>
    </>
  );
}
