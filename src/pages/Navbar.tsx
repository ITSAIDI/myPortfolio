import { motion, scale } from "framer-motion";

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
    <div className="flex flex-row  bg-green1 justify-center px-3 mx-auto w-fit rounded-full">
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
  )
}
