import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={style.navbar}>
      <ul>
        <Link href="/" passHref>
        
          <li className={router.pathname == "/" ? `${style.active}` : ""}>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}> 
            welcome
            </motion.div>
          </li>
          
        </Link>
        <Link href="/about" passHref>
          <li className={router.pathname == "/about" ? `${style.active}` : ""}>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}>  
            about
            </motion.div>
          </li>
        </Link>
        <Link href="/projects" passHref>
          <li className={router.pathname == "/projects" ? `${style.active}` : ""}>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}> 
            projects
            </motion.div>
          </li>
        </Link>

        <Link href="/writing" passHref>
        
          <li className={router.pathname == "/writing" ? `${style.active}` : ""}>
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.8}}> 
            writing
            </motion.div>
          </li>
          
        </Link>
        
    

       
      </ul>
    </div>
  );
};

export default Navbar;
