import Button from "../components/Button"
import Photo from "../components/Photo"
import { Particles } from "../components/ui/particles"
import TypingText from "../components/ui/typing-text"
import Navbar from "./Navbar"

// Nunito,Josefin Sans, Futura
export default function Hero() {

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
    <div className="w-full h-full relative p-7 bg-black1">
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

      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-col lg:order-1 order-2 gap-6">
           {/* Hero text*/}

            <div className="lg:text-left text-white font-josefinsans flex flex-col gap-4">
              <h1 className="text-xl font-bold text-green1 lg:text-4xl">When AI Meets Engineering</h1>
              <p className="lg:text-lg max-w-[700px]">
                I design and deploy intelligent solutions that blend advanced machine learning with elegant, 
                functional interfaces. From data pipelines to production-ready apps.
              </p>

              <TypingText
                className="lg:text-2xl font-nunito font-bold"
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

           <div className="">
            {/* Resume */} <Button text="Resume" handleClick={resumeBttClick}  iconClassname="fa-solid fa-arrow-up-right-from-square text-black1" textClassname="text-black1" buttonClassname="bg-green1 hover:bg-green2"/>
            {/* Contact*/} <Button text="Contact" handleClick={contactBttClick} buttonClassname="bg-transparent hover:text-green2"/>
           </div>
        </div>
        

        <div className="lg:order-2 order-1">
            <Photo />
        </div>

      </div>
    </div>
  )
}

