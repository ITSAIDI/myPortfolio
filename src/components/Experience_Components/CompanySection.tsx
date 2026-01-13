import { BiBuildings } from "react-icons/bi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

type CompanySectionInput ={
  name:string,
  logo:string,
  yourTitle:string,
  location:string,
  timeSlot:string,
  companyWebsite:string,
}

export default function CompanySection(Input:CompanySectionInput) {
  
  return (
    <div className="flex flex-col font-nunito gap-3">
       <div className="flex flex-row items-center gap-2">
          <img src={Input.logo} alt="amazon logo" className="rounded-md w-10 h-10 border border-gray-600"/>
          <h1 className="flex flex-row items-center gap-2 rounded-full border border-gray-600 px-2 h-fit text-gray-400 backdrop-blur-lg">
            <BiBuildings className="text-green1" />
            {Input.name}</h1>
       </div>

       <h1 className="text-white font-bold lg:text-2xl">{Input.yourTitle}</h1>
       <h1 className="text-white flex flex-row items-center gap-5">
        <MdOutlineCalendarMonth className="text-green1 text-xl"  />
        {Input.timeSlot}</h1>
      <h1 className="text-white flex flex-row items-center gap-5">
        <IoLocationOutline className="text-purple1 text-xl"  />
        {Input.location}</h1>

      <a href={Input.companyWebsite} target="_blank" className="text-green1 flex flex-row items-center gap-5 font-bold" >
        <FaArrowUpRightFromSquare className="text-green1"  />
        Company website</a>
    </div>
  )
}
