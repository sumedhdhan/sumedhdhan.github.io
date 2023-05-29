import style from "../styles/Footer.module.css";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

import { BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs";
import {SiSubstack} from "react-icons/si";
import Link from "next/link";
import { BsMailbox } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.getHours() + ":" + current.getMinutes();
  const wrongTime = (current.getMinutes < 10);
  return (
    <div className={style.footer}>
      <div>
        <p className={style.find}>my socials:</p>
        <motion.div whileHover={{scale:1.5,transition: {duration: 0.2,repeat: 0  }}}> 
        <a
          href="mailto:sumedh.dhan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
  
          <span>
            <AiOutlineMail/>
          </span>
        </a> 
        </motion.div>
        <motion.div whileHover={{scale:1.5,transition: {duration: 0.2,repeat: 0  }}}> 
        <a
          href="https://www.linkedin.com/in/sumedh-dhanvanthry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsLinkedin />
          </span>
        </a>
        </motion.div>
        <motion.div whileHover={{scale:1.5,transition: {duration: 0.2,repeat: 0  }}}> 
        <a
          href="https://github.com/sumedhdhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <BsGithub />
          </span>
        </a>
        </motion.div>
        <motion.div whileHover={{scale:1.5,transition: {duration: 0.2,repeat: 0  }}}> 
        <a
          href="https://substack.com/@sume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <SiSubstack />
          </span>
        </a>
        </motion.div>
      </div>
      <div className={style.footer_date}>
      {(current.getMinutes() < 10) && (current.getHours() < 10) &&
        <div>
          accessed at 0{current.getHours()}:0{current.getMinutes()} | {date}
        </div>
      }

       {(current.getMinutes() < 10) && (current.getHours() > 9) &&
        <div>
          accessed at {current.getHours()}:0{current.getMinutes()} | {date}
        </div>
      }

      {(current.getMinutes() > 10) && (current.getHours() < 10) &&
       <div> accessed at 0{time + " | " + date} </div>}

      {(current.getMinutes() > 10) && (current.getHours() > 9) &&
       <div> accessed at {time + " | " + date} </div>}

    </div>
    </div>
  );
};

export default Footer;
