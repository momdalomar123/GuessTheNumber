import Header from "../Components/Header"
type Score={
    score:number,
    setScore:(value:number)=>void
}
export default function PlayingPlayer({score,setScore}:Score)
{
    return(
        <>
        <Header 
        score={score}
        setScore={setScore}/>

        </>
    )
}