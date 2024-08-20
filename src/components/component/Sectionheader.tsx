
import { FaListOl } from "react-icons/fa6";
import { IoGridOutline } from "react-icons/io5";



export function Sectionheader() {
  return (
    <div className="space-y-2 py-6">
      <h2 className="text-3xl font-bold tracking-tight">Favorites</h2>
      <p className="text-muted-foreground">Como você pretende ajudar o mundo hoje.</p>
      <button className="border-2 border-[#D1D5DB] rounded-lg px-4 py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
      <FaListOl className="text-black"/>
      List
          </button>
        <button className="border-2 border-[#D1D5DB] rounded-lg px-4 py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
      <IoGridOutline className="text-black"/>
      Grid
          </button>
    
    </div>
    
  )
}
