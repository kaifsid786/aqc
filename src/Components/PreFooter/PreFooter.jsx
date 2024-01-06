import React, { useEffect } from "react";
import "./PreFooter.scss";
import { useNavigate } from "react-router-dom";
export default function PreFooter() {
  const navigate = useNavigate();
  return (
    <div className="contact">
      <div className="left">
        <h3>Together, Let's Build a Healthy world around us</h3>
        <p>
          Are you ready to take your food to the next level in terms of taste &
          nutritional value to build a healthier world around us?
        </p>
      </div>
      <div className="right">
        <button onClick={() => navigate("/contact")}>Contact Now</button>
      </div>
    </div>
  );
}
