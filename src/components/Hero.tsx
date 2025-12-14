import Photo from "./Sub_components/Photo"
import { Particles } from "./ui/particles"
import TypingText from "./ui/typing-text"


export default function Hero() {
return (
    <div className="w-full h-full relative p-7 bg-[#1c1c22]">
      {/* Animated background */}
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#00ff99"
        size={0.8}
      />

      
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        {/* Hero text */}
        <div className="lg:order-1 order-2 lg:text-left text-white font-robotomono font-bold text-lg lg:text-2xl flex flex-col gap-0.5">
          <h1 >Hello  I'm </h1>
          <span className="text-green1 font-martianmono font-bold text-xl lg:text-3xl">Noureddine Saidi</span>
          <span>I do</span>
          <TypingText
            text={["ML & DL", "GenAI", "Data Science", "Mobile & Web Dev"]}
            typingSpeed={150}
            initialDelay={50}
            pauseDuration={2000}
            loop = {true}
            showCursor={true}
            cursorCharacter="✦"
            textColors={['#ffff']}
          />
        </div>

        {/* Hero Image */}
        <div className="lg:order-2 order-1">
            <Photo />
        </div>

      </div>
    </div>
  )
}

{/*
<p className="mt-3 leading-5 max-w-[300px] text-[10px] lg:text-lg lg:max-w-[600px] lg:leading-8">
    I build and design AI based solutions in multiple industries and I'm
    proficient in various technologies and programming languages.
</p>
*/}