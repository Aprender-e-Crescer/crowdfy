import React from 'react';

const TituloPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-full sm:max-w-2xl mx-auto">
                <h1 className="text-xl sm:text-2xl font-bold">My campaigns</h1>
                <p className="mt-1 text-gray-500 text-sm sm:text-base">Your current sales summary and activity</p>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="bg-green-200 text-black py-2 px-4 rounded-lg font-semibold border border-gray-300 flex items-center space-x-2">
                        <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Export report</span>
                    </button>
                    <button className="bg-gray-100 text-black py-2 px-4 rounded-lg font-semibold border border-gray-300 flex items-center space-x-2">
                        <span className="border-2 border-black text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold bg-gray-100">
                            +
                        </span>
                        <span>Invite</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TituloPage;
