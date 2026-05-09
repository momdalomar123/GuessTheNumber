import { useState } from "react"
import { Link } from "react-router-dom"
import DisplayRules from "./DisplayRules"

type Score={
    score:number,
    setScore:(value:number)=>void
}
 function DisplayResetScore()
    {
        return(
            
            <p className=" text-2x1 sm:text-2xl md:text-3xl text-white border-gray-400 animate-fade-in">
                Reseted
            </p>
        )
    }
export default function Header({score,setScore}:Score){
    const [displayScore,setDisplayScore]=useState(false)
    void setScore
    const animationType={
        fadeIn:"animate-fade-in",
        fadeOut:"animate-fade-out"
    }
   
    function resetScore()
    {
 
       setScore(0)
       localStorage.setItem("score",JSON.stringify(score))
       setDisplayScore(!displayScore)
       setTimeout(()=>{setDisplayScore(false)},1000)
      
    }
    const [ruleFlag,setRuleFlag]=useState<boolean>(false)
    return (
    <>
    <div className="flex justify-between items-center gap-1 ml-5 mr-5 pt-4 h-17">
        <Link to ="/">
        <div className="font-bold text-white text-[20px] sm:text-2xl md:text-3xl italic ">
            Guess the Number Game:
        </div>
        </Link>
        
        <div className="flex items-center gap-5" >

            <div className="flex flex-col justify-center items-center">
            <button className="max-md:w-29 text-sm md:text-2xl md:h-9  font-bold h-7 px-5 text-white bg-blue-400 pt-0.5 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300" onClick={resetScore}>
            Reset Score
        </button>
        {displayScore && <DisplayResetScore/>}
        </div>
           
            <button className="text-sm md:text-2xl md:h-9 font-bold
            h-7 text-white bg-blue-400 px-3 pt-0.5 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300 " onClick={()=>{
                setRuleFlag(!ruleFlag)
            }} >
                Rules
            </button>
            {ruleFlag===true? <DisplayRules 
            animationType={animationType.fadeIn}
            display=""
            />:<DisplayRules 
            animationType={animationType.fadeIn}
            display="hidden"
            />
            }
        </div>
        
    </div>
        
    </>
    )
}
