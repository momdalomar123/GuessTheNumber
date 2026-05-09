import { Link, useNavigate ,useLocation} from "react-router-dom"
import Header from "../Components/Header"
type Score={
    score:number,
    setScore:(value:number)=>void
}
export default function LosePage({score,setScore}:Score){
      const navigateHome = useNavigate()
    const location =useLocation()
return(
    <>
    <Header
    score={score}
    setScore={setScore}/>
    
    <div className="flex flex-col gap-6 h-screen justify-center items-center" tabIndex={0} autoFocus onKeyDown={(e)=>{
        if(e.key==="Enter") navigateHome("/")
    }}>
        <h1 className="md:text-4xl sm:text-3xl text-2xl  text-white flex ">Sorry You ran out of attempts!</h1>
        <h2  className="md:text-4xl sm:text-3xl  text-2xl text-white">The number was {location.state?.computerNumber || location.state?.playerNumber} </h2>
        <Link to="/">
             <h2 className="text-3x1 text-white">
            {location.state?.score && `Your score is: ${location.state?.score +10}`}
            </h2>
       
            <button className="bg-fuchsia-300 text-white font-bold text-2xl px-5 pt-1 pb-1 rounded-md cursor-pointer transition-colors hover:bg-fuchsia-400 active:bg-fuchsia-500">
                Play Again
            </button>
        </Link>
    </div>
    </>
)
} 