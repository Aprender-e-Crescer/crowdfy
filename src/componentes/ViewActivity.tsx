import React from 'react';
import Cristal from "@/assets/image.png"; 

const ViewActivity: React.FC = () => {
    return (
        <div className="w-full flex justify-end p-4">
            <div className="w-[240px] h-[92px] p-2 bg-white rounded-lg font-sans flex">
                <div className="flex">
                    <div className="relative flex flex-col items-center gap-2 mr-[10px]">
                        <img
                            src="https://assets.vogue.com/photos/65fdd4c0da96444591b39091/4:3/pass/undefined"
                            alt=""
                            className="relative w-7 h-7 rounded-full object-cover"
                        />
                        <div className="w-0.5 h-11 bg-gray-200"></div>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs font-medium text-gray-800">Demi Wilkinson</h3>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center mt-1">
                            <h4 className="text-xs text-gray-500">Funded</h4>
                            <h5 className="text-xs text-[#65a30d] ml-1 truncate">Help my Friends wit...</h5>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            {/* Adicione círculos ao redor da imagem */}
                            <div className="relative flex items-center justify-center">
                                {/* Círculo externo */}
                                <div className="absolute w-7 h-7 bg-[#F7FEE7] rounded-full"></div>
                                {/* Círculo interno */}
                                <div className="absolute w-5 h-5 bg-[#ECFCCB] rounded-full"></div>
                                {/* Imagem Cristal */}
                                <img src={Cristal} alt="Cristal Icon" className="relative w-3 h-3" />
                            </div>
                            <div>
                                <h1 className="text-sm text-green-500">+$0.32 ETH</h1>
                                <p className="text-xs text-gray-400">$598,09</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewActivity;
