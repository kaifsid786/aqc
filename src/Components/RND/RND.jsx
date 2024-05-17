import "./RND.scss";
import NavBar from "../NavBar/NavBar";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import img from "/rnd1.jpg";
import img2 from "/rnd2.jpg";
export default function RND() {
  const cardData = [
    {
      title: "Innovation Hub",
      des: "We have state-of-art technology at R&D facilities to allow the team to explore their creativity and generate innovative ideas and concepts.",
    },
    {
      title: "Teamwork",
      des: "We have some best talents in the team from different sectors like chemists, engineers,scientists and specialists from different industrieswork together to meet the expectations of our clients.",
    },
    {
      title: "Customer-centric",
      des: "We believe that customer is the King so we take it very seriously to cater the requirements andneeds of our customers.",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="main-rnd">
        <div className="banner">
          <div className="top-banner">
            <div className="left">
              <h3>
                Join Us in shaping <br />
                the healthy Future
              </h3>
            </div>
            <div className="right">
              <p>
                Research and devleopment is the hrartbeat of commitment at AQC{" "}
                Chem Pvt Ltd. We beleive that innovation is the key to push
                boundaries and meet ever evolving demands of our clients.
              </p>
              <button>Get Started</button>
            </div>
          </div>
          <div className="rel-image">
            <img src={img} alt="img" />
          </div>
          <div className="bottom-banner">
            <div className="wrapper">
              <h3>Our Approach</h3>
              <p>
                We invite you to collaborate with us and partner with us in
                pioneering solutions <br />
                focused on improving the holistic health of our country.
              </p>
              <div className="bottom-wrap">
                {cardData.map((val, i) => {
                  return (
                    <div className="bottom-card" key={i}>
                      <h5>{val.title}</h5>
                      <p>{val.des}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="wrapper">
            <div className="left">
              <h3>
                Collaborating <br />
                with us on some <br />
                groundbraking <br />
                research.  
              </h3>
              <p>
                We invite you to collaborate with us and partner with us in
                pioneering solutions focused on improving the holistic health of
                our country. Our dedication of mindful research and development
                will ensure that we remain a trusted source of innovation in the
                industry for years to come.
              </p>
            </div>
            <div className="right">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <PreFooter />
      </div>
      <Footer />
    </>
  );
}
