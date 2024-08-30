import  { PiggyBank,FilePenLine }  from 'lucide-react';

export default function Choose({tittle, subtittle, donation, petition, descrição1, descrição2}: {tittle: string, subtittle: string, donation: string, petition: string, descrição1: string, descrição2: string}){
  return(<>
  
  
    <div className="flex md:hidden flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-2xl text-[#101828] font-bold">{tittle}</p>
                </div>
                <div className="flex">
                    <p className="text-[#475467] font-normal text-[16px]">{subtittle}</p>
                </div>
            </div>
            <div className="flex gap-1">
                <div className="flex w-[320px] h-[165px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                    <div className="flex-col pt-2 pl-4 justify-center items-center">
                        <div className="">
                          <div className=""></div>
                          <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFFFF] rounded-full w-16">
                            <PiggyBank size={56} className="text-slate-500 bg-gray-200 border-8 rounded-full ">
                              </PiggyBank>
                              </div>
                            <div className="flex">
                                <p className="text-[24px] font-bold">{donation}</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B] text-[16px]">{descrição1}
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[320px] h-[165px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                <div className="flex-col pt-2 pl-4">
                        <div className="">
                        <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFF] rounded-full w-16 ">
                          <FilePenLine size={56} className="text-slate-500 bg-gray-200 p-2 rounded-full ">
                          </FilePenLine>
                          </div>
                            <div className="flex">
                                <p className="text-[24px] font-bold">{petition}</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B]">{descrição2} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden md:flex flex-col gap-4">
            <div className="flex flex-col">
                <div className="flex">
                    <p className="text-2xl text-[#101828] font-bold">{tittle}</p>
                </div>
                <div className="flex">
                    <p className="text-[#475467] font-normal text-[20px]">{subtittle}</p>
                </div>
            </div>
            <div className="flex gap-1">
                <div className="flex w-[320px] h-[593px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                    <div className="flex-col pt-96 pl-4 justify-center items-center">
                        <div className="">
                          <div className=""></div>
                          <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFFFF] rounded-full w-16">
                            <PiggyBank size={56} className="text-slate-500 bg-gray-200 border-8 rounded-full ">
                              </PiggyBank>
                              </div>
                            <div className="flex">
                                <p className="text-[35px] font-bold">{donation}</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B] text-[21px]">{descrição1}
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-[320px] h-[593px] border-b-2 border-t-2 border-l-2 border-r-2 rounded-xl items-center ">
                <div className="flex-col pt-96 pl-4">
                        <div className="">
                        <div className="flex items-center justify-center border-4 border-slate-100 bg-[#FFFF] rounded-full w-16 ">
                          <FilePenLine size={56} className="text-slate-500 bg-gray-200 p-2 rounded-full ">
                          </FilePenLine>
                          </div>
                            <div className="flex">
                                <p className="text-[35px] font-bold">{petition}</p>
                            </div>
                            <div className="flex">
                                <p className="text-[#64748B] text-[21px]">{descrição2} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
  )
}