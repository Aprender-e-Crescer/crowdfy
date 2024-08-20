import { Bold, Italic, Link2, Logs, Menu } from "lucide-react";

export default function Tell({title, subtitle, titleInput, placeholderInput}: {title:string, subtitle:string, titleInput:String, placeholderInput:string}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <p className="text-[#101828] font-bold text-2xl ">{title}</p>
                <p className="text-[#475467] font-normal text-sm">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[#1E293B] font-medium">{titleInput}</p>
                <input className="border border-[#8C9CB1] max-w-md h-8 rounded-sm p-4" type="text" placeholder={placeholderInput} />
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-[#344054] font-medium">Story</p>
                <div className="flex flex-col gap-0">
                    <div className="flex text-[#BABABA] gap-2">
                        <Bold className="w-5 h-5" />
                        <Italic className="w-5 h-5" />
                        <Link2 className="w-5 h-5" />
                        <Logs className="w-5 h-5" />
                        <Menu className="w-5 h-5" />
                    </div>
                    <textarea className="border border-[#8C9CB1] h-28 max-w-md rounded-sm p-4" itemType="text" placeholder="Tell your story here, give details about your scenario. And explain why you need this help on this campaign" />
                    <p className="text-[#344054] font-normal text-xs">275 caracteres restantes</p>
                </div>
            </div>
        </div>
    )
}
