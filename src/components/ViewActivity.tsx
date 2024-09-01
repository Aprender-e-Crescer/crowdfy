import React from 'react';
import Cristal from "@/assets/image.png";

const ViewActivity: React.FC = () => {
    return (
        <div className="w-full max-w-xs h-auto p-2 bg-white rounded-lg font-sans">
            <div className="flex flex-row items-start">
                {/* Avatar e Linha Vertical */}
                <div className="relative flex flex-col items-center mr-4">
                    <img
                        src="https://assets.vogue.com/photos/65fdd4c0da96444591b39091/4:3/pass/undefined"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="w-0.5 h-8 bg-gray-200 mt-2"></div>
                </div>

                {/* Informações da Atividade */}
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xs sm:text-sm font-medium text-gray-800">Demi Wilkinson</h3>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center mt-1">
                        <h4 className="text-xs sm:text-sm text-gray-500">Funded</h4>
                        <h5 className="text-xs sm:text-sm text-[#65a30d] ml-1 truncate">Help my Friends wit...</h5>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2">
                   <img src={Cristal} alt="Cristal Icon" className="relative w-5 h-5 sm:w-6 sm:h-6" />
                        <div>
                            <h1 className="text-xs sm:text-sm text-green-500">+$0.32 ETH</h1>
                            <p className="text-xs sm:text-sm text-gray-400">$598.09</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default ViewActivity;
