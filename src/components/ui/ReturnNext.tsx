import { ArrowLeft, ArrowRight } from "lucide-react";
import  PontoVerde from '@/assets/ponto-verde.png';
import PontoCinza1 from '@/assets/ponto-cinza1.png'
import PontoCinza2 from '@/assets/ponto-cinza2.png'

export default function ReturnNext(){
    return(
        
    <div className=" flex flex-1 justify-between">
            <div className="flex justify-center">
            <button className="flex items-center text-[#475467] font-bold gap-2">
                <ArrowLeft className="ml-2" />
                Previous
            </button>
            </div>  
            <div className="flex justify-items-center h-20 w-10 gap-2 "> 
                <img className="h-2 w-2" src={PontoVerde} alt="" />
                <img className="h-2 w-2" src={PontoCinza1} alt="" />
                <img className="h-2 w-2" src={PontoCinza2} alt="" />
            </div>
            
            <div className="flex justify-center">
            <button className="flex items-center text-[#475467] font-bold gap-2">
                Next
                <ArrowRight className="mr-2" />
            </button>
            </div>
    </div>


    )
}





