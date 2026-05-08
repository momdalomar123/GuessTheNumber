import GameModesButtons from "./GameModeButtons"
import { Link } from "react-router-dom"
export default function GameModes(){
    return(
        <>
            <div className="flex flex-col gap-6 h-screen justify-center items-center">
               <Link to="/Difficulties">
                <GameModesButtons 
                text="Player Vs Computer"
                backgroundColor="bg-zinc-500"
                />
                </Link>
                <Link to="/Rules">
                 <GameModesButtons
                  text="Player Vs Player"
                  backgroundColor="bg-zinc-500"
                  />
                  </Link>
            </div>
        </>
       ) 
    
}
