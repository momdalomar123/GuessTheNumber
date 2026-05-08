import { useEffect, useState } from "react"
import "./App.css"
import MainMenu from "./Components/MainMenu"
import DifficultySelector from "./Pages/DifficultySelector"
import PlayingComputer from "./Pages/PlayingComputer"
import VictoryPage from "./Pages/VictoryPage"
import LosePage from "./Pages/LosePage"
import {Routes,Route} from "react-router-dom"
function getRandomNumber(range:number)
{
  return Math.floor(Math.random()*range+1)
}
export default function App(){
   const [computerNumber,setComputerNumber]=useState<number>(getRandomNumber(20))
   const [score,setScore]=useState<number>(()=>{
    const stored = localStorage.getItem("score");
    return stored ? JSON.parse(stored) : 0;
   })
   useEffect(()=>{
      localStorage.setItem("score", JSON.stringify(score))
   },[score])
  
  return(
   
    <Routes>
      <Route index element ={ <MainMenu
      score={score}
      setScore={setScore}
      />}></Route>
      <Route path="Difficulties" element= {<DifficultySelector
      score={score}
      setScore={setScore}
       />}></Route>
      <Route path="PlayingComputer" element= {<PlayingComputer 
      computerNumber={computerNumber}
      setComputerNumber={setComputerNumber}
      score={score}
      setScore={setScore}
      />}></Route>
      <Route path="VictoryPage" element= {<VictoryPage/>}></Route>
      <Route path="LosePage" element= {<LosePage/>}></Route>
      
    </Routes>
    
  )
}