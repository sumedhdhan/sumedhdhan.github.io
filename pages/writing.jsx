/* eslint-disable react/jsx-no-comment-textnodes */

import style1 from "../styles/Project.module.css";
import style2 from "../styles/About.module.css";
import Substack from "../components/Substack";
import SubstackFeed from "../components/SubstackFeed";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";

const Writing = () => {

    const y = useMotionValue(400);

    const textColor = useTransform(y, [0, 400, 800], ["#1c1ceb", "#552cdb", "#2d75c2"]);
  
    function handleMouse(event) {
        y.set(event.pageY)
    }

  return (
    <div>

      <title>Sumedh Dhanvanthry - Writing</title>
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

                  className={style1.project_writing_container}
               
        >
        <motion.div style={{color: textColor, fontWeight: "bold", fontSize:40}}>
                 <h>
                   My writing:
                    </h>
        </motion.div>
        <div className={style1.project_writing_subtitle}>
        In November 2022 I started a Substack page called Stylings. Browse my work below!
      </div>
        <div>
        <motion.div  className={style1.project_substack_logo} whileHover={{scale:1.1}} whileTap={{scale:0.9}}> 
        <a href="https://stylings.substack.com" target="_blank" rel="noreferrer">
            <img src = "./stylings.png">
            </img>
            </a>
            </motion.div>
        

            <div className={style1.project_substack_signup}>
              <Substack
                substackUrl="stylings.substack.com"
                placeholder="example@gmail.com"
                buttonText="Subscribe"
                theme="purple"
              />  
            </div>
        </div>
       
        <div className={style1.project_card_container}>
            
          {/*  
                */}

            <div style={{padding:"1rem" , paddingBottom:"35vh"}}>

                  <SubstackFeed
                substackUrl="stylings.substack.com"
              posts={12}
              layout="center"   
              colors={{
                primary: "#FFFFFF",
                secondary: "#D8B8FF",
                background: "#160321",
                    }}
              />      
            </div>
            
           

              
                    
        </div>
        </motion.div>
      </div>
    </div>
  </div>
  );
};

export default Writing;
