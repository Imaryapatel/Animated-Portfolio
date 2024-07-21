import './Navbar.scss';
import { motion } from "framer-motion"
import Sidebar from "../sidebar/sidebar"

const Navbar = () => {
  return (
    <div className = "navbar" >
        {/* {Sidebar} */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial ={{opacity:0, scale: 0.5}}
            animate ={{opacity:1, scale: 1}}
            transition ={{duration:0.5}}>Portfolio</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/arya-patel-b79239203/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://www.instagram.com/imaryapatel/"><img src="/instagram.png" alt="" /></a>
                <a href="https://github.com/Imaryapatel"><img src="/git.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
