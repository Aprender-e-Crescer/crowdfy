import React from 'react';
import Cristal from "@/assets/image.png"; 

const ViewActivity: React.FC = () => {
    return (
        <div className="flex justify-end p-4">
            <div className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] h-[92px] p-2 bg-white rounded-lg font-sans flex">
                <div className="flex">
                    <div className="relative flex flex-col items-center gap-2 mr-2 sm:mr-3">
                        <img
                            src="https://assets.vogue.com/photos/65fdd4c0da96444591b39091/4:3/pass/undefined"
                            alt=""
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                        <div className="w-0.5 h-11 bg-gray-200"></div>
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xs sm:text-sm font-medium text-gray-800">Demi Wilkinson</h3>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        </div>

                        <div className="flex items-center mt-1">
                            <h4 className="text-xs sm:text-sm text-gray-500">Funded</h4>
                            <h5 className="text-xs sm:text-sm text-[#65a30d] ml-1 truncate">Help my Friends wit...</h5>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="relative flex items-center justify-center">
                                <div className="absolute w-7 h-7 sm:w-8 sm:h-8 bg-[#F7FEE7] rounded-full"></div>
                                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-[#ECFCCB] rounded-full"></div>
                                <img src={Cristal} alt="Cristal Icon" className="relative w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                            <div>
                                <h1 className="text-sm sm:text-base text-green-500">+$0.32 ETH</h1>
                                <p className="text-xs sm:text-sm text-gray-400">$598,09</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ViewActivity;
                            