import  { PiggyBank,FilePenLine }  from 'lucide-react';

export default function Choose(){
  return(
    <div className="flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-2xl text-[#101828] font-bold">1. Choose your campaign style</p>
                </div>
                <div className="flex">
                    <p className="text-[#475467] font-normal text-[16px]">What it's about your campaign?</p>
                </div>
            </div>
            <div className="flex gap-1">
                <div className="flex w-[320px] h-[593px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                    <div className="flex-col pt-96 pl-5">
                        <div className="">
                          <div className=""></div>
                          <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFFFF] rounded-full w-16">
                            <PiggyBank size={56} className="text-slate-500 bg-gray-200 border-8 rounded-full ">
                              </PiggyBank>
                              </div>
                            <div className="flex">
                                <p className="text-[35px] font-bold">Donation</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B]">Create a donation to receive <br />
                                 funds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[320px] h-[593px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                <div className="flex-col pt-96 pl-5">
                        <div className="">
                        <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFF] rounded-full w-16 ">
                          <FilePenLine size={56} className="text-slate-500 bg-gray-200 p-2 rounded-full ">
                          </FilePenLine>
                          </div>
                            <div className="flex">
                                <p className="text-[35px] font-bold">Petition</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B]">Create a petition to crowd <br />
                                 signatures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}