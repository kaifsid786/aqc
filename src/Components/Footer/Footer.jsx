import './Footer.scss';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
      <div className="main-footer">
        <div className="wrapper">
            <div className="row-1">
                <div className="col-1">
                    <img src="/AQC2.svg" alt="" />
                    <p>
                      More than 12 years in the Nutrition and we’re just getting Better. and we’re just getting Better More than 12 years in the Nutrition and we’re just get Better. and we’re just getting Better 
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
                     <li>Home</li>
                     <li>About</li>
                     <li>Products</li>
                     <li>Technology</li>
                     <li>Media</li>
                     <li>Contact</li>
                </div>
           </div>
           <div className="row-2">
                 <div className="col-2">
                    <h3>Services</h3>
                     <li>Contract Manufacturer</li>
                     <li>Lab Equipments</li>
                     <li>Lorem</li>
                     <li>Ipsum Lorem</li>
                </div>
                 <div className="col-2" style={window.innerWidth<=900?{width:"40%",paddingLeft:"2rem"}:{}}>
                    <h3>More</h3>
                     <li>Terms & Conditions</li>
                     <li>Privacy policy</li>
                     <li>Blogs</li>
                     <li>Carrier</li>
                </div>
           </div>
        </div>
           <div className="border">
              <div className="line"></div>
           </div>
           <div className="copyright">
            {
                window.innerWidth <=500?<p>AQC NUTRITION <br />2011-2021© All rights reserved.</p>:
                <p>AQC NUTRITION 2011-2021© | All rights reserved.</p>
            }
           </div>
      </div>
  )
}
