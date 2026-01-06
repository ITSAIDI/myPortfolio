import Hero from "./pages/Hero"
import About from "./pages/About"
import Experience from "./pages/Experience"
import { BG2 } from "./components/ui/BG2"

//import Education from "./pages/Education"
//import Skills from "./pages/Skills"
//import Projects from "./pages/Projects"
//import Contact from "./pages/Contact"

function App() {

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Hero/>
      <div className="relative bg-black1 h-full"> {/* I grouped these sections because there are using the same bachground */} 
        <BG2 className="absolute inset-0 h-full w-full"/>
        <About/>
        <Experience/>
        
      </div>
    </div>
  )
}

export default App
