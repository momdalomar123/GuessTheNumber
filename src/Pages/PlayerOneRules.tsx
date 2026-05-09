import { useState } from "react"
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom"
type Score={
    score:number,
    setScore:(value:number)=>void
}
type Message={
    message:string
}
function WrongNoInputMessage({message}:Message)
{
    return(
        <div>
            <p className="text-white text-2xl">
               {message}
            </p>
        </div>
    )
}

export default function PlayerOneRules({score,setScore}:Score)
{
    const navigate =useNavigate()
    console.log(navigate)
    const [number,setNumber]=useState<string>("")
    const [noInputMessage,setNoInputMessage]=useState(false)
    const [wrongInputMessage,setWrongInputMessage]=useState(false)
    const [attempts,setAttempts]=useState<string>("")
    async function checkInputAndProceed()
    {
        if(number==="" || attempts==="")
        {   
            setNoInputMessage(true)
            await setTimeout(()=>{
                setNoInputMessage(false)
            },1000)
            return
        }
        else if(!Number(number) || !Number(attempts))
        {
           setWrongInputMessage(true)
            await setTimeout(()=>{
                setWrongInputMessage(false)
            },1000)
            return
        }
        else{
            navigate("/PlayingPlayer",{state:{number,attempts}})
        }
    }
    return(
        <>
        <Header
        score={score}
        setScore={setScore}
        />
        <div className="flex flex-col gap-15 h-screen justify-start items-center mt-10 ">
            <p className="text-4xl text-white">
            Player 1 Chooses:
            </p>
            <div className="flex flex-col gap-1">
            <label className="text-white">Number</label>
        <input className="bg-zinc-600 px-4 pt-1 pb-1 rounded-md outline-0 text-2xl text-white" placeholder="Enter The Number"onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setNumber(e.currentTarget.value)
        }}/>
        </div>
           <div className="flex flex-col gap-1 ">
            <label className="text-white">Attempts</label>
        <input className="bg-zinc-600 px-4 pt-1 pb-1 rounded-md outline-0 text-2xl text-white" placeholder="Enter The Attempts" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setAttempts(e.currentTarget.value)
        }}/>
        </div>
        <div className="flex flex-col gap-0.5 justify-center items-center">
        {noInputMessage && <WrongNoInputMessage message="Please Enter All The Fields"/> || wrongInputMessage && <WrongNoInputMessage message="Please Enter Valid Inputs"/>}
        <button className="text-2xl w-35 bg-gray-400 px-5 rounded-md cursor-pointer transition-all hover:bg-gray-500 hover:scale-105 active:bg-gray-300" onClick={checkInputAndProceed}>
        Proceed
        </button>
        </div>
        
        </div>
        </>
    )
}