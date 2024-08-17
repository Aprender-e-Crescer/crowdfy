import React from 'react';

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
                        <button className="bg-green-200 text-black py-1 px-2 rounded-md font-semibold border border-gray-300 flex items-center space-x-1.5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4"
                            >
                                {/* Nuvem */}
                                <path d="M20.39 15.39a4.5 4.5 0 0 0-8.79-1.08 4.5 4.5 0 1 0-4.19 8.25h12a4.5 4.5 0 0 0 0-8.17zM12 15v4" />
                                {/* Seta na nuvem */}
                                <path d="M12 11l-4 4m4-4l4 4" />
                            </svg>
                            <span className="text-sm">Export report</span>
                        </button>
                        <button className="bg-white text-black py-1 px-2 rounded-md font-semibold border border-green-500 flex items-center space-x-2">
                            <span className="border-2 border-black text-black rounded-full w-4 h-4 flex items-center justify-center text-sm font-bold bg-white">
                                +
                            </span>
                            <span className="text-sm">Invite</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TituloPage;
