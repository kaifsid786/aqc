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
            setShowHamB(false);
          }
       })
  },[showhamMenu])

  return (
    <div className='navbar'>
        <div className="wrapper">
            <motion.img
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:1}}
             src="./AQC.svg"
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
                 <div className="line"></div>
                 <div className="line"></div>
                 <div className="line"></div>
            </div>

            <div className={showHamB?"hamMenu slideB":"hamMenu slide"} style={!showhamMenu?{display:"none"}:{}}>
                <div className="ham-links">
                  <ul>
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

