import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="main-footer">
      <div className="wrapper">
        <div className="row-1">
          <div className="col-1">
            <img src="/AQC2.svg" alt="" />
            <p>
              More than 15 years in the field of nutrition and we relentlessly
              pursue the latest advancements and insights. AQC ensures that our
              expertise evolves alongside the ever-expanding landscape of
              nutritional science.
            </p>
            <div className="social-links">
              <div className="circle">
                <FaFacebookF />
              </div>
              <div className="circle">
                <FaTwitter />
              </div>
              <div className="circle">
                <AiFillInstagram />
              </div>
            </div>
          </div>

          <div className="col-2">
            <h3>Quick Links</h3>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About US</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </div>
        </div>
        <div className="row-2">
          <div className="col-2">
            <h3>Division</h3>
            <li onClick={() => navigate("/contract")}>Contract Manufacturer</li>
            <li onClick={() => navigate("/product")}>Lab Equipment</li>
            <li onClick={() => navigate("/product")}>Food Additives</li>
            <li onClick={() => navigate("/product")}>Nutrition</li>
          </div>
          <div
            className="col-2"
            style={
              window.innerWidth <= 900
                ? { width: "40%", paddingLeft: "2rem" }
                : {}
            }
          >
            <h3>More</h3>
            <li onClick={() => navigate("/product")}>Products</li>
            <li>Terms & Conditions</li>
            <li onClick={() => navigate("/blog")}>Blogs</li>
            <li>Privacy Policy</li>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="line"></div>
      </div>
      <div className="copyright">
        {window.innerWidth <= 500 ? (
          <p>
            AQC Chem Lab Pvt. Ltd.
            <br />
            2011-2021© All rights reserved.
          </p>
        ) : (
          <p>AQC Chem Lab Pvt. Ltd. | All Rights Reserved</p>
        )}
      </div>
    </div>
  );
}
