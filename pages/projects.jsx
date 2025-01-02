/* eslint-disable react/jsx-no-comment-textnodes */

import style1 from "../styles/Project.module.css";
import style2 from "../styles/About.module.css";

import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

const Projects = () => {

    const y = useMotionValue(400);

    const textColor = useTransform(y, [0, 400, 800], ["#e66d30", "#e03f3f", "#e63094"]);
  
    function handleMouse(event) {
        y.set(event.pageY)
    }

  return (
    <div>
      <title>Sumedh Dhanvanthry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Sumedh's personal website" />  
        <link rel="icon" href="weblogo.ico" />
    
    <div className={style2.about} onMouseMove={handleMouse}>
        <div className={style1.project_container}>
        <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                      y: "300px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0px",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 1.5,
                      },
                    },
                  }}

                  className={style1.project_container}
               
        >
        <motion.div style={{color: textColor, fontWeight: "bold", fontSize:40}}>
                 <h>
                   My top projects:
                    </h>
        </motion.div>
        <div className={style1.project_subtitle}>
        I&apos;m always looking for learning opportunities. If you&apos;re interested in working together, be in touch!
      </div>
        <div>
            
        </div>
       
        <div className={style1.project_card_container}>
         
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                      y: "300px",
                      opacity: 0,
                    },
                    visible: {
                      y: "0px",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        delay: 0.2,
                        duration: 2,
                      },
                    },
                  }}
                className={style1.project_card}
              >
                <div className={style1.project_card_top}>
                  <div className={style1.project_card_head}>
                    <div>
                    <motion.div 
                        whileHover={{scale:1.1}}>
                      <p>WatRank</p> 
                    </motion.div>
                    </div>
                   
                  </div>
                  <div className={style1.project_card_body}>
                    <p>Your new go-to platform for gathering job postings from WaterlooWorks, anonymously sharing job statuses, and crowd-sourcing insights..</p>     
                    <img src="./watrank.jpeg" alt="Craven" className={style1.project_card_image}></img>

                  </div>
                </div>
                <div className={style1.project_card_bottom}>
                 
                  <motion.button layout className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="https://www.youtube.com/watch?v=OZhDTu3HLAY" rel="noreferrer" target="_blank"> 
                   
                    <a href="https:watrank.com" rel="noreferrer" target="_blank" data-inline="true">
                         Use WatRank today
                    </a>
                    
                  </motion.button>
                    <motion.button className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0.5rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}}> 
                    <a href="https://github.com/TheMangoMen" rel="noreferrer" target="_blank" data-inline="true">
                     Check out the code
                    </a>
                    </motion.button>
                
                </div>
                <div className={style1.project_card_top}>
                  <div className={style1.project_card_head}>
                    <div>
                    <motion.div 
                        whileHover={{scale:1.1}}>
                      <p>Craven</p> 
                    </motion.div>
                    </div>
                   
                  </div>
                  <div className={style1.project_card_body}>
                    <p>A kitchen security system to keep your roommates in check and your snacks in stock.</p>     
                    <img src="./craven.png" alt="Craven" className={style1.project_card_image}></img>

                  </div>
                </div>
                <div className={style1.project_card_bottom}>
                 
                  <motion.button layout className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="https://www.youtube.com/watch?v=OZhDTu3HLAY" rel="noreferrer" target="_blank"> 
                   
                    <a href="https://www.youtube.com/clip/UgkxH7k9ATEGDzXkWW4jzYlcF5s5La8ZCkPV" rel="noreferrer" target="_blank" data-inline="true">
                        Our demo video
                    </a>
                    
                    </motion.button>
                    <motion.button className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0.5rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}}> 
                    <a href="https://devpost.com/software/craven" rel="noreferrer" target="_blank" data-inline="true">
                     Check out on Devpost
                    </a>
                    </motion.button>
                
                </div>

                  
                <div className={style1.project_card_top}>
                  <div className={style1.project_card_head}>
                    <div>
                    <motion.div 
                        whileHover={{scale:1.1}}>
                      <p>BoardAtWork</p> 
                    </motion.div>
                    </div>
                   
                  </div>
                  <div className={style1.project_card_body}>
                    <p>A high-resolution XY-plotter used to copy image files onto a whiteboard with 3 depth values. Applications include text transcription and data-plotting, as well as good old-fashioned portraiture.</p>
                    <img src="./boardatwork.png" alt="BoardAtWork" className={style1.project_card_image}></img>
                  </div>
                </div>
                <div className={style1.project_card_bottom_last}>
                 
                  <motion.button layout className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}} href="https://www.youtube.com/watch?v=OZhDTu3HLAY" rel="noreferrer" target="_blank"> 
                   
                    <a href="https://www.youtube.com/watch?v=OZhDTu3HLAY" rel="noreferrer" target="_blank" data-inline="true">
                        Our demo video
                    </a>
                    
                    </motion.button>
                    <motion.button className={style1.project_card_bottom} style={{backgroundColor:"transparent", border:"none", margin:0, paddingTop:"0.5rem"}} whileHover={{scale:1.1}} whileTap={{scale:0.9}}> 
                    <a href="https://github.com/nixiaotang/Board-At-Work" rel="noreferrer" target="_blank" data-inline="true">
                     Check out on Github
                    </a>
                    </motion.button>
                
                </div>
             
                
                {/*
                <div className={style1.project_card_top}>
                  <div className={style1.project_card_head}>
                    <div>
                    <motion.div 
                        whileHover={{
                            scale:1.1,
                            transition: {
                            duration: 0.2,
                            repeat: 0
                            }
                    }}>
                      <p>Fit Cheque</p> 
                    </motion.div>
                    </div>
                    <div>
                      <span>⭐stargazerCount</span>
                    </div>
                  </div>
                  <div className={style1.project_card_body}>
                    <p>url2</p>
                  </div>
                </div>
                <div className={style1.project_card_bottom}>
                  <div>
                    <a rel="noreferrer" target="_blank">
                      Check out on Github
                    </a>
                  </div>
                </div>
                <div className={style1.project_card_top}>
                  <div className={style1.project_card_head}>
                    <div>
                    <motion.div 
                        whileHover={{
                            scale:1.1,
                            transition: {
                            duration: 0.2,
                            repeat: 0
                            }
                    }}>
                      <p>Fit Cheque</p> 
                    </motion.div>
                    </div>
                    <div>
                      <span>⭐stargazerCount</span>
                    </div>
                  </div>
                  <div className={style1.project_card_body}>
                    <p>url2</p>
                  </div>
                </div>
                <div className={style1.project_card_bottom_last}>
                  <div>
                    <a rel="noreferrer" target="_blank">
                      Check out on Github
                    </a>
                  </div>
                </div>
                */}
              </motion.div>  
                    
        </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default Projects;
