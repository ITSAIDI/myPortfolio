import Button from "../components/Button"
import Photo from "../components/Photo"
import { Particles } from "../components/ui/BG1"
import TypingText from "../components/ui/TypingText"
import Navbar from "./Navbar"
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";

// Nunito,Josefin Sans
export default function Hero() {
  const SocialLinks = [

    {
        icon : FiGithub,
        link : "https://github.com/ITSAIDI"
        
    },
    {
        icon : SiHuggingface,
        link : "https://huggingface.co/Noureddinesa"
        
    },
    {
        icon : LuLinkedin,
        link : "https://www.linkedin.com/in/noureddine-saidi-42ba3a247/"
        
    },
    {
        icon : FaRegEnvelope,
        link : "mailto:noureddinesaidi111@gmail.com"
        
    }
  ]

  function resumeBttClick()
  {
    window.open("https://drive.google.com/file/d/1pauEf7CQUYQ2LrDnc1vbZVg4LMUYEyte/view?usp=sharing", "_blank");
  }
  function contactBttClick()
  {
    const el = document.getElementById("contact");
    //console.log("el ",el)

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = "contact";
    }
  }
return (
    <div 
    id="hero"
    className="w-full h-screen min-h-fit relative p-7 bg-black1">
      {/* Animated background */}
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#00ff99"
        size={0.8}
      />

      <Navbar />

      <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-10">
        <div className="flex flex-col lg:order-1 order-2 gap-6">
           {/* Hero text*/}

            <div className="lg:text-left text-white font-josefinsans flex flex-col gap-4">
              <h1 className="text-xl font-bold text-green1 lg:text-5xl mt-5">When AI Meets Engineering</h1>
              <p className="lg:text-xl max-w-[700px]">
                I design and deploy intelligent solutions that blend advanced machine learning with elegant, 
                functional interfaces. From data pipelines to production-ready apps.
              </p>

              <TypingText
                className="lg:text-3xl font-nunito font-bold"
                text={["MLOps", "LLMOps", "Data Science", "Mobile & Web Dev"]}
                typingSpeed={150}
                initialDelay={50}
                pauseDuration={2000}
                loop = {true}
                showCursor={true}
                cursorCharacter="✦"
                textColors={['#ffff']}
              />
           </div>

           {/* Call_To_Action */}

           <div className="flex flex-row gap-3 justify-center lg:justify-start">
            {/* Resume */} <Button text="Resume" handleClick={resumeBttClick}  iconClassname="fa-solid fa-arrow-up-right-from-square text-black1" textClassname="text-black1" buttonClassname="bg-green1 hover:bg-green2"/>
            {/* Contact*/} <Button text="Contact" handleClick={contactBttClick} buttonClassname="bg-transparent hover:text-green2 border-1 border-green1"/>
           </div>

           {/* Location, Availability*/}
           <div className="flex flex-col gap-2 mt-5 font-nunito font-bold text-white text-md">
             <div className="flex flex-row gap-1 justify-baseline">
              <IoLocationOutline  className="text-green1 text-xl"/>
              <h1>Meknes, Morocco <span className="text-green2">(open to relocation)</span></h1>
             </div>

             <div className="flex flex-row gap-1 justify-baseline">
              <MdOutlineWorkHistory  className="text-green1 text-xl"/>
              <h1>Available for full-time</h1>
             </div>             
             
           </div>

           {/* Links */}
            <div className="flex flex-row gap-4">
              {
                SocialLinks.map((item, index) => 
                (
                    <a 
                    href={item.link} 
                    key={index}
                    className="text-2xl text-gray-500 border rounded-md p-2 border-gray-600 hover:border-green1 hover:text-green1 
                    transition-colors duration-400" 
                    target="_blank"
                    >
                     <item.icon/>
                    </a>
                        
                    ))
                }       
            </div>


        </div>
        

        <div className="lg:order-2 order-1">
            <Photo />
        </div>

      </div>
    </div>
  )
}

