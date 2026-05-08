import { Link, useNavigate ,useLocation} from "react-router-dom"

import Header from "../Components/Header"
export default function LosePage(){
      const navigateHome = useNavigate()
    const location =useLocation()
return(
    <>
    <Header/>
    
    <div className="flex flex-col gap-6 h-screen justify-center items-center" tabIndex={0} autoFocus onKeyDown={(e)=>{
        if(e.key==="Enter") navigateHome("/")
    }}>
        <h1 className="text-4xl text-white">Sorry You ran out of attempts!</h1>
        <h2  className="text-3xl text-white">The number was {location.state?.computerNumber} </h2>
        <Link to="/">
          <h3 className="text-3x1 text-white">
            Your score is: {location.state?.score}
        </h3>
            <button className="bg-fuchsia-200 text-white font-bold text-2xl px-4 pt-1 pb-1 rounded-md cursor-pointer transition-colors hover:bg-fuchsia-400">
                Play Again
            </button>
        </Link>
    </div>
    </>
)
} 