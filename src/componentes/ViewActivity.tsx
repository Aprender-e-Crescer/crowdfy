import React from 'react';
import Cristal from "@/assets/image.png";

const ViewActivity: React.FC = () => {
    return (
        <div className="flex justify-center p-4 w-full">
            <div className="w-full max-w-full h-auto p-3 bg-white rounded-lg font-sans flex flex-col sm:flex-row">
                <div className="flex flex-col items-center gap-3 sm:items-start sm:gap-5 sm:mr-4 mb-3 sm:mb-0">
                    <img
                        src="https://assets.vogue.com/photos/65fdd4c0da96444591b39091/4:3/pass/undefined"
                        alt=""
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div className="w-0.5 h-12 sm:h-14 bg-gray-200"></div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm sm:text-base font-medium text-gray-800">Demi Wilkinson</h3>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
                    </div>

                    <div className="flex items-center mt-1">
                        <h4 className="text-xs sm:text-sm text-gray-500">Funded</h4>
                        <h5 className="text-xs sm:text-sm text-[#65a30d] ml-2 truncate">Help my Friends wit...</h5>
                    </div>

                    <div className="flex items-center gap-4 mt-3">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-7 h-7 sm:w-9 sm:h-9 bg-[#F7FEE7] rounded-full"></div>
                            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-[#ECFCCB] rounded-full"></div>
                            <img src={Cristal} alt="Cristal Icon" className="relative w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                            <h1 className="text-sm sm:text-base text-green-500">+$0.32 ETH</h1>
                            <p className="text-xs sm:text-sm text-gray-400">$598,09</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewActivity;
