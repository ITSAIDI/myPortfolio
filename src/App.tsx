import Hero from "./pages/Hero"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="h-screen w-screen flex flex-col gap-10">
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
