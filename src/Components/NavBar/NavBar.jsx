import './NavBar.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <div className="wrapper">
            <motion.img
             initial={{opacity:0,scale:0.5}}
             animate={{opacity:1,scale:1}}
             transition={{duration:1}}
             src="./AQC.svg"
            />
            <div className="links">
              <ul>
                   <li onClick={()=>navigate("/")}>About Us</li>
                   <li>Products</li>
                   <li onClick={()=>navigate("/contract")}>Contract Manufacturer</li>
                   <li onClick={()=>navigate("/technology")}>Technology</li>
                   <li onClick={()=>navigate("/media")}>Media</li>
                   <li className="contactLink" onClick={()=>navigate("/contact")}>Contact</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

