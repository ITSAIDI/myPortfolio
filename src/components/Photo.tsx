
// npm install framer-motion
import profileImage from "@/assets/Profile.png";
import { useState, useEffect } from "react";
import { motion,AnimatePresence } from "framer-motion"

const ImageAnnimationIn1={
    initial : {opacity : 0},
    animate : {opacity : 1},
    transition : {delay : 1, duration : 0.4}
}
const ImageAnnimationIn2={
    initial : {opacity : 0},
    animate : {opacity : 1},
    transition : {delay : 1.4, duration : 0.4}
}

function useScreenWidth(small:number,large:number) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
   if (width < 1024) return small/2
  return large/2;
}


function Photo() {
    const imageDimLargeScreen = 400
    const imageDimSmallScreen = 200
    const dimension = useScreenWidth(imageDimSmallScreen,imageDimLargeScreen);
    return (        
 
    <AnimatePresence>
        <div className="h-full w-full flex items-center justify-center">
        <motion.div
            {...ImageAnnimationIn1}>

                <motion.div    
                            className="mix-blend-lighten items-center justify-center flex relative"
                            {...ImageAnnimationIn2}            
                            >
                                <img 
                                className={`object-cover w-[${imageDimSmallScreen}px] h-[${imageDimSmallScreen}px] lg:w-[${imageDimLargeScreen}px] lg:h-[${imageDimLargeScreen}px] rounded-full`}

                                src={profileImage} alt="profile image" />
                            <motion.svg
                            className={`absolute w-[${imageDimSmallScreen}px] h-[${imageDimSmallScreen}px] lg:w-[${imageDimLargeScreen}px] lg:h-[${imageDimLargeScreen}px]`}>
                                    <motion.circle
                                    cx={dimension} cy={dimension} r={dimension}
                                    fill="transparent"
                                    stroke="#00ff99"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ strokeDasharray: "24 10 0 0" }}
                                    animate={{ 
                                    strokeDasharray: [ "15 120 25 25", "16 25 92 72", "4 250 22 22" ],
                                    rotate: [120, 360] 
                                    }}
                                    transition={{
                                    delay: 1,
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    }}
                                    
                                
                                    >

                                </motion.circle>

                            </motion.svg>

                </motion.div>

        </motion.div>
        </div>

    </AnimatePresence>

    )
}


export default Photo