import { useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "../Components/Header";
import UserImage from "../assets/Images/user.png";
interface Score {
  score: number;
  setScore: (value: number) => void;
}

type HeaderRules = Score;
export default function PlayingPlayer({ score, setScore }: HeaderRules) {
  const location = useLocation();
  const playerNumber: number = Number(location.state.number);
  const navigate = useNavigate();

  const [hint, setHint] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(location.state.attempts);

  useEffect(()=>{
    if(!attempts)  navigate("/LosePage", { state: { playerNumber } });
  },[attempts,navigate,playerNumber])
  function checkNumber(
    e: React.KeyboardEvent<HTMLInputElement>,
    playerNumber: number,
  ) {
    console.log(
      "are they equal?:",
      Number(e.currentTarget.value) === playerNumber,
    );
    if (e.key === "Enter" && e.currentTarget.value === "") {
      setHint("Please Enter a Number");
    }
     else if (
      e.key === "Enter" &&
      Number(e.currentTarget.value) === playerNumber
    ) {
      navigate("/VictoryPage");
    } else if (
      e.key === "Enter" &&
      Number(e.currentTarget.value) > playerNumber
    ) {
      setAttempts(attempts - 1);
      setHint("Hint: Lower Number");
      e.currentTarget.value = "";
    } else if (
      e.key === "Enter" &&
      Number(e.currentTarget.value) < playerNumber
    ) {
      setAttempts(attempts - 1);
      setHint("Hint: Higher Number");
      e.currentTarget.value = "";
    }
  }

  return (
    <>
      <Header score={score} setScore={setScore} />
      <div className="flex flex-col h-screen justify-center items-center gap-2">
        <div className="text-4xl text-white italic absolute top-40 max-[480px]:text-3xl max-[400px]:text-2xl max-[330px]:text-[18px]">
          Guess Player One's Number
        </div>
        <div className="flex gap-2">
          <img src={UserImage} className="w-10 flex" />
          <div className="text-white text-3xl ">VS</div>
          <img src={UserImage} className="w-10 flex" />
        </div>
        <div className="text-2xl text-white font-bold ">
          Attempts left: {attempts}
        </div>

        <div className="text-2xl text-white">{hint}</div>
        <input
          className="bg-zinc-600 px-4 pt-1 pb-1 rounded-md outline-0 text-2xl text-white w-70 max-[290px]:w-60"
          placeholder="Enter your guess"
             autoFocus
          onKeyDown={(e) => {
            checkNumber(e, playerNumber);
          }}
        />
      </div>
    </>
  );
}
