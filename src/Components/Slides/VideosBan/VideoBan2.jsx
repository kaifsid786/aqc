import React from "react";
import "../TopSlider.css";
import v2 from "/v1.mp4";
export default function VideoBan1() {
  return (
    <>
      <div className="div" style={{ width: "100%" }}>
        <video src={v2} autoPlay muted loop></video>
        <div class="cot">
          <h1>
            Elevate Your Plate <br />
            Where Nutrition Meets Flavor
          </h1>
          <p>
            Experience a culinary renaissance at AQC, <br />
            where we seamlessly blend nutrition and flavor to elevate every
            plate.
          </p>
        </div>
      </div>
    </>
  );
}
