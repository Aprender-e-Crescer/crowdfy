import IconToSend from '@/assets/CloudArrowUp.png'

interface Props {
  toSendHover: string
  descrition: string
  shippingTypes: string
}
export function Uploadimagens({ toSendHover, descrition, shippingTypes }: Props) {
  return (
    <div className="flex flex-col justify-center items-center border rounded-2xl p-5">
      <div className="bg-[#EDEDED] border-4 rounded-full border-[#F6F6F6] p-1 flex justify-center items-center ">
        <img className="h-[30px] w-[30px] rounded-full" src={IconToSend} alt="" />
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-lime-500  hover:text-lime-300 font-bold">
            {toSendHover}
          </p>
          <p className="text-gray-500">{descrition}</p>
          <p className="text-gray-500">{shippingTypes}</p>
        </div>
      </div>
    </div>
  )
}
