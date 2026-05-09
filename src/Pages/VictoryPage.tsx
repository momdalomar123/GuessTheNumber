import { Link, useNavigate ,useLocation} from "react-router-dom"
import Header from "../Components/Header"
type Score={
    score:number,
    setScore:(value:number)=>void
}
export default function VictoryPage({score,setScore}:Score){
      const navigateHome = useNavigate()
      const location= useLocation()
    
return(
    <>
    <Header 
    score={score}
    setScore={setScore} />
    
    <div className="flex flex-col gap-6 h-screen justify-center items-center" tabIndex={0} autoFocus onKeyDown={(e)=>{
        if(e.key==="Enter") navigateHome("/")
    }}>
        
        <h1 className=" flex justify-center w-60 text-2xl sm:text-3xl
        sm:w-100 md:text-4xl md:w-170 text-white">Congratulations! You guessed the number!</h1>
      
        <Link to="/">
        <h2 className="text-3x1 text-white">
            {location.state?.score && `Your score is: ${location.state?.score +10}`}
        </h2>
            <button className="bg-fuchsia-200 text-white font-bold text-2xl px-4 pt-1 pb-1 rounded-md cursor-pointer transition-colors hover:bg-fuchsia-400">
                Play Again
            </button>
        </Link>
    </div>
    </>
)
} 