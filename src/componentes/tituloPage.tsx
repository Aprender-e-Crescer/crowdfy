import React from 'react';
import { FiUploadCloud } from "react-icons/fi"; // Ícone de upload
import { IoAddCircleOutline } from "react-icons/io5"; // Ícone de adicionar
import { Button } from "@/components/ui/button"; // Ajuste o caminho conforme necessário

const TituloPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">My campaigns</h1>
                        <p className="mt-1 text-gray-500 text-sm sm:text-base">Your current sales summary and activity</p>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="hoverWhiteBorder" className="py-1 px-2 rounded-md font-semibold flex items-center space-x-1.5">
                            <FiUploadCloud className="w-4 h-4" /> {/* Ícone de upload */}
                            <span className="text-sm">Export report</span>
                        </Button>
                        
                        <Button variant="blackOnHover" className="py-1 px-2 rounded-md font-semibold flex items-center space-x-2 bg-white text-black border border-gray-300 hover:text-white">
                            <IoAddCircleOutline className="w-5 h-5 text-black " /> {/* Ícone de adicionar */}
                            <span className="text-sm text-black ">Invite</span>
                        </Button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TituloPage;
