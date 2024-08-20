import React from 'react';
import { FiUploadCloud } from "react-icons/fi"; // Ícone de upload
import { IoAddCircleOutline } from "react-icons/io5"; // Ícone de adicionar
import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme necessário

const TituloPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex items-center justify-center">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-4 sm:mb-0 max-w-xs sm:max-w-md">
                        <h1 className="text-xl sm:text-2xl font-bold truncate">My campaigns</h1>
                        <p className="mt-1 text-gray-500 text-sm sm:text-base truncate">Your current sales summary and activity</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-2">
                        <Button 
                            variant="hoverWhiteBorder" 
                            className="py-1 px-2 rounded-md font-semibold flex items-center space-x-1.5 mb-2 sm:mb-0 text-sm sm:text-base"
                        >
                            <FiUploadCloud className="w-4 h-4" /> {/* Ícone de upload */}
                            <span className="truncate">Export report</span>
                        </Button>
                        
                        <Button 
                            className="py-1 px-2 rounded-md font-semibold flex items-center space-x-2 bg-white text-black border border-gray-300 text-sm sm:text-base"
                        >
                            <IoAddCircleOutline className="w-5 h-5 text-black" /> {/* Ícone de adicionar */}
                            <span className="truncate">Invite</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TituloPage;
