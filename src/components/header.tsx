import { useState } from "react";
import logoImage from "@/assets/logo.png";
import settingsImage from "@/assets/perfil.png";
import iconButom from "@/assets/iconButom.png";
import { Link } from "@tanstack/react-router";



function Header() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isTransparent, setIsTransparent] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    if (link === 'Home' || link === 'Explore') {
      setIsTransparent(true)
    } else {
      setIsTransparent(false)
    }
    setIsMenuOpen(false) // Fechar o menu após clicar em um link
  }

  const linkClasses = (link: string) =>
    link === activeLink
      ? 'text-black font-medium'
      : 'text-gray-400 hover:text-gray-900'

  return (
    <header
      className={`flex flex-wrap items-center justify-between ${isTransparent ? "bg-transparent" : "bg-white"
        } shadow-sm py-3  transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center flex-grow-0 ml-3 md:ml-[20px] lg:ml-[90px]">
        <div className="flex items-center space-x-1">
          <img src={logoImage} alt="Logo" className="w-8 h-8" />
          <div className="text-black text-xl font-bold">Crowdfy</div>
        </div>
      </div>

      {/* Links de navegação (escondidos em telas pequenas) */}
      <nav className="hidden md:flex ml-8 flex-grow gap-5">
        <Link
          to="/"
          className={linkClasses('Home')}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </Link>
        <Link
          to="/explore"
          className={linkClasses('Explore')}
          onClick={() => handleLinkClick('Explore')}
        >
          Explore
        </Link>

        <Link
          to="/campaing-create"
          className={linkClasses('Campaigns')}
          onClick={() => handleLinkClick('Campaigns')}
        >
          Campaigns
        </Link>
        <Link
          to="/profile-settings"
          className={linkClasses('Profile')}
          onClick={() => handleLinkClick('Profile')}
        >
          Profile
        </Link>
      </nav>

      {/* Menu Hamburguer Responsivo */}

      {/* Ações do usuário */}
      <div className="flex items-center space-x-2 mr-3 lg:mr-[90px] md:ml-[20px]">
        <button className="p-2 w-10 h-10 rounded-lg flex items-center justify-center relative z-10000">
          <div className="bg-[#EDEDED] border-[#F6F6F6] absolute inset-0 border-2 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
        </button>

        <div className="bg-[#EDEDED] border-[#F6F6F6] border-2 p-2 w-10 h-10 rounded-full shadow-md flex items-center justify-center">
          <img
            src={settingsImage}
            alt="Avatar do Usuário"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        <div className="p-2 rounded-lg w-10 h-10 bg-[#EDEDED] border-[#F6F6F6] border-2 shadow-md flex items-center justify-center">
          <img
            src={iconButom}
            alt="Ícone de Configurações"
            className="w-full h-full bg-[#EDEDED]"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg w-10 h-10 bg-[#EDEDED] border-[#F6F6F6] border-2 shadow-md flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu (exibido quando o botão é clicado) */}
          
          {isMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-lg z-50">
              <Link
                to="/"
                className={`block px-4 py-2 ${linkClasses('Home')}`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className={`block px-4 py-2 ${linkClasses('Explore')}`}
                onClick={() => handleLinkClick('Explore')}
              >
                Explore
              </Link>
              <Link
                to="/campaing-create"
                className={`block px-4 py-2 ${linkClasses('Campaigns')}`}
                onClick={() => handleLinkClick('Campaigns')}
              >
                Campaigns
              </Link>
              <Link
                to="/profile-settings"
                className={`block px-4 py-2 ${linkClasses('Profile')}`}
                onClick={() => handleLinkClick('Profile')}
              >
                Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
