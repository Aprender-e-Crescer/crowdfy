import React from "react";

interface CardProps {
  Titulo: JSX.Element;
  Nome: string;
  NumeroId: string;
  Imagem: string;
  CorFundo: string;
  CorTexto: string;
  ValorCard: string;
}

const Card: React.FC<CardProps> = ({ Titulo, Nome, NumeroId, Imagem, CorFundo, CorTexto, ValorCard }) => {
  return (
    <div className="flex flex-col items-start">
      <div
        className="relative flex flex-col md:flex-row w-full md:w-[429.77px] h-auto md:h-[259px] rounded-2xl shadow-lg overflow-hidden"
        style={{ backgroundColor: CorFundo, color: CorTexto }}
      >
        <div className="p-5 w-full md:w-4/5">
          <p className="font-semibold text-sm md:text-[14.51px] mb-0">
            Crowdfy
          </p>
          <h1 className="font-semibold text-xl md:text-[27.2px] leading-tight mb-0">
            {Titulo}
          </h1>
          <p className="font-semibold text-xs md:text-[10.8px] text-gray-10 mt-4 md:mt-16">
            {Nome}
          </p>
          <p className="font-bold text-sm md:text-[14.4px]">
            {NumeroId}
          </p>
        </div>
        <div
          className="w-full md:w-[35%] h-[150px] md:h-auto bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Imagem})`,
          }}
        >
          <img
            src="https://i.im.ge/2024/08/15/fIhBKm.icon-crowdfy.png"
            alt="Icon"
            className="absolute w-[30px] h-[30px] md:w-auto md:h-[45px] top-2.5 right-2.5"
          />
          <img
            src="https://i.im.ge/2024/08/15/fIiTeT.icon-retangulo.png"
            alt="Icon"
            className="absolute w-[30px] h-[30px] md:w-auto md:h-[45px] bottom-2.5 right-2.5"
          />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <p className="font-regular text-lg md:text-[19.92px] text-[#344054] mt-[22.77px]">
          Total donations
        </p>
        <p className="font-bold text-lg md:text-[19.92px] mt-[22.77px] text-[#344054]">
          {ValorCard}
        </p>
      </div>
    </div>
  );
};

export default Card;
