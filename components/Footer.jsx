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
        <motion.div whileHover={{scale:1.5,transition: {duration: 0.2,repeat: 0  }}}> 
        <a
          href="https://se-webring.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <svg width="1.5em" height="1.5em" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="960" height="960" fill="none"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M390.499 272.146V687.477C491.737 672.742 569.501 585.38 569.501 479.811C569.501 374.243 491.737 286.881 390.499 272.146ZM367.396 749.527C364.991 749.591 362.577 749.623 360.157 749.623C211.506 749.623 91 628.824 91 479.811C91 330.799 211.506 210 360.157 210C362.577 210 364.991 210.032 367.396 210.096C368.31 210.032 369.233 210 370.163 210H869V749.623H370.163C369.233 749.623 368.31 749.591 367.396 749.527ZM330.687 687.602V272.021C229.023 286.379 150.813 373.94 150.813 479.811C150.813 585.683 229.023 673.244 330.687 687.602ZM529.346 269.958H809.187V689.665H529.346C590.325 640.201 629.313 564.57 629.313 479.811C629.313 395.053 590.325 319.422 529.346 269.958Z" fill="#b37ff2"/>
            </svg>
          </span>
        </a>
        </motion.div>
      </div>
      <div className={style.footer_date}>
      {(current.getMinutes() < 10) && (current.getHours() < 10) &&
        <div>
          refreshed at 0{current.getHours()}:0{current.getMinutes()} | {date}
        </div>
      }

       {(current.getMinutes() < 10) && (current.getHours() > 9) &&
        <div>
          refreshed at {current.getHours()}:0{current.getMinutes()} | {date}
        </div>
      }

      {(current.getMinutes() > 10) && (current.getHours() < 10) &&
       <div> refreshed at 0{time + " | " + date} </div>}

      {(current.getMinutes() > 10) && (current.getHours() > 9) &&
       <div> refreshed at {time + " | " + date} </div>}

    </div>
    </div>
  );
};

export default Footer;
