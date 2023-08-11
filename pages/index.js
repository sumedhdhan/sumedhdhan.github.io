import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import Model from "../components/Model";
import Model2 from "../components/Model2";
import Substack from "../components/Substack";
import SubstackFeed from "../components/SubstackFeed";
export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  useEffect(() => {
    const handleInput = () => {
      if (text === "about") {
        router.push({
          pathname: "/about",
        });
      }
      if (text === "projects") {
        router.push({
          pathname: "/projects",
        });
      }
      if (text === "writing") {
        router.push({
          pathname: "/writing",
        });
      }
    };
    handleInput();
  }, [router, text]);

  const y = useMotionValue(400);

  const nameColor = useTransform(y, [0, 800], ["#3ed8f7", "#d161fa"]);

  function handleMouse(event) {
      y.set(event.pageY)
  }


  return (
    <div className={styles.container} onMouseMove={handleMouse}>
      <Head>
        <title>Sumedh Dhanvanthry</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Sumedh's personal website" />
        <link rel="icon" href="weblogo.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.two_col}>
          <div className={styles.left_col}>            
            <AnimatePresence>
              <motion.div
                className={styles.left_col_top}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                      duration: 1,
                    },
                  },
                }}
              >
                <p>Hello! I&apos;m</p>
                <h1>
                  <motion.div 
                  style={{color: nameColor}}
                  whileHover={{
                    scale:1.1,
                    //color:[nameColor, "rgb(0,0,0)", nameColor],

                  transition: {
                    duration: 0.5,
                    repeat: 0
                  }
                }}>
                Sumedh Dhanvanthry,
                </motion.div>
                </h1>

                <h3>a Software Engineering student @UWaterloo.</h3>
              </motion.div>
            </AnimatePresence>
            <div className={styles.left_col_bottom}>
              <div style={{ display: "flex", gap: "10px"}}>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      x: "-100px",
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 1,
                      },
                    },
                  }}
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                >
                  //
                </motion.p>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      x: "100px",
                      opacity: 0,
                    },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        duration: 1,
                      },
                    },
                  }}
                >
                  {" "}
                  type the code below to continue:
                </motion.p>
              </div>
              <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: "100px",
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    duration: 1,
                  },
                },
              }}
                className={styles.input}
                whileHover={{
                  scale: [1, 1.05, 1],
                  transition: {
                    duration: 1.5,
                    repeat:Infinity
                  },
                }}
              >
                <p>&#x276F;</p>
                <input
                  type="text"
                  placeholder="'about', 'projects', 'writing'"
                  onChange={(e) => setText(e.target.value)}
                />
              </motion.div>
            </div>
          </div>
          <div>
            <div style={{border: "thin solid #5d17b3", objectFit:"fill"}}>
              <Model />   
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
