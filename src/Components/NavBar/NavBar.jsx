import "./NavBar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import accord3 from "../../../public/Micronutrient premixes icon.svg";
import accord2 from "../../../public/Food additives icon.svg";
import accord1 from "../../../public/Lab equipment icon.svg";
export default function NavBar() {
  const navigate = useNavigate();
  const [showhamMenu, setShowHamMenu] = useState(true);
  const [showHamB, setShowHamB] = useState(false);
  const [showProd, setShowProd] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 10) setShowHamMenu(false);
  //     else {
  //       setShowHamMenu(true);
  //     }
  //   });
  // }, [showhamMenu]);

  return (
    <div className="navbar">
      <div
        className="wrapper"
        style={
          showHamB ? { background: "#003E71", transition: "all 1s ease" } : {}
        }
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={!showHamB ? "./AQC.svg" : "/AQC2.svg"}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />
        <div className="links">
          <ul>
            <li onClick={() => navigate("/about")}>About Us</li>
            <li>
              Products{" "}
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  fontSize: "1rem",
                }}
              >
                &#x2304;
              </span>
              <ul className="drop-down">
                <li onClick={() => navigate("/micronutrientsPremixes")}>
                  <img
                    src={accord1}
                    alt=""
                    style={{
                      width: "1.5rem",
                      height: "1.5rem",
                      filter: "invert(100%)",
                    }}
                  />
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    Micronutrient Premixes{" "}
                  </span>
                </li>
                <li onClick={() => navigate("/foodAdditives")}>
                  <img
                    src={accord2}
                    alt=""
                    style={{
                      width: "2rem",
                      height: "2rem",
                      filter: "invert(100%)",
                    }}
                  />
                  <span style={{ fontSize: "14px" }}> Food additive </span>
                </li>
                <li onClick={() => navigate("/labEquipments")}>
                  <img
                    src={accord3}
                    alt=""
                    style={{
                      width: "2rem",
                      height: "2rem",
                      filter: "invert(100%)",
                    }}
                  />
                  <span style={{ fontSize: "14px" }}> Lab equipments</span>
                </li>
              </ul>
            </li>
            <li onClick={() => navigate("/contract")}>Contract Manufacturer</li>
            <li onClick={() => navigate("/technology")}>Technology</li>
            <li onClick={() => navigate("/blog")}>Blog</li>
            <li className="contactLink" onClick={() => navigate("/contact")}>
              Contact
            </li>
          </ul>
        </div>

        <div
          className="hamBurger"
          onClick={() => {
            setShowHamB(!showHamB);
          }}
        >
          <div
            className="line"
            style={
              showHamB
                ? {
                    transform: "rotateZ(-405deg) translate(-0.1rem, -0.5rem)",
                    transition: "all 1s ease",
                  }
                : {}
            }
          ></div>
          <div
            className="line"
            style={showHamB ? { display: "none" } : {}}
          ></div>
          <div
            className="line"
            style={
              showHamB
                ? { transform: "rotateZ(405deg) translate(-0.8rem, -0.1rem)" }
                : {}
            }
          ></div>
        </div>

        <div
          className={showHamB ? "hamMenu slideB" : "hamMenu"}
          style={
            showhamMenu && showHamB
              ? { background: "#003E71" }
              : !showhamMenu
              ? { display: "none" }
              : { left: "-100%", transition: "all 1s ease" }
          }
        >
          <div className="ham-links">
            <ul style={showHamB ? { color: "white" } : {}}>
              <li onClick={() => navigate("/about")}>About Us</li>
              <li style={{ position: "relative" }}>
                Products{" "}
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "100px",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => setShowProd(!showProd)}
                >
                  {" "}
                  &#x2304;
                </span>
                <ul
                  className="mob-dropdown"
                  style={showProd ? { height: "8rem" } : { height: "0" }}
                >
                  <li onClick={() => navigate("/micronutrientsPremixes")}>
                    Micronutrient Premixes{" "}
                  </li>
                  <li onClick={() => navigate("/foodAdditives")}>
                    Food additive{" "}
                  </li>
                  <li onClick={() => navigate("/labEquipments")}>
                    Lab equipments
                  </li>
                </ul>
              </li>
              <li onClick={() => navigate("/contract")}>
                Contract Manufacturer
              </li>
              <li onClick={() => navigate("/technology")}>Technology</li>
              <li onClick={() => navigate("/blog")}>Blog</li>
              <li className="contactLink" onClick={() => navigate("/contact")}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
