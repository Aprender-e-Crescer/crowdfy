import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import img from '@/assets/img.png'
import { Button } from '@/components/ui/button'

export function FundCampaing({
  nome,
  postedIn,
  text1,
  textbutton,
  Icon,
  Variant,
  colorButton,
}: {
  nome: string
  postedIn: string
  text1: string
  textbutton: string
  Icon: React.ReactNode
  Variant: string
  colorButton: string
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col flex-1 gap-y-2">
          <Avatar className="flex justify-center items-center size-14">
            <AvatarImage className="bg-lime-100 " src={img} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center flex-1">
            <hr className="flex-1 h-full border border-gray-400" />
          </div>
        </div>
        <div className="line-clamp-2"></div>
      </div>
      <div className="flex flex-col  gap-3  ">
        <div className="flex gap-3 items-center ">
          <p className="text-[#475467] text-[20px] font-medium max-[410px]:text-base">
            {nome}
          </p>
          <p className="text-[#94A3B8]">{postedIn}</p>
        </div>
        <div className="flex gap-3 ">
          <p className="flex gap-3 text-[#475569]">{text1}</p>
        </div>
        <Button
          className="mb-14 text-white w-max"
          Variant={Variant}
          colorButton={colorButton}
        >
          {Icon}
          {textbutton}
        </Button>
      </div>
    </div>
  )
}
