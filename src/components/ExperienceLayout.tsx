import CompanySection from "./Experience_Components/CompanySection"
import amazonLogo from "@/assets/amazon.png"


export default function ExperienceLayout() {
    const fakeInput = {
            name: "AMAZON",
            logo: amazonLogo,
            yourTitle: "Senior Frontend Developer",
            location: "Seattle, WA",
            timeSlot: "Jan 2023 - Present",
            companyWebsite: "https://www.amazon.com",
    }
  return (
    <div className="flex flex-row mb-10">
        <CompanySection {...fakeInput} />
    </div>
  )
}
