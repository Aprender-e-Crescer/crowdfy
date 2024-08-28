import React from 'react';

const TitlePage: React.FC = () => {
    return (
        <div className="flex justify-center sm:justify-start">
            <div className="bg-white rounded-lg p-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="mb-4 sm:mb-0 w-full">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold truncate">My campaigns</h1>
                        <p className="mt-1 text-gray-500 text-sm sm:text-base lg:text-lg truncate">
                            Your current sales summary and activity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitlePage;
