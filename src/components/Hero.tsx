import { BackgroundBeams } from "./background-beams";

export default function Hero() {
return (
    <div className="w-full bg-primary relative h-80">
      {/* Animated background */}
      <BackgroundBeams />

      {/* Intro text */}
      <div className="text-center xl:text-left order-2 xl:order-none mb-0">
        <span>Full Stack AI Engineer</span>
        <h1 >
            Hello  I'm  
            <br />
            <span className="text-green1">Noureddine Saidi</span>
        </h1>
      </div>
    </div>
  )
}