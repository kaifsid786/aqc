import "./Awards.scss";
import img1 from "/01.svg";
import img2 from "/02.svg";
import img3 from "/03.svg";
import img4 from "/04.svg";
export default function Awards() {
  return (
    <>
      <div className="main-techComp">
        <div className="content">
          <h3>Technologies</h3>
          <p style={window.innerWidth <= 480 ? { display: "none" } : {}}>
            At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA. We harness a
            range of state- of- the- art technologies that <br /> redefine food
            science, enhancing product quality, efficacy, and consumer
            experience.
          </p>
          <p style={window.innerWidth > 480 ? { display: "none" } : {}}>
            At AQC Chem. Lab Pvt. Ltd., innovation is in our DNA. We harness a
            range of state- of- the- art technologies that redefine food
            science, enhancing product quality, efficacy, and consumer
            experience.
          </p>
          <div className="process">
            <div className="card">
              <div className="num">
                {" "}
                <h6>
                  <img src={img1} alt="" />
                </h6>
              </div>
              <h3>Encapsulation:</h3>
              <p>Safeguarding the goodness</p>
            </div>
            <div className="card">
              <div className="num">
                {" "}
                <h6>
                  {" "}
                  <img src={img2} alt="" />
                </h6>
              </div>
              <h3>Spray Drying:</h3>
              <p>The Art of Transformation</p>
            </div>
            <div className="card">
              <div className="num">
                {" "}
                <h6>
                  {" "}
                  <img src={img3} alt="" />
                </h6>
              </div>
              <h3>Blending:</h3>
              <p>The Art of Nutrient Synergy</p>
            </div>
            <div className="card">
              <div className="num">
                {" "}
                <h6>
                  {" "}
                  <img src={img4} alt="" />
                </h6>
              </div>
              <h3>Extrusion:</h3>
              <p>Shaping Nutritional Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
