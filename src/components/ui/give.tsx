export default function Give({title, subtitle, label1, label2, label3, placeholder1, placeholder2, placeholder3} : {title: string, subtitle: string, label1: string, label2: string, label3: string, placeholder1: string, placeholder2: string, placeholder3: string}) {
    return (
        <div className="flex bg-white flex-col">
            <div className="text-black font-semibold text-2xl">
                <h2>{title}</h2>
                <div className="text-xl font-normal text-[#475467]">
                    <h2>{subtitle}</h2>
                </div>
                <div className=" mb-6 mt-12">
                    <label 
                        htmlFor="campaign-title" 
                        className="block mb-4 text-xl font-medium text-[#1E293B] dark:text-white"
                    >
                        {label1}
                    </label>
                    <input 
                        type="text" 
                        id="campaign-title"
                        className="flex flex-col font-light border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-lg text-xl " 
                        placeholder={placeholder1} 
                        required
                    />
                </div>
                <div className="mb-6 mt-6">
                    <label 
                        htmlFor="campaign-date" 
                        className="block mb-4 text-xl font-medium text-black dark:text-white"
                    >
                        {label2}
                    </label>
                    <input 
                        type="text" 
                        id="campaign-date"
                        className="flex flex-col font-light border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-xl text-xl" 
                        placeholder={placeholder2} 
                        required
                    />
                </div>
                <div className="mb-6 mt-6">
                    <label 
                        htmlFor="campaign-goal" 
                        className="block mb-4 text-xl font-medium text-black dark:text-white"
                    >
                        {label3}
                    </label>
                    <input
                        type="text" 
                        id="campaign-goal"
                        className="flex flex-col font-light border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-xl text-xl" 
                        placeholder={placeholder3} 
                        required

                    />
                </div>
            </div>
        </div>
    );
}