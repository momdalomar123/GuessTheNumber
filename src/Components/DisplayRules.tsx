
import UserImage from "../assets/Images/user.png"
import ComputerImage from "../assets/Images/ai-chip.png"
type AnimationAndDisplay={
    animationType:string
    display:string
}
export default function DisplayRules({animationType,display}:AnimationAndDisplay)
{
    return(
        
        <div className={`absolute right-5 min-lg:bottom-25 max-sm:bottom-28 w-60 mt-2 bg-zinc-500 rounded-md px-2.5 z-10 ${animationType} ${display}`}>
           
            <p className="font-bold text-white px-1 pb-1">
                <span className="text-2xl">The Rules are Simple:
                </span>
                <span className="block">
                ---------------------------
                </span>
                <div className="flex gap-12">
                      <img src ={UserImage} className="w-5 flex"/>
                     <img src ={ComputerImage} className="w-5 flex"/>
                </div>
               
                <span className="text-red-400">Player</span> Vs <span className="text-green-400">Computer</span>: The player chooses a difficulty to put up against the computer, in which the player should guess the random number chosen while having limited attempts.
            </p>
            <p className="font-bold text-white px-1 pb-1">
                    ---------------------------
                <div className="flex gap-12">
                      <img src ={UserImage} className="w-5 flex"/>
                     <img src ={UserImage} className="w-5 flex"/>
                </div>
                      <span className="text-red-400">Player</span> Vs  <span className="text-red-400">Player</span>: Two players side by side against each other. One chooses the number with the attempts, while the other tries to guess it !
            </p>
        </div>
        
    )
}
