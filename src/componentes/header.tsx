import React from 'react';







function Header () {
  return (
    <header className="flex items-center justify-between bg-white shadow-sm px-4 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-black-500 text-lg font-semibold">Crowdfy</div>
        <nav className="flex ml-6 space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Explore</a>
          <a href="#" className="text-gray-600 hover:text-black">Campaigns</a>
          <a href="#" className="text-gray-600 hover:text-black">Profile</a>
        </nav>
      </div>

      {/* User actions */}
      <div className="flex items-center space-x-4">
        {/* Add Button */}
        <button className="bg-gray-200 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        {/* User Avatar */}
        <img src="https://via.placeholder.com/32" alt="User Avatar" className="w-8 h-8 rounded-full" />
        {/* Settings Icon */}
        <button className="bg-gray-200 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M4.929 4.929l1.415 1.415m12.728 12.728l1.415 1.415M18.364 5.636l1.415-1.415M6.343 18.364l1.415-1.415M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </button>
      </div>
    </header>
  );
};


export default Header;