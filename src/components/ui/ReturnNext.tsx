import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from '@tanstack/react-router'

export default function ReturnNext(){
    return(
        
    <div className=" flex flex-1 justify-between ">
            <div className="flex justify-center">
                <Link to="/" className="[&.active]:font-bold">
            <button className="flex items-center text-[#475467] font-semibold gap-2">
                <ArrowLeft className="ml-2" />
                Previous
            </button>
                </Link>
            </div>  
            <div className="flex justify-around bg-slate-50 rounded-full items-center h-10 w-20"> 
                <div className="flex bg-[#84CC16] rounded-full h-2 w-2">
                </div>
                <div className="flex bg-[#F1F5F9] rounded-full h-2 w-2">
                </div>
                <div className="flex bg-[#F1F5F9] rounded-full h-2 w-2">
                </div>
            </div>
            
            <div className="flex justify-center">
                <Link to="/" className="[&.active]:font-bold">
            <button className="flex items-center text-[#475467] font-semibold gap-2">
                Next
                <ArrowRight className="mr-2" />
            </button>
                </Link>
            </div>
    </div>


    )
}





