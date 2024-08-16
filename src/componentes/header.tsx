import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado
import logoImage from "@/img/logo.png"; // Importa a imagem do logo
import settingsImage from "@/img/perfil.png"; // Importa a imagem do avatar do usuário
import iconButom from "@/img/iconButom.png"; // Importa a imagem do ícone

function Header() {
  const [activeLink, setActiveLink] = useState("Campaigns"); // Estado para armazenar o link ativo

  // Função para definir as classes dos links de navegação com base no link ativo
  const linkClasses = (link: string) =>
    link === activeLink
      ? "text-black font-medium"
      : "text-gray-400 hover:text-gray-900";

  return (
    <header className="flex flex-wrap items-center justify-between bg-white shadow-sm px-4 py-3 md:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          <img src={logoImage} alt="Logo" className="w-8 h-8" /> {/* Imagem do logo */}
          <div className="text-black text-xl font-bold">Crowdfy</div> {/* Nome da marca */}
        </div>
        {/* Links de navegação */}
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