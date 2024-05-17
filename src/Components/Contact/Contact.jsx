import "./Contact.scss";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { IoMailOpen } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import cust from "../../images/customer-service.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import locationImg from "/location.png";
import WhatsApp from "../WhatsApp/WhatsApp";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xyc165",
        "template_3woft7p",
        form.current,
        "Jr2_NGqGKWQW26WzV"
      )
      .then(
        (result) => {
          alert("Thank You , we have received your message");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  // Map
  const [centre, setCentre] = useState({
    lat: 28.3511666667,
    lng: 77.3033611111,
  });
  const Zoom = 12;
  const customIcon = new Icon({
    iconUrl: locationImg,
    iconSize: [38, 38],
  });

  return (
    <>
      <NavBar />
      <div className="main-contact">
        <div className="banner">
          <div className="wrapper">
            <div className="left">
              <div className="cards">
                <div className="card">
                  <div
                    className="logo"
                    onClick={() => {
                      if (window.innerWidth > 900) {
                        window.location.href =
                          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shiyvamgupta@aqcchem.com";
                      } else {
                        window.location.href =
                          "mailto:shiyvamgupta@aqcchem.com";
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <IoMailOpen />
                  </div>
                  <h3>Email us</h3>
                  <p>
                    Email us for general queries, including marketing and
                    partnership opportunities.
                  </p>
                  <div
                    className="info"
                    onClick={() => {
                      if (window.innerWidth > 900) {
                        window.location.href =
                          "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shiyvamgupta@aqcchem.com";
                      } else {
                        window.location.href =
                          "mailto:shiyvamgupta@aqcchem.com";
                      }
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Shiyvamgupta@aqcchem.com
                  </div>
                </div>
                <div className="card">
                  <div className="logo">
                    <IoCallSharp />
                  </div>
                  <h3>Call us</h3>
                  <p>
                    Call us to speak to a member of our team. We are always
                    happy to help.
                  </p>
                  <div className="info">+91-99207 79504</div>
                </div>
                <div className="card">
                  <div className="logo">
                    <img src={cust} alt="" />
                  </div>
                  <h3>Support</h3>
                  <p>Check out helpful resources, FAQs and developer tools.</p>
                  <button>
                    Support Center{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="right">
              <MapContainer center={centre} zoom={Zoom}>
                <TileLayer
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {<Marker position={centre} icon={customIcon} />}
              </MapContainer>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="gradient"></div>
          <div className="wrapper">
            <div className="left">
              <h3>Get In Touch With Us</h3>
              <p>
                We encourage you to contact us with any questions or comments
                you may have
              </p>
            </div>
            <form className="right" ref={form} onSubmit={sendEmail}>
              <label htmlFor="">Full Name*</label>
              <input type="text" name="name" required />
              <label htmlFor="">Email Address*</label>
              <input type="email" name="email" required />
              <label htmlFor="">Phone Number*</label>
              <input type="Number" required name="number" />
              <label htmlFor="">Message*</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>

        {/* whatsapp */}
        <div className="whatsapp">
          <WhatsApp />
        </div>
      </div>
      <Footer />
    </>
  );
}
