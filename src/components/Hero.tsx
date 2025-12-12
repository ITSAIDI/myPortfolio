import { Particles } from "./ui/particles"
import TypingText from "./ui/typing-text"


export default function Hero() {
return (
    <div className="w-full relative h-80 p-7 bg-primary">
      {/* Animated background */}
       <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#ffffff"
        size={0.8}
      />

      {/* Hero text */}
      <div className="lg:text-left mb-0 text-white font-martianmono font-semibold text-xl lg:text-3xl flex flex-col gap-0.5 lg:gap-2">
        <h1 >Hello  I'm </h1>
        <span className="text-green1 font-martianmono font-bold text-2xl lg:text-4xl">Noureddine Saidi</span>
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
    </div>
  )
}

{/*
<p className="mt-3 leading-5 max-w-[300px] text-[10px] lg:text-lg lg:max-w-[600px] lg:leading-8">
    I build and design AI based solutions in multiple industries and I'm
    proficient in various technologies and programming languages.
</p>
*/}