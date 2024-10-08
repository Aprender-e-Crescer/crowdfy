import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import imgAvatarNotification from '@/assets/imgAvatarNotification.png'

interface Props {
  name: string
  postedIn: string
  title: string
  description: string
}

export function NotificationComponent({
  name,
  postedIn,
  title,
  description,
}: Props) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col flex-1 gap-y-2">
          <Avatar className="flex justify-center items-center size-14">
            <AvatarImage className="bg-lime-100" src={imgAvatarNotification} />
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
            {name}
          </p>
          <p className="text-[#94A3B8]">{postedIn}</p>
        </div>
        <div className="flex gap-3">
          <p className="flex gap-3 text-[#475569]">{title}</p>
        </div>
        <div className="flex gap-3">
          <p className="text-[#475569] mb-10">{description}</p>
        </div>
      </div>
    </div>
  )
}
