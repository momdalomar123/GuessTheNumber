type ModeButton={
    text:string
    backgroundColor:string  
}
export default function GameModesButtons({text,backgroundColor}:ModeButton)
{
    return (
        
        <button className={`text-2xl text-white ${backgroundColor} font-semibold w-80 pt-2 pb-2 rounded-md cursor-pointer transition-all hover:bg-zinc-600 hover:scale-105`}>
            {text}
        </button>
        
    )
}