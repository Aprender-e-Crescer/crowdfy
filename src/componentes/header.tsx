import { useState } from "react";
import logoImage from "@/img/logo.png";
import settingsImage from "@/img/perfil.png";
import iconButom from "@/img/iconButom.png";

function Header() {
  const [activeLink, setActiveLink] = useState("Campaigns");
  const [isTransparent, setIsTransparent] = useState(false);

  // Atualiza a transparência do cabeçalho com base no link clicado
  const handleLinkClick = (link: string) => {
    setActiveLink(link);

    // Define o cabeçalho como transparente para "Home" e "Explore"
    if (link === "Home" || link === "Explore") {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  // Função para definir as classes dos links de navegação com base no link ativo
  const linkClasses = (link: string) =>
    link === activeLink
      ? "text-black font-medium"
      : "text-gray-400 hover:text-gray-900";

  return (
    <header
      className={`flex flex-wrap items-center justify-between ${
        isTransparent ? "bg-transparent" : "bg-white"
      } shadow-sm px-4 py-3 md:px-8 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          <img src={logoImage} alt="Logo" className="w-8 h-8" />
          <div className="text-black text-xl font-bold">Crowdfy</div>
        </div>
        {/* Links de navegação */}
        <nav className="hidden md:flex ml-8 space-x-8">
          <a
            href="#"
            className={linkClasses("Home")}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
          <a
            href="#"
            className={linkClasses("Explore")}
            onClick={() => handleLinkClick("Explore")}
          >
            Explore
          </a>
          <a
            href="#"
            className={linkClasses("Campaigns")}
            onClick={() => handleLinkClick("Campaigns")}
          >
            Campaigns
          </a>
          <a
            href="#"
            className={linkClasses("Profile")}
            onClick={() => handleLinkClick("Profile")}
          >
            Profile
          </a>
        </nav>
      </div>

      {/* Ações do usuário */}
      <div className="flex items-center space-x-4">
        {/* Botão de Adicionar */}
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

        {/* Avatar do usuário */}
        <div className="bg-[#EDEDED] border-[#F6F6F6] border-2 p-2 w-10 h-10 rounded-full shadow-md flex items-center justify-center">
          <img
            src={settingsImage}
            alt="Avatar do Usuário"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Ícone de Configurações */}
        <div className="p-2 rounded-lg w-10 h-10 bg-[#EDEDED] border-[#F6F6F6] border-2 shadow-md flex items-center justify-center">
          <img
            src={iconButom}
            alt="Ícone de Configurações"
            className="w-full h-full bg-[#EDEDED]"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
