import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "../Components/Header";
type Score = {
  score: number;
  setScore: (value: number) => void;
};
export default function LosePage({ score, setScore }: Score) {
  const navigateHome = useNavigate();
  const location = useLocation();
  return (
    <>
      <Header score={score} setScore={setScore} />

      <div
        className="flex flex-col gap-6 h-screen justify-center items-center select-none"
        tabIndex={0}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") navigateHome("/");
        }}
      >
        <div className=" flex flex-col items-center gap-2   ">
          <h1
            className=" text-5xl max-[400px]:text-4xl
            max-[300px]:text-3xl
        text-white"
          >
            Sadly!
          </h1>
          <h2 className="text-white text-2xl max-[400px]:text-[15px]">
            You've Run Out of Attempts
          </h2>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h1 className="text-white text-3xl tracking-[9px] max-[430px]:text-2xl max-[370px]:text-[17px] max-[315px]:text-[12px]">
            The Number was: {location.state?.computerNumber}
          </h1>
          <h2 className="text-3xl text-white tracking-[9px] max-[430px]:text-2xl max-[370px]:text-[17px] max-[315px]:text-[12px]">
            {(location.state?.score + 10 &&
              `Your score is: ${location.state?.score + 10} `) ||
              ""}
          </h2>
          <Link to="/" className="w-full flex justify-center max-[380px]:w-11/12 ">
            <button className="bg-fuchsia-400 text-white font-bold text-2xl w-full px-4 pt-1 pb-1 rounded-md cursor-pointer transition-all hover:bg-fuchsia-200 hover:pb-2 hover:pt-2 ">
              Play Again
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
