import Header from "./Header"
import GameModes from "./GameModes"
type Score={
    score:number,
    setScore:(value:number)=>void
}
export default function MainMenu({score,setScore}:Score)
{
    return(
        <>
        <Header score={score}
        setScore={setScore}/>
        <GameModes/>
        </>
    )
}