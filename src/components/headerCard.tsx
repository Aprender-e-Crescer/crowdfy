import fileSignature from '@/assets/file-signature.png'
import Piggy_Bank from '@/assets/piggy-bank.png'
import arrowUp from '@/assets/arrow-up.png'
import arrowDown from '@/assets/arrow-down.png'
import filter from '@/assets/filter2.png'
import list from '@/assets/list.png'
import markerPin from '@/assets/marker-pin-02.png'

export function HeaderCard() {
  return (
    <div className="col-auto">
      <div className="flex flex-col justify-between md:flex-row md:items-start mb-4">
        <div className="mb-6 flex flex-col mr-0 md:mr-4">
          <h1 className="font-inter text-3xl pb-2 font-bold">Explore</h1>
          <p className="font-plus-jakarta-sans text-base text-[#64748B]">Where do you want to help</p>
        </div>
        <div className="flex flex-wrap justify-start mt-4 md:mt-0">
          <button className="border-2 border-[#D1D5DB] rounded-l-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0] text-sm md:text-base">
            <img src={arrowUp} alt="Price Icon" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 mr-2" />
            Price
          </button>
          <button className="border-2 border-[#D1D5DB] rounded-r-lg px-3 md:px-4 py-1 md:py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0] text-sm md:text-base">
            <img
              src={arrowDown}
              alt="Date Icon"
              className="w-4 md:w-6 h-4 md:h-6 mr-2"
            />
            Date
          </button>
          <button className="bg-[#84CC16] rounded-lg px-3 md:px-4 py-1 md:py-2 text-[#ffffff] font-medium flex items-center hover:bg-[#098716] ml-2 md:ml-4 text-sm md:text-base">
            <img
              src={filter}
              alt="Show Filters Icon"
              className="w-4 md:w-6 h-4 md:h-6 mr-2"
            />
            Show filters
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-grow max-xl:flex-col max-xl:justify-start justify-between">
          <div className='flex flex-row'>
            <button className="border-2 border-[#D1D5DB] rounded-l-lg px-3 md:px-4 py-1 md:py-2 bg-[#ffffff] font-medium flex items-center text-[#334155] hover:bg-[#E2E8F0] md:text-base lg:text-base">
              All views
            </button>
            <button className="border-2 border-[#D1D5DB] px-3 md:px-4 py-1 md:py-2 bg-[#F1F5F9] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0] text-sm md:text-base">
              <img
                src={fileSignature}
                alt="Petitions Icon"
                className="w-4 md:w-6 h-4 md:h-6 mr-2"
              />
              Petitions
            </button>
            <button className="border-2 border-[#D1D5DB] rounded-r-lg px-3 md:px-4 py-1 md:py-2 bg-[#F1F5F9] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0] text-sm md:text-base">
              <img
                src={Piggy_Bank}
                alt="Donations Icon"
                className="w-4 md:w-6 h-4 md:h-6 mr-2"
              />
              Donations
            </button>
          </div>
          <div className="flex max-xl:pt-4">
            <button className="border-2 border-[#D1D5DB] rounded-l-lg px-3 md:px-4 py-1 md:py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
              <img
                src={list}
                alt="List Icon"
                className="w-6 md:w-6 h-6 md:h-6"
              />
            </button>
            <button className="border-2 border-[#D1D5DB] rounded-r-lg px-3 md:px-4 py-1 md:py-2 sm:py-1 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
              <img
                src={markerPin}
                alt="Marker Pin Icon"
                className="w-6 md:w-6 h-6 md:h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
