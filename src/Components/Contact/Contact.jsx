import './Contact.scss';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { IoMailOpen } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import cust from '../../images/customer-service.png'
export default function Contact() {
  return (
      <>
      <NavBar />
        <div className="main-contact">
              <div className="banner">
                <div className="wrapper">
                   <div className="cards">
                       <div className="card">
                             <div className="logo">
                               <IoMailOpen />
                             </div>
                             <h3>Email us</h3>
                             <p>Email us for general queries, including marketing and partnership opportunities.</p>
                             <div className="info">hello@helpcenter.com</div>
                       </div>
                       <div className="card">
                             <div className="logo">
                               <IoCallSharp />
                             </div>
                             <h3>Call us</h3>
                             <p>Call us to speak to a member of our team. We are always happy to help.</p>
                             <div className="info">+1 (646) 786-5060</div>
                       </div>
                       <div className="card">
                             <div className="logo">
                               <img src={cust} alt="" />
                             </div>
                             <h3>Support</h3>
                             <p>Check out helpful resources, FAQs and developer tools.</p>
                             <button>Support Center <span><FaArrowRight /></span></button>
                       </div>
                    </div>
                  </div>
              </div>

              <div className="form-section">
                <div className="wrapper">
                  <div className="left">
                  <h3>Get In Touch With Us</h3>
                  <p>We encourage you to contact us with any questions or comments you may have</p>
                 </div>
                 <div className="right">
                  <label htmlFor="">Full Name*</label>
                  <input type="text" />
                  <label htmlFor="">Email Address*</label>
                  <input type="email" />
                  <label htmlFor="">Phone Number*</label>
                  <input type="Number" />
                  <label htmlFor="">Message*</label>
                   <textarea name="" id="" cols="30" rows="10"></textarea>
                  <button>Submit</button>
                 </div>
                </div>
                 
              </div>
        </div>
        <Footer />
      </>
  )
}
