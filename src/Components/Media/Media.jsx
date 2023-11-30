import "./Media.scss";
import Navbar from '../NavBar/NavBar'
import Footer from "../Footer/Footer"
import playBtn from '../../../public/PlayBtn.svg'
export default function Media() {
  return (
    <>
       <Navbar />
       <div className="main-media">
           <div className="banner">
                 <img src={playBtn} alt="" />
           </div>

           <div className="info">
              <div className="wrapper">
                  <h3>Extraplanetary how far <br /> away with pretty stories</h3>
                  <div className="vert-Bar"></div>
                  <p> Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.</p>
              </div>
           </div>
           
           <div className="images-section">
               <div className="row-1">
                 <img src="/medImg-1.png" alt="" />
                 <img src="/medImg2.png" alt="" />
                 <img src="/medImg3.png" alt="" />
               </div>
               <div className="row-2">
                 <img src="/mediaImg4.png" alt="" />
               </div>
               <div className="row-3">
               <img src="/mediaImg5.png" alt="" />
                 <img src="/mediaImg6.png" alt="" />
                 <img src="/mediaImg7.png" alt="" />
               </div>
               <div className="row-4">
                <img style={{width:"calc(30% - 20px)"}} src="/medImg8.png" alt="" />
                <img style={{width:"calc(60% - 20px)"}} src="/medImg9.png" alt="" />
               </div>
               <div className="row-5">
               <img src="/mediaImg4.png" alt="" />
               </div>
           </div>
            
           <div className="btn">
               <button>Show More</button>
            </div> 
       </div>

       <Footer />
    </>
  )
}
