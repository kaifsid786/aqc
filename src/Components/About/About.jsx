import React from "react";
import "./About.scss";
import img from "../../../public/AboutBan.png";
import HomeUSP from "./HomeUSP/HomeUSP";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Awd from "../Awd/Awd";
import PreFooter from "../PreFooter/PreFooter";
import quality from "/qualityAss.svg";
import innovation from "/innovation.svg";
import sustain from "/sustain.svg";
const varient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const varient2 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const uspCard = [
  {
    title: "Quality Assurance",
    des: "Stringent quality control measures and commitment to source the finest materials",
    img: quality,
  },
  {
    title: "Innovation",
    des: "Rigorously looking for new ways to stay ahead in an ever evolving industry.",
    img: innovation,
  },
  {
    title: "Sustainability",
    des: "Seeking eco-friendly practices and packaging options to strive to minimise carbon footprint ",
    img: sustain,
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <div className="main-about">
        <div className="about-banner">
          <div className="banner-gradient"></div>
          <motion.div
            className="banner-text"
            variants={varient}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={varient}>
              We take “{" "}
              <motion.span variants={varient} style={{ color: "#10C08E" }}>
                Your Wish, Our Command!”
              </motion.span>{" "}
              very seriously.
            </motion.h3>
            <motion.p variants={varient}>
              Our primary approach has been to meet the customer needs and keep
              our customers always at the forefront of everything we do. 
            </motion.p>
          </motion.div>
        </div>
        <div className="intro">
          Embarking on our journey in 2009,{" "}
          <span style={{ fontWeight: "800" }}>AQC Chem</span> set out with a
          grand vision: to transform the world of nutrition through innovation
          and sheer excellence. Born with the minds of a team from industry
          experts and right from the start our dedication was clear– to
          seamlessly blend technology and culinary science into a harmonious
          union.    <br /> <br />
          Through years of learning, we honed our expertise and skills,
          prioritising research and development and we swiftly emerged as a
          pioneering presence in the nutrition domain. In our early years we
          took time to deeply understand industry's intricacies, guiding us to
          customise our offerings to meet specific requisites. As time passed,
          our unwavering dedication to quality and precision propelled us to
          create our flagship products – micronutrient premixes, nutraceutical
          solutions, and specialised laboratory equipment. These pillars of
          innovation not only enhanced the nutritional quotient of foods but
          also revolutionised production methodologies, setting new industry
          benchmarks.{" "}
          <span
            style={{
              fontWeight: "500",
              cursor: "pointer",
              color: "#10C08E",
              textDecoration: "underline",
            }}
          >
            READ MORE
          </span>
        </div>

        <motion.div
          variants={varient2}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mission-vission"
        >
          <motion.div className="card">
            <h3>Vission</h3>
            <p>
              Our aim at providing high standards of Our global presence
              expanded naturally, and we take pride in establishing a footprint
              acros solutions that amplify nutrition, elevate well-being, and
              redefine standards.
            </p>
          </motion.div>
          <motion.div className="card">
            <h3>Mission</h3>
            <p>
              Our aim at providing high standards of Our global presence
              expanded naturally, and we take pride in establishing a footprint
              acros solutions that amplify nutrition, elevate well-being, and
              redefine standards.
            </p>
          </motion.div>
        </motion.div>

        <div className="commitment">
          <div className="wrapper">
            <div className="left">
              <h3>Our Commitment to Quality: </h3>
              <p>
                Our primary approach has been to meet the customer needs & keep
                our customers always at the forefront of everything we do.  
                <br />
                Our global presence expanded naturally, and we take pride in
                establishing a footprint across 30+ countries. Presently, AQC
                Chem. Lab stands tall, earning the trust of 400+ clients
                worldwide, owing to our unwavering commitment to delivering
                top-tier solutions that amplify nutrition, elevate well-being,
                and redefine standards in the nutrition segment. 
              </p>
            </div>
            <div className="right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>

        <div className="usp">
          <h3>Why AQC ?</h3>
          <p>
            Embarking on our journey in 2009, AQC Chem set out with a grand
            vision: to transform the world of nutrition through innovation and
            sheer excellence. Born with the minds of a team from industry
            experts
          </p>
          <div className="usp-wrapper">
            {uspCard.map((val) => {
              return (
                <div className="card">
                  <img src={val.img} alt="" />
                  <h3>{val.title}</h3>
                  <p>{val.des}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="team-section">
          {/* <div className="wrapper">
            <h3>Our Team</h3>
            <p>At AQC Chem Pvt Ltd, Our core values are -</p>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Yash Raj Chaudhary</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Sulekha Naina</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Vaibhav Singhal</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Roshan Mehta</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
            <div className="team">
              <h3>Raghav Kulkarni</h3>
              <p>
                We are committed to practices which are sustainable and minimise
                impact on the environment. AQC strives to create products that
                contribute to a healthier planet.
              </p>
            </div>
            <div className="horz-bar"></div>
          </div> */}
          <div className="wrapper">
            <h3>Our Team</h3>
            <h4>At AQC Chem Pvt Ltd, Our core values are -</h4>
            <p>
              We are committed to practices which are sustainable and minimise
              impact on the environment. AQC strives to create products that
              contribute to a healthier planet.
            </p>
          </div>
        </div>

        <div
          className="awards"
          style={window.innerWidth <= 480 ? { display: "none" } : {}}
        >
          <Awd />
        </div>
        {window.innerWidth <= 480 ? <Awd /> : ""}

        <PreFooter />
      </div>

      <Footer />
    </>
  );
}
