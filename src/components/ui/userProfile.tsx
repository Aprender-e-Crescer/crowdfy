export function UserProfile({title, img, text1, text2} :
    { 
        title: string,
        img: string
        text1: string
        text2: string
    }
    ) {
        return(
            <div className=" flex">
                <img className="bg-[#D9F99D] rounded-full w-11 h-11 mr-4" src={img} alt="" />
    
                <div className="mb-4">
                    <h1 className="flex-col font-semibold">{title}</h1>
                     <p className="flex text-sm font-medium">{text1} <div className="bg-black h-[6px] w-[6px] mt-[7px] rounded-full mx-3"/> {text2}</p>
                </div>
                </div> 
        )
    }