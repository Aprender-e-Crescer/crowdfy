import { useState } from 'react'
import logoImage from '@/img/logo.png'
import settingsImage from '@/img/perfil.png'
import iconButom from '@/img/iconButom.png'

function Header() {
  const [activeLink, setActiveLink] = useState('Campaigns')
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
      className={`flex flex-wrap items-center justify-between ${
        isTransparent ? 'bg-transparent' : 'bg-white'
      } shadow-sm px-4 py-3 md:px-8 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center flex-grow-0">
        <div className="flex items-center space-x-1">
          <img src={logoImage} alt="Logo" className="w-8 h-8" />
          <div className="text-black text-xl font-bold">Crowdfy</div>
        </div>
      </div>

      {/* Links de navegação (escondidos em telas pequenas) */}
      <nav className="hidden md:flex ml-8 space-x-8 flex-grow">
        <a
          href="#"
          className={linkClasses('Home')}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </a>
        <a
          href="#"
          className={linkClasses('Explore')}
          onClick={() => handleLinkClick('Explore')}
        >
          Explore
        </a>
        <a
          href="#"
          className={linkClasses('Campaigns')}
          onClick={() => handleLinkClick('Campaigns')}
        >
          Campaigns
        </a>
        <a
          href="#"
          className={linkClasses('Profile')}
          onClick={() => handleLinkClick('Profile')}
        >
          Profile
        </a>
      </nav>

      {/* Menu Hamburguer Responsivo */}

      {/* Ações do usuário */}
      <div className="flex items-center space-x-4">
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
              <a
                href="#"
                className={`block px-4 py-2 ${linkClasses('Home')}`}
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </a>
              <a
                href="#"
                className={`block px-4 py-2 ${linkClasses('Explore')}`}
                onClick={() => handleLinkClick('Explore')}
              >
                Explore
              </a>
              <a
                href="#"
                className={`block px-4 py-2 ${linkClasses('Campaigns')}`}
                onClick={() => handleLinkClick('Campaigns')}
              >
                Campaigns
              </a>
              <a
                href="#"
                className={`block px-4 py-2 ${linkClasses('Profile')}`}
                onClick={() => handleLinkClick('Profile')}
              >
                Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
