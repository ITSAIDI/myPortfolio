import { motion } from "framer-motion";


export default function Navbar() {
  const navs = [
    {name : "about",icon : "user"},
    {name : "experience",icon : "briefcase"},
    {name : "education",icon : "graduation-cap"},
    {name : "skills",icon : "microchip"},
    {name : "projects",icon : "folder-open"},
    {name : "contact",icon : "address-book"},
  ]

  function handleBttClick(sectionName :string)
  {
    const el = document.getElementById(sectionName);
    //console.log("el ",el)

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.location.hash = sectionName;
    }
  }
  const hoverAnimation = {
    whileHover: { y: -5, scale :1.1 },
    whileTap : {scale:1},
    transition: { type: "spring" as const, stiffness: 300, damping: 15 },
  };

  return (
    <div className="z-50">
      {/* Noureddine .  */}
      <button 
      onClick={()=>{handleBttClick("hero")}}
      className="hidden lg:block fixed top-5 font-josefinsans text-white font-bold lg:text-xl rounded-md backdrop-blur-lg px-1 py-1">
        <span className="text-green1">{"<"}</span>
        Noureddine
        <span className="text-green1">{"/>"}</span>
      </button>
      {/* Navigation Tabs */}

      <div className="fixed top-5 flex flex-row w-[250px] rounded-md left-1/2 transform -translate-x-1/2  bg-green1 lg:px-3 lg:w-fit  ">
        {navs.map((section,index)=>
        (
          <motion.button
          key={index}
          onClick={()=>{handleBttClick(section.name)}}
          {...hoverAnimation}
          className="text-black1 text-lg mb-1 lg:text-xl
            hover:bg-black1
            hover:text-green1 
            rounded-b-full w-[60px]
            transition-colors 
            duration-300 ease-in-out
            ">
            <i className={`fa-solid fa-${section.icon} `}></i>
          </motion.button>
        ))}
      </div>
  </div>
  )
}
