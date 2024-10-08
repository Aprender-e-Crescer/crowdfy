import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import icon from '@/assets/dollar-sign.png'
import localimage from '@/assets/localimage.png'
import { Uploadimagens } from '@/components/upload-Imagens'

export function Localization() {
  return (
    <>
      <div className="hidden md:flex">
        <div className="flex flex-col gap-y-5">
          <div className="relative flex rounded-md bg-[#F7FEE7]">
            <div className="absolute top-[-5px] left-[10px] bg-lime-200 w-12 h-12 rounded-full flex justify-center items-center border-4 border-lime-100">
              <img src={icon} alt="Dollar Sign" />
            </div>
            <div className=" font-semibold py-2 text-center ml-20">
              <h1>You will get 99.9% of the raised amount</h1>
            </div>
          </div>

          <div className="justify-start py-2 grid grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="text-[16px] text-[#344054] font-normal">
                Localization
              </h1>
            </div>
            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Rio de Janeiro, Brasil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="doisvizinhos">
                    Dois Vizinhos, Brasil
                  </SelectItem>
                  <SelectItem value="riodejaneiro">
                    Rio de Janeiro, Brasil
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="text-[16px] text-[#344054]">
              <p>Banner Image</p>
            </div>

            <div className="flex flex-col md:gap-y-2 lg:flex-row lg:gap-3 xl:flex">
              <img
                className="w-[125px] h-[74px]"
                src={localimage}
                alt="Banner"
              />
              <Uploadimagens
                toSendHover="Click here to upload"
                descrition="ou drag here your image"
                shippingTypes="Recommended 800x600 resolution (max. 1MB)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-y-4">
        <div className="relative flex rounded-md bg-[#F7FEE7]">
          <div className="absolute top-[-5px] left-[10px] bg-lime-200 w-12 h-12 rounded-full flex justify-center items-center border-4 border-lime-100">
            <img src={icon} alt="Dollar Sign" />
          </div>
          <div className="text-[#0F172A] font-semibold py-2 text-center ml-20">
            <h1>You will get 99.9% of the raised amount</h1>
          </div>
        </div>

        <div className="py-2 mx-5 mt-0 mb-1">
          <h1 className="text-[#344054] text-[16px] font-normal">
            Localization
          </h1>
        </div>

        <div className="flex flex-col mx-5">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Rio de Janeiro, Brasil" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="doisvizinhos">
                Dois Vizinhos, Brasil
              </SelectItem>
              <SelectItem value="riodejaneiro">
                Rio de Janeiro, Brasil
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-[#344054] text-[16px] mt-4">
            <p>Banner Image</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="h-[150px]" src={localimage} alt="Banner" />
            <Uploadimagens
              toSendHover="Click here to upload"
              descrition="ou drag here your image"
              shippingTypes="Recommended 800x600 resolution (max. 1MB)"
            />
          </div>
        </div>
      </div>
    </>
  )
}
