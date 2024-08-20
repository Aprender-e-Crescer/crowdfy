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
    <div className="flex-col">
      <div
        className="relative flex w-[429.77px] h-[259px] rounded-2xl shadow-lg overflow-hidden"
        style={{ backgroundColor: CorFundo, color: CorTexto}}
         
      >
        <div className="p-5 w-4/5">
          <p className="font-semibold text-[14.51px] mb-0">
            Crowdfy
          </p>
          <h1 className="font-semibold text-[27.2px] leading-tight mb-0">
            {Titulo}
          </h1>
          <p className="font-semibold text-[10.8px] text-gray-10 mt-16">
            {Nome}
          </p>
          <p className="font-bold text-[14.4px]">
            {NumeroId}
          </p>
        </div>
        <div
          className="w-[35%] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Imagem})`,
          }}
        >
          <img
            src="https://i.im.ge/2024/08/15/fIhBKm.icon-crowdfy.png"
            alt="Icon"
            className="absolute w-auto h-[45px] top-2.5 right-2.5"
          />
          <img
            src="https://i.im.ge/2024/08/15/fIiTeT.icon-retangulo.png"
            alt="Icon"
            className="absolute w-auto h-[45px] bottom-2.5 right-2.5"
          />
        </div>       
      </div>
      <div className="flex">
        <p className="font-regular text-[19.92px] text-[#344054] mt-[22.77px] mr-[200px]">
          Total donations
        </p>
        <p className="font-bold text-[19.92px] mt-[22.77px] text-[#344054]">
          {ValorCard}
        </p>
      </div>
    </div>
  );
};

export default Card;
