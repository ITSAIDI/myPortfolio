import { InteractiveGridPattern } from "@/components/ui/BG2"




export default function About() {
 return (
    <div className="relative bg-black1 h-fit" id="about">
      {/* About text */}
      <div className="relative z-10 text-white font-nunito flex flex-col gap-4 p-7 max-w-[700px]">
        <h1 className="text-xl font-bold lg:text-4xl">From Model to Interface</h1>
        <p className="lg:text-lg max-w-[700px]">
          <span className="font-bold text-green1">Full Stack AI Engineer </span>
          passionate about turning artificial intelligence into practical, human-centered applications. 
          I specialize in designing intelligent systems that combine robust AI models with elegant, intuitive interfaces.
        </p>
      </div>
    
      <InteractiveGridPattern 
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
