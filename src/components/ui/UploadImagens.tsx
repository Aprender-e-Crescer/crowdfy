import simbolo from '..//../assets/CloudArrowUp.png'

export function Uploadimagens({enviar, descricao , tiposEnvio}:{enviar: string, descricao: string, tiposEnvio: string}) {
      return(
      <div>
          <div className='flex flex-col items-start '>
            <div className="flex flex-col items-center" >
                  <div className=" h-[56px] w-[56px] rounded-full bg-[#EDEDED] border-4  flex items-center justify-center border-[#F6F6F6]">
                  <img className=" h-[36px] w-[36px] "  src={simbolo} alt=""/>
                  </div>
            
     
                  <div className='flex gap-1'>
                  <h1 className="text-lime-500  hover:text-lime-300 font-bold">{enviar}</h1>
                  <h2 className="text-gray-500">{descricao}</h2>
                  </div>


                 {tiposEnvio}
            </div>
            </div>
            
      </div>
      
)
}