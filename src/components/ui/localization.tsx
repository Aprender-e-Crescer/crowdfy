import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import icon from '../../assets/dollar-sign.png'
import { Input } from '@/components/ui/input'
import localimage from '../../assets/localimage.png'
import { Uploadimagens } from '@/components/ui/UploadImagens'

export function Localization() {
  return (
    <>
      <div className="hidden md:flex w-full">
        <div className="flex flex-col gap-y-5">
          <div className="relative flex bg-[#F7FEE7]">
            <div className="absolute top-[-5px] left-[10px] bg-lime-200 w-12 h-12 rounded-full flex justify-center items-center border-4 border-lime-100">
              <img src={icon} alt="Dollar Sign" />
            </div>
            <div className="py-2 text-center ml-20">
              <h1>You will get 99.9% of the raised amount</h1>
            </div>
          </div>

          <div className="flex justify-start py-2 grid grid-cols-2 gap-4 items-center">
            <div>
              <h1 className="text-xl font-normal">Localization</h1>
            </div>
            <div className="w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Rio de Janeiro, Brasil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matthew">Dois Vizinhos, Brasil</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="text-xl">
              <p>Banner Image</p>
            </div>

            <div className="flex gap-3">
              <img
                className="w-[125px] h-[74px]"
                src={localimage}
                alt="Banner"
              />
              <Uploadimagens
                enviar="Click here to upload"
                descricao="ou drag here your image"
                tiposEnvio="Recommended 800x600 resolution (max. 1MB)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-y-4">
        <div className="relative flex bg-[#F7FEE7]">
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

        <div className="flex flex-col mx-5">
          <Input placeholder="Rio de Janeiro, Brasil" />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-xl mt-4">
            <p>Banner</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="h-[150px]" src={localimage} alt="Banner" />
            <Uploadimagens
              enviar="Click here to upload"
              descricao="ou drag here your image"
              tiposEnvio="Recommended 800x600 resolution (max. 1MB)"
            />
          </div>
        </div>
      </div>
    </>
  )
}
