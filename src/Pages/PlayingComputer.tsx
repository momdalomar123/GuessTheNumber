import Header from "../Components/Header"
import UserImage from "../assets/Images/user.png"
import ComputerImage from "../assets/Images/ai-chip.png"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"


type RandomComputerNumberAndScore={
    computerNumber:number
    setComputerNumber:(value:number)=>void
    score:number
    setScore:(value:number)=>void
}

function getRandomNumber(range:number)
{
  return Math.floor(Math.random()*range+1)
}
function saveToLocalStorage(score:number)
{
    localStorage.setItem("score",JSON.stringify(score))
}

export default function Playing({computerNumber,setComputerNumber,score,setScore}:RandomComputerNumberAndScore)
{
    const location = useLocation()
    const [hint,setHint]=useState<string>("")
    
   useEffect(()=>{
    setComputerNumber(getRandomNumber(location.state.range))
   },[setComputerNumber,location.state.range])
    const navigate=useNavigate()
    const [attempts,setAttempts]=useState<number>(location.state.attempts)

    function checkNumber(e:React.KeyboardEvent<HTMLInputElement>,computerNumber:number)
{
    if(attempts===0)
    {
        saveToLocalStorage(score)
        navigate("/LosePage",{state:{computerNumber,score}})
    }
    else if(e.key==="Enter" && e.currentTarget.value===""){
        setHint("Please Enter a Number")
    }
    else if(e.key==="Enter" && Number(e.currentTarget.value)===computerNumber){
       setScore(score+10)
        saveToLocalStorage(score)
       navigate("/VictoryPage",{state:{score}})
    }
   
    else if (e.key==="Enter" && Number(e.currentTarget.value) > computerNumber){
        console.log(e.currentTarget.value)
        setAttempts(attempts-1)
        setHint("Hint: Lower Number")
        e.currentTarget.value=""
    }
      else if (e.key==="Enter" && Number(e.currentTarget.value) < computerNumber){
        console.log(e.currentTarget.value)
        setAttempts(attempts-1)
        setHint("Hint: Higher Number")
        e.currentTarget.value=""
    }
    
    
}

    return(
        <>
        <Header 
        score={score}
        setScore={setScore}/>
        
        <div className="flex flex-col h-screen justify-center items-center gap-2">
            <div className="text-4xl text-white italic absolute top-40 max-sm:text-3xl">
                Guess the Computer's Number
                
            </div>
            <div className="flex gap-2">
                 <img src ={UserImage} className="w-10 flex"/>
                 <div className="text-white text-3xl ">VS</div>
                     <img src ={ComputerImage} className="w-10 flex"/>
                     </div>
            <div className="text-2xl text-white font-bold ">
            Attempts left: {attempts}
            </div>
             
            <div className="text-2xl text-white">
                {hint}
            </div>
            <input className = "bg-zinc-600 px-4 pt-1 pb-1 rounded-md outline-0 text-2xl text-white"placeholder="Enter your guess"
            onKeyDown={(e)=>{
                checkNumber(e,computerNumber)
                
            }}
            />
        </div>
        </>
    )

}