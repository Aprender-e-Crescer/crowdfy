import React from 'react';

const TituloPage: React.FC = () => {
    return (
        <div className=" p-4 sm:p-8 flex ">
            <div className="bg-white p-4 sm:p-6 rounded-lg  w-full ">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-4 sm:mb-0 w-full sm:w-auto sm:max-w-md">
                        <h1 className="text-lg sm:text-2xl font-bold truncate">My campaigns</h1>
                        <p className="mt-1 text-gray-500 text-sm sm:text-base truncate">Your current sales summary and activity</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TituloPage;
