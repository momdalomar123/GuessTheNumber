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
            
            <p className="absolute top-15 w-100 h-10 text-4xl text-white border-gray-400">
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
    <div className="flex justify-between gap-1 ml-5 mr-5 pt-4">
        <Link to ="/">
        <div className="font-bold text-white text-2xl italic max-sm:text-[19px]">
            Guess the Number Game:
        </div>
        </Link>
        
        <div className="flex gap-5" >
            <button className=" text-sm md:text-2xl md:h-9 max-sm:w-30 font-bold h-7 text-white bg-blue-400 px-5 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300" onClick={resetScore}>
            Reset Score
        </button>
        {displayScore && <DisplayResetScore/>}
           
            <button className="text-sm md:text-2xl md:h-9 font-bold
            h-7 text-white bg-blue-400 px-3 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300 " onClick={()=>{
                setRuleFlag(!ruleFlag)
            }} >
                Rules
            </button>
            {ruleFlag===true? <DisplayRules 
            animationType={animationType.fadeIn}
            display=""/>:<DisplayRules 
            animationType={animationType.fadeOut} 
            display={"hidden"}/>}
        </div>
        
    </div>
        
    </>
    )
}
