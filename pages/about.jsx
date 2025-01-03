/* eslint-disable react/jsx-no-comment-textnodes */

import style from "../styles/About.module.css";
import {isMobile} from 'react-device-detect';
import { BsCodeSlash, BsCodeSquare, BsFolderFill, BsGear, BsGearFill, BsMarkdownFill, BsPenFill } from "react-icons/bs";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { SiCplusplus, SiCsharp, SiFramer, SiHtml5, SiJavascript, SiMatrix, SiReact, SiThreedotjs, SiWindows } from "react-icons/si";
import {FaCubes, FaDatabase, FaJava, FaPython, FaMagnet, FaDumbbell, FaMusic} from "react-icons/fa"
import {GiComputing, GiGuitar, GiLogicGateAnd} from "react-icons/gi"
import {IoIosJournal} from "react-icons/io"
const About = () => {
  
  const [showFrontend, setShowFrontend] = useState(true); //code 0
  const [showBackend, setShowBackend] = useState(false); //code 1
  const [showEng, setShowEng] = useState(false); //code 2
  const [showHobbies, setShowHobbies] = useState(false); //code 3
  const [showMenu, setShowMenu] = useState(true);

  function viewNewSkill(code){
      setShowFrontend(false);
      setShowBackend(false);
      setShowEng(false);
      setShowHobbies(false);

      if (code == 0){
        setShowFrontend(!showFrontend);
      }
      if (code == 1){
        setShowBackend(!showBackend);
      }
      if (code == 2){
        setShowEng(!showEng);
      }
      if (code == 3){
        setShowHobbies(!showHobbies);
      }
  }
  
  const y = useMotionValue(400);

  const textColor = useTransform(y, [0, 400, 800], ["#04ff00", "#00fff7", "#d161fa"]);

  function handleMouse(event) {
      y.set(event.pageY)
  }

  return (
    <div>
        <title>Sumedh Dhanvanthry</title>
    
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Sumedh's personal website" />
        <link rel="icon" href="weblogo.ico" />
 
        
    <div className={style.about} onMouseMove={handleMouse}>
      <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
        {" "}
        {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
      </div>

      <div className={style.left}>
        <motion.div
          className={style.left_number}
          whileHover={{
            translateY: [0, 25, 0]
            ,

            rotateY:[1, 1.1, 1],
            
          transition: {
            duration: 1,
            repeat:Infinity
          }
        }}

          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "100px",
              opacity: 0,
            },
            visible: {
              y: "-370px",
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.2,
                duration: 1,
              },
            },
          }}
          
        >
          <span className={style.text_fade_01}>83</span>
          <span className={style.text_fade_01}>84</span>
          <span className={style.text_fade_01}>85</span>
          <span className={style.text_fade_01}>86</span>
          <span className={style.text_fade_01}>87</span>
          <span className={style.text_fade_01}>88</span>
          <span className={style.text_fade_01}>89</span>
          <span className={style.text_fade_01}>90</span>
          <span className={style.text_fade_01}>91</span>
          <span className={style.text_fade_01}>92</span>
          <span className={style.text_fade_01}>93</span>
          <span className={style.text_fade_01}>94</span>
          <span className={style.text_fade_01}>95</span>
          <span className={style.text_fade_01}>96</span>
          <span className={style.text_fade_01}>97</span>
          <span className={style.text_fade_01}>98</span>
          <span className={style.text_fade_02}>99</span>
          <span className={style.text_fade_03}>100</span>
          <span>101</span>
          <span>102</span>
          <span>103</span>
          <span>104</span>
          <span>105</span>
          <span>106</span>
          <span>107</span>
          <span>108</span>
          <span>109</span>
          <span>110</span>
          <span>111</span>
          <span>112</span>
          <span>113</span>
          <span>114</span>
          <span>115</span>
          <span className={style.text_fade_03}>116</span>
          <span className={style.text_fade_02}>117</span>
          <span className={style.text_fade_01}>118</span>
        </motion.div>
        <div className={style.left_line}></div>
        <div className={style.left_line2}></div>
        <motion.div
          className={style.left_about}
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
                duration: 3,
              },
            },
          }}
        >
          <span className={style.ml_2}> /*</span>
          <span>
                  <motion.div className={style.bit} style={{color: textColor}}>
                 A bit about me:
                </motion.div>
     
            </span>
          <span>I&apos;m a third-year undergraduate student passionate about the intelligent design and implementation of complex systems. I&apos;ve worked across the stack in  my personal
          and professional ventures, and am currently searching for a Summer 2025 internship. </span>
          <br></br>
      
          <span>As an avid learner, I&apos;m always looking for new opportunities to put my 
          ever-developing skillset to use. I am grateful to be surrounded by a  
          network of similarly ambitious individuals here at  UWaterloo, and I am  
          looking forward to making my mark on the world of software development.</span>
          <span>&nbsp;</span>

          <span className={style.ml_2}>*/</span>
        </motion.div>
      </div>
      {showMenu && (
        <motion.div
          className={style.right}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              x: "100px",
              opacity: 0,
            },
            visible: {
              x: "0",
              opacity: 1,
              transition: {
                duration:0.5,
                type: "spring",
                delay:0,
              },
            },
          }}
        >
          <div className={style.right_container}>
          <img src="./square_bridge_sumedh_bw.png" alt="picture of me" className={style.center_image}></img>
            <h3 style={{paddingTop: "1rem"}}>File Explorer</h3>
            <div className={style.right_interest}>
              
              <span>
                <FiChevronDown />
              </span>
              <span style={{ marginLeft: "5px", fontSize:20}}>My Experience</span>
              <div className={style.skill}>
                <div
                  onClick={(e) => viewNewSkill(0)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showFrontend ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(235,203,139)" }}>
                    <BsFolderFill />
                  </span>
                  <span> frontend</span>
                </div>
                <AnimatePresence>
                  {showFrontend && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiJavascript/>  &nbsp;javascript
                        </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiHtml5/> &nbsp;HTML & CSS
                        </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiReact/> &nbsp;react
                        </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiWindows/> &nbsp;winforms
                        </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiFramer/> &nbsp;framer motion
                        </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <SiThreedotjs/> &nbsp;three.js
                        </motion.div>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => viewNewSkill(1)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showBackend ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(136,192,208)" }}>
                    <BsFolderFill />
                  </span>
                  <span> backend</span>
                </div>
                <AnimatePresence>
                  {showBackend && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaJava /> &nbsp;java
                        </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <SiCplusplus/> &nbsp;C/C++
                        </motion.div>

                      </p>  
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaPython /> &nbsp;python
                        </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <SiCsharp/> &nbsp;C#
                        </motion.div>

                      </p>
                      
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaDatabase/> &nbsp;SQL
                        </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <BsGearFill /> &nbsp;OOP
                        </motion.div>

                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => viewNewSkill(2)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showEng ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(191,97,106)" }}>
                    <BsFolderFill />
                  </span>
                  <span> engineering</span>
                </div>
                <AnimatePresence>
                  {showEng && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <GiComputing/> &nbsp;theory of computation
                    </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaCubes /> &nbsp;data structures & algorithms
                    </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <SiMatrix /> &nbsp;linear algebra
                    </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <GiLogicGateAnd /> &nbsp;digital circuits
                    </motion.div>

                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaMagnet/> &nbsp;electromagnetism
                    </motion.div>

                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={style.skill}>
                <div
                  onClick={(e) => viewNewSkill(3)}
                  className={style.dropdownSkill}
                >
                  <span>
                    {showHobbies ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                  <span style={{ color: "rgb(163,190,140)" }}>
                    <BsFolderFill />
                  </span>
                  <span> hobbies</span>
                </div>
                <AnimatePresence>
                  {showHobbies && (
                    <motion.div
                      className={style.showSkill}
                      initial="hidden"
                      animate="visible"
                      exit="go"
                      variants={{
                        hidden: {
                          y: "-20px",
                          opacity: 0,
                        },
                        visible: {
                          y: "0",
                          opacity: 1,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.5,
                          },
                        },
                        go: {
                          y: "-20px",
                          opacity: 0,
                          transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 0.3,
                          },
                        },
                      }}
                    >
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <BsPenFill /> &nbsp;storytelling
                    </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <FaDumbbell /> &nbsp;weightlifting
                    </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 

                        <GiGuitar /> &nbsp;playing guitar
                    </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <IoIosJournal /> &nbsp;journalling
                    </motion.div>
                      </p>
                      <p>
                      <motion.div whileHover={{scale:1.05,transition: {duration: 0.2,repeat: 0  }}}> 
                        <FaMusic /> &nbsp;composing
                    </motion.div>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              
            </div>
          </div>
        </motion.div>
      )}
    </div>
    </div>
  );
};

export default About;
