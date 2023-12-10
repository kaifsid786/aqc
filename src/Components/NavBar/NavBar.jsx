import './NavBar.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {

  const navigate = useNavigate();
  const [showhamMenu,setShowHamMenu] = useState(true);
  const [showHamB,setShowHamB] = useState(false);

  useEffect(()=>{
       window.addEventListener('scroll',()=>{
           if(window.pageYOffset > 10)
           setShowHamMenu(false);
          else{
            setShowHamMenu(true);
          }
       })
  },[showhamMenu])

  return (
    <div className='navbar'>
        <div className="wrapper" style={showHamB?{background:"#003E71",transition:"all 1s ease"}:{}}>
            <motion.img
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:1}}
             src={!showHamB?"./AQC.svg":"/AQC2.svg"}
             onClick={()=>navigate('/')}
             style={{cursor:"pointer"}}
            />
            <div className="links">
              <ul>
                   <li onClick={()=>navigate("/about")}>About Us</li>
                   <li>Products</li>
                   <li onClick={()=>navigate("/contract")}>Contract Manufacturer</li>
                   <li onClick={()=>navigate("/technology")}>Technology</li>
                   <li onClick={()=>navigate("/media")}>Media</li>
                   <li className="contactLink" onClick={()=>navigate("/contact")}>Contact</li>
              </ul>
            </div>

            <div className="hamBurger" onClick={()=>{setShowHamB(!showHamB)}}>
                 <div className="line" style={showHamB?{transform: "rotateZ(-405deg) translate(0.3rem, -0.5rem)",transition:"all 1s ease"}:{}}></div>
                 <div className="line" style={showHamB?{display:"none"}:{}}></div>
                 <div className="line" style={showHamB?{transform: "rotateZ(405deg) translate(-0.9rem, -0.6rem)"}:{}}></div>
            </div>

            <div className={showHamB?"hamMenu slideB":"hamMenu"} style={(showhamMenu && showHamB)?{background:"#003E71"}:(!showhamMenu)?{display:"none"}:{left:"-100%",transition:"all 1s ease"}}>
                <div className="ham-links">
                  <ul style={showHamB?{color:"white"}:{}}>
                   <li onClick={()=>navigate("/about")}>About Us</li>
                   <li>Products</li>
                   <li onClick={()=>navigate("/contract")}>Contract Manufacturer</li>
                   <li onClick={()=>navigate("/technology")}>Technology</li>
                   <li onClick={()=>navigate("/media")}>Media</li>
                   <li className="contactLink" onClick={()=>navigate("/contact")}>Contact</li>
                   </ul>
                 </div>
            </div>
        </div>
    </div>
  )
}

