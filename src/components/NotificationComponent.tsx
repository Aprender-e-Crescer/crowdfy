import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import img from '@/assets/img.png'

interface Props {
  nome: string;
  postedIn: string;
  text1: string;
  text2: string;
}

export function NotificationComponent({
  nome,
  postedIn,
  text1,
  text2,
}: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col flex-1 gap-y-2">
          <Avatar className="flex justify-center items-center size-14">
            <AvatarImage className="bg-lime-100" src={img} />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center flex-1">
            <hr className="flex-1 h-full border border-gray-400" />
          </div>
        </div>
        <div className="line-clamp-2"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between mr-5 items-center w-max gap-3">
          <p className="text-[#475467] text-[20px] font-medium max-[410px]:text-base">
            {nome}
          </p>
          <p className="text-[#94A3B8]">{postedIn}</p>
        </div>
        <div className="flex gap-3">
          <p className="flex gap-3 text-[#475569]">{text1}</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#475569] mb-10">{text2}</p>
        </div>
      </div>
    </div>
  );
}

