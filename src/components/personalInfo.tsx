import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'
import { RadioGroup, RadioGroupItem } from '@/components/radio-group'
import { Input } from '@/components/input'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

export default function PersonalInfo() {
  return (
    <div className="md:flex ">
      {/*pc*/}
      <div className="hidden md:block">
        <div className="">
          <form className="w-full">
            <div className="">
              <div className="grid grid-cols-3 gap-2 items-center-start">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-[#1E293B]"
                >
                  Seu Nome
                </label>
                <Input
                  id="primeiroNome"
                  placeholder="Primeiro Nome"
                  className="mt-1"
                />
                <Input
                  id="sobrenome"
                  placeholder="Sobrenome"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 items-center-start">
              <label
                htmlFor="tituloCampanha"
                className="block text-sm font-medium text-[#1E293B]"
              >
                Título da Campanha
              </label>
              <div className="col-span-2">
                <Input
                  id="tituloCampanha"
                  placeholder="email@exemplo.com"
                  className="mt-1"
                />
              </div>
            </div>
            <div className="flex gap-x-2 gap-y-0">
              <div>
                <label className="flex text-sm font-medium text-[#1E293B]">
                  Sua Foto de Perfil
                </label>
              </div>
              <div className="flex items-start space-x-4 ml-24 m-4">
                <div>
                  <Avatar>
                    <AvatarImage
                      src="/fotoAvatar.png"
                      className="w-40 rounded-full"
                    />
                  </Avatar>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-2 items-center-start">
                    <label
                      htmlFor="person"
                      className="text-sm text-[#1E293B] font-normal"
                    >
                      Person
                    </label>
                    <div>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="matthew">Matthew</SelectItem>
                          <SelectItem value="sarah">Sarah</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center-start mt-2 w-full">
                    <label
                      htmlFor="skinTone"
                      className="text-sm text-[#1E293B] font-normal"
                    >
                      Skin Tone
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="veryFair">Very Fair</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="olive">Olive</SelectItem>
                        <SelectItem value="brown">Brown</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-2 items-center-start mt-2">
                    <label
                      htmlFor="pose"
                      className="text-sm text-[#1E293B] font-normal"
                    >
                      Pose
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral1">1 Neutral</SelectItem>
                        <SelectItem value="neutral2">2 Neutral</SelectItem>
                        <SelectItem value="smile">Smile</SelectItem>
                        <SelectItem value="happy1">1 Happy</SelectItem>
                        <SelectItem value="happy2">2 Happy</SelectItem>
                        <SelectItem value="wink">Wink</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2 items-center-start mt-2 text-sm">
                    <label className="inline-block">Type</label>
                    <RadioGroup defaultValue="male" className="flex space-x-4">
                      <div className="flex items-center">
                        <RadioGroupItem value="male" id="male" />
                        <label htmlFor="male" className="ml-2">
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <RadioGroupItem value="female" id="female" />
                        <label htmlFor="female" className="ml-2">
                          Female
                        </label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/*mobile*/}
      <div className="md:hidden">
        <div>
          <div className="font-semibold text-[#101828] text-3xl">
            <h1>Personal Info</h1>
          </div>
          <div className="text-base font-normal text-[#475467]">
            <p>Update your personal info with your data preferences</p>
          </div>
        </div>

        <hr className="my-4 border-[#EAECF0]" />

        <div className="">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="primeiroNome"
                  className="block text-sm font-medium text-[#1E293B]"
                >
                  Seu Nome
                </label>
                <Input
                  id="primeiroNome"
                  placeholder="Primeiro Nome"
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="sobrenome"
                  className="block text-sm font-medium text-[#1E293B]"
                >
                  Sobrenome
                </label>
                <Input
                  id="sobrenome"
                  placeholder="Sobrenome"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="tituloCampanha"
                className="block text-sm font-medium text-[#1E293B]"
              >
                Título da Campanha
              </label>
              <Input
                id="tituloCampanha"
                placeholder="email@exemplo.com"
                className="mt-1"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#1E293B]">
                Sua Foto de Perfil
              </label>

              <div className="flex justify-center mt-6">
                <Avatar>
                  <AvatarImage src="/fotoAvatar.png" className="rounded-full" />
                </Avatar>
              </div>

              <div className="grid grid-cols-2 gap-2 items-center-start">
                <label
                  htmlFor="person"
                  className="text-sm-[#1E293B] font-normal"
                >
                  Person
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matthew">Matthew</SelectItem>
                    <SelectItem value="sarah">Sarah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2 items-center-start">
                <label
                  htmlFor="skinTone"
                  className="text-sm-[#1E293B] font-normal"
                >
                  Skin Tone
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veryFair">Very Fair</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="olive">Olive</SelectItem>
                    <SelectItem value="brown">Brown</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2 items-center-start">
                <label htmlFor="pose" className="text-sm-[#1E293B] font-normal">
                  Pose
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neutral1">1 Neutral</SelectItem>
                    <SelectItem value="neutral2">2 Neutral</SelectItem>
                    <SelectItem value="smile">Smile</SelectItem>
                    <SelectItem value="happy1">1 Happy</SelectItem>
                    <SelectItem value="happy2">2 Happy</SelectItem>
                    <SelectItem value="wink">Wink</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-2 items-center-start font-normal text-sm text-[#1E293B]">
                <label className="block">Type</label>
                <RadioGroup defaultValue="male" className="flex space-x-4">
                  <div className="flex items-center">
                    <RadioGroupItem value="male" id="male" />
                    <label htmlFor="male" className="ml-2">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="female" id="female" />
                    <label htmlFor="female" className="ml-2">
                      Female
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
