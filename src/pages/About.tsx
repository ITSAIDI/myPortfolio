import { InteractiveGridPattern } from "@/components/ui/BG2"
import { delay, motion } from "framer-motion";
import { BiFace } from "react-icons/bi";


export default function About() {
  const fadInAnimation = {
    initial : {opacity : 0},
    whileInView : {opacity : 1},
  }
 return (
    <div className="relative bg-black1 h-fit" id="about">

      <div className="relative z-10 text-white font-nunito flex flex-col gap-4 p-7 max-w-[700px]">
        {/* Badge */}
        <div className="border border-gray-600 w-fit rounded-full px-3 py-0.5 text-gray-400 
        flex flex-row gap-1 items-center font-bold ">
           <BiFace className="text-green1 text-xl"/>
           <h1>About</h1>
        </div>

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
    
      <InteractiveGridPattern 
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
