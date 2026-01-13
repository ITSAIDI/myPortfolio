import StatBox from "@/components/StatBox";
import { motion } from "framer-motion";
import { BiFace } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { PiCertificateBold } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import Badge from "@/components/Badge";


export default function About() {
  const fadInAnimation = {
    initial : {opacity : 0},
    whileInView : {opacity : 1},
    viewport :{ once: true }
  }
  
// pointer-events-none : To enable the hovering of the background
// Tools && Technologies : React, Typescript, Python, SQL, PosgreSQL, Github, HiggingFace, FastAPI, Flask, ReadTheDocs, LangChain. Langraph, Pythorch, Docker, MCP, Pytest, scikit-learn
 return (
    <div className="flex flex-wrap lg:flex-row lg:flex-nowrap" id="about">

       {/* Text section */}
      <div className="text-white font-nunito flex flex-col gap-4 p-7 max-w-[700px] min-w-[300px]">
        {/* Badge */}
        <Badge icon={BiFace} title="About"/>

        {/* About text */}
        <motion.h1 
        {...fadInAnimation}
        transition={{duration: 1,delay:0.5}}
        className="text-xl font-bold lg:text-4xl">From Data to UIs</motion.h1>
        
        <motion.p 
        {...fadInAnimation}
        transition={{duration: 1,delay:0.8}}
        className="lg:text-lg max-w-[700px]">
          <span className="font-bold text-green1">Full Stack AI Engineer </span>
          passionate about turning artificial intelligence into practical, human-centered applications. 
          I specialize in designing intelligent systems that combine robust AI models with elegant, intuitive user interfaces.
        </motion.p>
      </div>

      {/* Stats section */}
      <motion.div
       {...fadInAnimation}
       transition={{duration: 1,delay:1}}
       className="flex flex-wrap items-center justify-center gap-5 mx-auto">
        <StatBox icon={FaCodeBranch} text="Code Commits 2025" value={582}/>
        <StatBox icon={VscTools} text="Tools && Technologies" value={17}/>
        <StatBox icon={PiCertificateBold} text="Certifications" value={8}/>
        <StatBox icon={MdWorkspacePremium} text="End To End Projects" value={8}/>
        <StatBox icon={HiOutlineBuildingStorefront} text="Experience years" value={1}/>
      </motion.div>
    
    </div>
  );
}
