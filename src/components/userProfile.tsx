
export function UserProfile({title, img, text} :
{ 
    title: string,
    img: string
    text: string
}
) {
    return(
        <div className="flex">
            <img className="w-11 h-11" src={img} alt="" />

            <div className="mb-4">
                <h1 className="flex-col font-semibold">{title}</h1>
                 <p className="flex-col">{text}</p>
            </div>
            </div> 
    )
}
