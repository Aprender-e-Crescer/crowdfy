import { Bold, Italic, Link2, Logs, Menu } from 'lucide-react'

export default function Tell() {
  return (
    <div className="flex p-3">
      <div className="flex flex-col gap-4 w-full xl:w-96 ">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-[#101828] font-semibold text-3xl">
            2. Tell more about your campaign
          </h2>
          <p className="text-[#475467] font-normal text-base">
            What it's about your campaign?
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#1E293B] font-medium text-lg">
            Your campaign title
          </p>
          <input
            className="border border-[#8C9CB1] w-full h-10 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#475467] transition-all duration-200"
            type="text"
            placeholder="Write here your beautiful title 🌱"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#344054] font-medium text-lg">Story</p>
          <div className="flex flex-col gap-0">
            <div className="flex text-[#BABABA] gap-2 mb-2">
              <Bold className="w-5 h-5" />
              <Italic className="w-5 h-5" />
              <Link2 className="w-5 h-5" />
              <Logs className="w-5 h-5" />
              <Menu className="w-5 h-5" />
            </div>

            <textarea
              className="w-full border border-[#8C9CB1] h-28 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#475467] transition-all duration-200 resize-none"
              placeholder="Tell your story here, give details about your scenario. And explain why you need this help on this campaign"
            />
            <p className="text-[#344054] font-normal text-xs">
              275 caracteres restantes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
