import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/charts')({
  component: Charts,
})

function Charts() {
  return (
    <div className="relative">
    <hr className="border-t-2 mb-4"/>
        <div className="flex justify-between items-start px-32">
            <div className="relative">
                <p className="font-bold text-3xl text-[#101828]">
                    Estatistics
                </p>
                <p className="text-[#475467]">
                    See statistical results and specifications of donations
                </p>
            </div>
            <div className="relative flex space-x-2">
                <button className="px-5 py-1 border rounded-md font-semibold text-[#1F2937] active:bg-[#84CC16] active:text-white">Period</button>
                <button className="px-5 py-1 border rounded-md font-semibold text-[#1F2937] active:bg-[#84CC16] active:text-white">Cases</button>
                <button className="px-5 py-1 border rounded-md font-semibold text-[#1F2937] active:bg-[#84CC16] active:text-white">Values</button>
            </div>
        </div>
    </div>
  )
}