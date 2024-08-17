import fileSignature from "../assets/file-signature.png";
import Piggy_Bank from "../assets/piggy-bank.png";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";
import filter from "../assets/filter2.png";

export function HeaderCard() {
  return (
    <div className="p-4 ">
      <div className="flex items-center mb-4">
        <div className="flex flex-col mr-8 ">
          <h1 className="font-bold text-3xl pb-2">Explore</h1>
          <p className="text-[#64748B]">Where do you want to help</p>
        </div>
        <div className="flex space-x-0"> 
          <button className="border-2 border-[#D1D5DB] rounded-l-lg px-4 py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
            <img src={arrowUp} alt="Price Icon" className="w-6 h-6 mr-2" />
            Price
          </button>
          <button className="border-2 border-[#D1D5DB] px-4 py-2 bg-[#ffffff] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
            <img src={arrowDown} alt="Date Icon" className="w-6 h-6 mr-2" />
            Date
          </button>
          <button className="bg-[#84CC16] rounded-r-lg px-4 py-2 text-[#ffffff] font-medium flex items-center hover:bg-[#098716]">
            <img src={filter} alt="Show Filters Icon" className="w-6 h-6 mr-2" />
            Show filters
          </button>
        </div>
      </div>
      <div>
        <div className="flex space-x-0">
          <button className="border-2 border-[#D1D5DB] rounded-l-lg px-4 py-2 bg-[#ffffff] font-medium flex items-center text-[#334155] hover:bg-[#E2E8F0]">
            All views
          </button>
          <button className="border-2 border-[#D1D5DB] px-4 py-2 bg-[#F1F5F9] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
            <img src={fileSignature} alt="Petitions Icon" className="w-6 h-6 mr-2" />
            Petitions
          </button>
          <button className="border-2 border-[#D1D5DB] rounded-r-lg px-4 py-2 bg-[#F1F5F9] text-[#334155] font-medium flex items-center hover:bg-[#E2E8F0]">
            <img src={Piggy_Bank} alt="Donations Icon" className="w-6 h-6 mr-2" />
            Donations
          </button>
        </div>
      </div>
    </div>
  );
}
