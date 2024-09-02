import { FaListOl } from 'react-icons/fa6'
import { FiGrid } from 'react-icons/fi'
interface SectionHeaderProps {
  title?: string
}
export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex justify-between p-4 md:p-8">
      <div>
        <h2 className="text-xl md:text-3xl font-bold tracking-tight mb-2 md:mb-1 font-inter">
          History {title} {}
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-plus-jakarta-sans">
          Como você pretende ajudar o mundo hoje.
        </p>
      </div>
      <div className="flex items-start">
        <button className="border border-[#cbd5e1] rounded-l-lg px-4 py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0] font-plus-jakarta-sans">
          <FaListOl className="text-black h-5 w-5" />
          <span className="hidden sm:inline ml-2">List</span>
        </button>
        <button className="border border-[#cbd5e1] rounded-r-lg px-4 py-2 bg-[#f8fafc] text-[#94a3b8] font-medium flex items-center hover:bg-[#E2E8F0] font-plus-jakarta-sans">
          <FiGrid className="text-[#94a3b8] h-5 w-5" />
          <span className="hidden sm:inline ml-2">Grid</span>
        </button>
      </div>
    </div>
  )
}
