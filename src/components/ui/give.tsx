export default function Give() {
    return (
        <div className="flex bg-white">
            <div className="text-black font-semibold text-2xl">
                <h2>3. Give Final Details</h2>
                <div className="text-sm font-normal text-[#475467]">
                    <h2>What it's about your campaign?</h2>
                </div>
                <div className=" mb-6 mt-12">
                    <label 
                        htmlFor="campaign-title" 
                        className="block mb-4 text-xl font-medium text-[#1E293B] dark:text-white"
                    >
                        Your campaign title
                    </label>
                    <textarea 
                        type="text" 
                        id="campaign-title"
                        className="font-light border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-lg text-xl " 
                        placeholder="Write here your beautiful title" 
                        required
                    />
                </div>
                <div className="mb-6 mt-6">
                    <label 
                        htmlFor="campaign-date" 
                        className="block mb-4 text-xl font-medium text-black dark:text-white"
                    >
                        Campaign date
                    </label>
                    <textarea 
                        type="text" 
                        id="campaign-date"
                        className="border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-xl text-xl" 
                        placeholder="dd/mm/aaaa" 
                        required
                    />
                </div>
                <div className="mb-6 mt-6">
                    <label 
                        htmlFor="campaign-goal" 
                        className="block mb-4 text-xl font-medium text-black dark:text-white"
                    >
                        Goal
                    </label>
                    <textarea
                        type="text" 
                        id="campaign-goal"
                        className="border border-gray-300 rounded-sm w-80 h-10 placeholder-gray-400 placeholder:text-xl text-xl" 
                        placeholder="$10,000" 
                        required

                    />
                </div>
            </div>
        </div>
    );
}