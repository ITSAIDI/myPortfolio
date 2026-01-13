import Badge from "@/components/Badge"
import ExperienceLayout from "@/components/ExperienceLayout";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";


export default function Experience() {
  return (
    <div className="flex flex-col px-7 gap-5" id = "experience">

      <Badge icon={HiOutlineBuildingStorefront} title="Experience"/>
      <ExperienceLayout/>
    </div>
  )
}
