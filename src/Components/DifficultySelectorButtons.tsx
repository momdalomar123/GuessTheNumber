
type Button={
    text:string
    backgroundColor:string
    hoverBackground:string
     activeBackground:string
}
export default function DifficultySelectorButtons({text,backgroundColor,hoverBackground,activeBackground}:Button)
{
    return(
        <button className={`text-2xl text-white ${backgroundColor} font-semibold w-80 pt-2 pb-2 rounded-md cursor-pointer transition-all ${hoverBackground} hover:scale-105 ${activeBackground}`}>
            {text}
        </button>
    )
}