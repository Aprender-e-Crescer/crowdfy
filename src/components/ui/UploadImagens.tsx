import simbolo from '..//../assets/CloudArrowUp.png'

export function Uploadimagens({enviar, descricao , tiposEnvio}:{enviar: string, descricao: string, tiposEnvio: string}) {
      return(

      <div className="font-normal">
                  <div className="ml-28  bg-[#EDEDED] border-4 rounded-full border-[#F6F6F6] h-[56px] w-[56px]">
                        <img className="my-2.5 ml-2.5  h-[28px] w-[28px] rounded-full" src={simbolo} alt=""/>
                  </div>

                  <div className="flex my-1">
                        <h1 className="text-lime-500  hover:text-lime-300 font-bold">{enviar}</h1>
                        <h2 className="ml-1 text-gray-500">{descricao}</h2>
                  </div>

                  <div className='ml-6 text-gray-500 my-1'>
                       {tiposEnvio}
                  </div>
      </div>      
)
}