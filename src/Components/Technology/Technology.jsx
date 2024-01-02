import "./Technology.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import PreFooter from "../PreFooter/PreFooter";
import { useEffect, useState } from "react";
export default function Technology() {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [ph, setPh] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 900) setPh(false);
    else setPh(true);
  }, []);
  return (
    <>
      <NavBar />
      <div className="main-tech">
        <div className="banner">
          <img src="/TechBan.png" alt="" />
        </div>
        <div className="intro">
          <h3>TECHNOLOGY</h3>
          <p>
            {" "}
            <span style={{ fontWeight: "600" }}>
              At AQC Chem. Lab Pvt. Ltd.
            </span>
            , innovation is in our DNA. It is showcased through the cutting edge
            technologies that drive our food processing solutions. We harness a
            range of state-of-the-art technologies that redefine food science,
            enhancing product quality, efficacy, and consumer experience.
          </p>
        </div>
        <div className="cards">
          <div
            className="card-1"
            style={hover1 && ph ? { background: "#f6f6f6" } : {}}
          >
            <div className="left">
              <h3 style={hover1 && ph ? { color: "#003e71" } : {}}>
                Encapsulation:
              </h3>
              <p style={hover1 && ph ? { color: "#003e71" } : {}}>
                Safeguarding the goodness
              </p>
              <p
                className="p2"
                style={window.innerWidth > 500 ? { display: "none" } : {}}
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
            <div
              className="right"
              onMouseEnter={() => setHover1(!hover1)}
              onMouseLeave={() => setHover1(!hover1)}
            >
              <img
                src="/Tech1.png"
                alt=""
                style={hover1 && ph ? { display: "none" } : {}}
              />
              <p
                className="p2"
                style={
                  !hover1 | !ph
                    ? { display: "none" }
                    : {
                        background: "#003e71",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        padding: "0 1rem",
                        borderRadius: "10px",
                      }
                }
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
          </div>
          <div
            className="card-1 type2"
            style={hover2 && ph ? { background: "#f6f6f6" } : {}}
          >
            <div className="left">
              <h3 style={hover2 && ph ? { color: "#003e71" } : {}}>
                Spray Drying: :
              </h3>
              <p style={hover2 && ph ? { color: "#003e71" } : {}}>
                The Art of Transformations
              </p>
              <p
                className="p2"
                style={window.innerWidth > 500 ? { display: "none" } : {}}
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
            <div
              className="right"
              onMouseEnter={() => setHover2(!hover2)}
              onMouseLeave={() => setHover2(!hover2)}
            >
              <img
                src="/Tech3.jpg"
                alt=""
                style={hover2 && ph ? { display: "none" } : {}}
              />
              <p
                className="p2"
                style={
                  !hover2 | !ph
                    ? { display: "none" }
                    : {
                        background: "#003e71",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        padding: "0 1rem",
                        borderRadius: "10px",
                      }
                }
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
          </div>
          <div
            className="card-1"
            style={hover3 && ph ? { background: "#f6f6f6" } : {}}
          >
            <div className="left">
              <h3 style={hover3 && ph ? { color: "#003e71" } : {}}>
                Blending:
              </h3>
              <p style={hover3 && ph ? { color: "#003e71" } : {}}>
                The Art of  Nutrient Synergy
              </p>
              <p
                className="p2"
                style={window.innerWidth > 500 ? { display: "none" } : {}}
              >
                Our blending technology is an alchemy of precision and
                innovation. By combining diverse ingredients, we create
                nutrient-rich formulations that resonate with modern dietary
                demands. This process ensures uniform distribution of
                components, yielding products that deliver consistent
                nutritional impact.
              </p>
            </div>
            <div
              className="right"
              onMouseEnter={() => setHover3(!hover3)}
              onMouseLeave={() => setHover3(!hover3)}
            >
              <img
                src="/Tech4.jpg"
                alt=""
                style={hover3 && ph ? { display: "none" } : {}}
              />
              <p
                style={
                  !hover3 | !ph
                    ? { display: "none" }
                    : {
                        background: "#003e71",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        padding: "0 1rem",
                        borderRadius: "10px",
                      }
                }
              >
                Our blending technology is an alchemy of precision and
                innovation. By combining diverse ingredients, we create
                nutrient-rich formulations that resonate with modern dietary
                demands. This process ensures uniform distribution of
                components, yielding products that deliver consistent
                nutritional impact.
              </p>
            </div>
          </div>

          <div
            className="card-1 type2"
            style={hover4 && ph ? { background: "#f6f6f6" } : {}}
          >
            <div className="left">
              <h3 style={hover4 && ph ? { color: "#003e71" } : {}}>
                Extrusion:
              </h3>
              <p style={hover4 && ph ? { color: "#003e71" } : {}}>
                Shaping Nutritional Excellence
              </p>
              <p
                className="p2"
                style={window.innerWidth > 500 ? { display: "none" } : {}}
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
            <div
              className="right"
              onMouseEnter={() => setHover4(!hover4)}
              onMouseLeave={() => setHover4(!hover4)}
            >
              <img
                src="/Tech2.jpg"
                alt=""
                style={hover4 && ph ? { display: "none" } : {}}
              />
              <p
                className="p2"
                style={
                  !hover4 | !ph
                    ? { display: "none" }
                    : {
                        background: "#003e71",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        padding: "0 1rem",
                        borderRadius: "10px",
                      }
                }
              >
                Our encapsulation technology is a cornerstone of product
                stability and controlled release. By encasing active ingredients
                within protective shells, we ensure their preservation until
                consumption, maximising potency and bioavailability. This
                empowers our partners to offer products with enhanced shelf life
                and targeted nutrient delivery.
              </p>
            </div>
          </div>
        </div>

        <PreFooter />
      </div>
      <Footer />
    </>
  );
}
