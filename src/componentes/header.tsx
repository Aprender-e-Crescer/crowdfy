import { useState } from "react";
import logoImage from "../img/logo.png";
import settingsImage from "../img/perfil.png";

function Header() {
  const [activeLink, setActiveLink] = useState("Campaigns");

  const linkClasses = (link: string) =>
    link === activeLink
      ? "text-black font-medium"
      : "text-gray-400 hover:text-gray-900";

  return (
    <header className="flex flex-wrap items-center justify-between bg-white shadow-sm px-4 py-3 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          <img
            src={logoImage}
            alt="Logo"
            className="w-8 h-8"
          />
          <div className="text-black text-xl font-bold">Crowdfy</div>
        </div>
        {/* Navigation links */}
        <nav className="hidden md:flex ml-8 space-x-8">
          <a
            href="#"
            className={linkClasses("Home")}
            onClick={() => setActiveLink("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={linkClasses("Explore")}
            onClick={() => setActiveLink("Explore")}
          >
            Explore
          </a>
          <a
            href="#"
            className={linkClasses("Campaigns")}
            onClick={() => setActiveLink("Campaigns")}
          >
            Campaigns
          </a>
          <a
            href="#"
            className={linkClasses("Profile")}
            onClick={() => setActiveLink("Profile")}
          >
            Profile
          </a>
        </nav>
      </div>

      {/* User actions */}
      <div className="flex items-center space-x-4">
        {/* Add Button */}
        <button className="bg-gray-100 p-2 w-10 h-10 rounded-lg shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>

        {/* User Avatar */}
        <div className="bg-gray-100 p-2 w-10 h-10 rounded-full shadow-md flex items-center justify-center">
          <img
            src={settingsImage}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Settings Icon */}
        <div className="bg-gray-100 p-2 w-10 h-10 rounded-lg shadow-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M4.929 4.929l1.415 1.415m12.728 12.728l1.415 1.415M18.364 5.636l1.415-1.415M6.343 18.364l1.415-1.415M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
