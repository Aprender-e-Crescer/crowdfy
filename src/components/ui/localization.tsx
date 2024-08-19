import icon from '../../assets/dollar-sign.png'
import { Input } from '@/components/ui/input'
import localimage from '../../assets/localimage.png'

export function Localization() {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="relative flex gap-x-6 bg-[#F7FEE7]">
          <div className="absolute top-[-5px] left-[10px] bg-lime-200 w-12 h-12 rounded-full flex justify-center items-center border-4 border-lime-100">
            <img src={icon} alt="Dollar Sign" />
          </div>
          <div className="py-2 text-center ml-20">
            <h1>You will get 99.9% of the raised amount</h1>
          </div>
        </div>
        <div className="py-2 mx-5 mt-0 mb-1">
          <h1 className="text-xl font-normal">Localization</h1>
        </div>
        <div className=" text flex flex-col mx-5">
          <Input placeholder="Rio de Janeiro, Brasil" />
        </div>
        <div className="flex flex-col mx-5 gap-y-2">
          <div className="text-xl mt-4">
            <p>Banner</p>
          </div>
          <div className="flex gap-x-4">
            <div className="">
              <img className="w-[180px] h-[120px] " src={localimage} alt="" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}
