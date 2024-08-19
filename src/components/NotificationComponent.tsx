import connector from '@/assets/connector.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import img from '@/assets/img.png'

export function NotificationComponent({
  nome,
  postedIn,
  text1,
  text2,
}: {
  nome: string
  postedIn: string
  text1: string
  text2: string
}) {
  return (
    <div className="flex gap-6  max-[415px]:flex">
      <div className="flex flex-col pt-6 justify-center">
        <div>
          <Avatar className="flex justify-center items-center size-14  ">
            <AvatarImage className="bg-lime-100 " src={img} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex items-center justify-center">
            <img src={connector} alt="aaaa" />
          </div>
        </div>
        <div className="line-clamp-2"></div>
      </div>
      <div className="flex flex-col  gap-3 pt-6 ">
        <div className="flex gap-3 items-center ">
          <p className="text-[#475467] text-[20px] font-medium">{nome}</p>
          <p className="text-[#94A3B8]">{postedIn}</p>
        </div>
        <div className="flex gap-3 ">
          <p className="flex gap-3 text-[#475569]">{text1}</p>
        </div>
        <div className="flex gap-3 ">
          <p className="text-[#475569]">{text2}</p>
        </div>
      </div>
    </div>
  )
}
