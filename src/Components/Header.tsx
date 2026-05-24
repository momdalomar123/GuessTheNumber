import { useState } from "react";
import { Link } from "react-router-dom";
import DisplayRules from "./DisplayRules";
import HamburgerLogo from "../assets/Images/hamburger.png";
import GithubLogo from "../assets/Images/github-logo.svg";

type Score = {
  score: number;
  setScore: (value: number) => void;
};
function SideBar() {
  return (
    <div
      className="h-screen w-100 max-sm:w-50 max-md:w-70
    z-10 bg-gray-800 absolute right-0 bottom-0 flex flex-col items-center justify-center animate-slide-in "
    >
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full">
          <a href="https://github.com/momdalomar123" target="_blank">
            <button
              className="w-full text-sm md:text-2xl  bg-gray-900  font-bold h-15 text-white  
              rounded-md cursor-pointer flex justify-center items-center
            transition-all  hover:scale-105 active:bg-blue-300 gap-1.5"
            >
              <img src={GithubLogo} className="w-10 h-10"></img>
              My Github
            </button>
          </a>
        </div>
        <div className="w-full">
          <a
            href="https://momdalomar123.github.io/PasswordGenerator/"
            target="_blank"
          >
            <button
              className="w-full text-sm md:text-2xl  bg-blue-400  font-bold h-15 text-white  
              rounded-md cursor-pointer flex justify-center items-center
            transition-all  hover:scale-105 active:bg-blue-300 gap-1.5"
            >
              Password Generator
            </button>
          </a>
        </div>
        <div className="w-full">
          <a href="https://momdalomar123.github.io/QuickNotes/" target="_blank">
            <button
              className="w-full text-sm md:text-2xl  bg-red-400  font-bold h-15 text-white  
              rounded-md cursor-pointer flex justify-center items-center
            transition-all  hover:scale-105 active:bg-blue-300 gap-1.5"
            >
              Quick Notes
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
function DisplayResetScore() {
  return (
    <p className=" text-2x1 sm:text-2xl md:text-3xl text-white border-gray-400 animate-fade-in">
      Reseted
    </p>
  );
}
export default function Header({ score, setScore }: Score) {
  const [displayScore, setDisplayScore] = useState(false);
  void setScore;
  const animationType = {
    fadeIn: "animate-fade-in",
    fadeOut: "animate-fade-out",
  };

  function resetScore() {
    setScore(0);
    localStorage.setItem("score", JSON.stringify(score));
    setDisplayScore(!displayScore);
    setTimeout(() => {
      setDisplayScore(false);
    }, 1000);
  }

  const [ruleFlag, setRuleFlag] = useState<boolean>(false);
  const [sidebarFlag, setSidebarFlag] = useState<boolean>(false);

  function showHideSidebar() {
    setSidebarFlag(!sidebarFlag);
  }
  return (
    <>
      <div className="flex justify-between items-center gap-1 ml-5 mr-5 pt-4 h-17">
        <Link to="/">
          <div className="font-bold text-white text-[20px] sm:text-2xl md:text-3xl italic ">
            Guess the Number Game:
          </div>
        </Link>

        <div className="flex items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <button
              className="max-md:w-29 text-sm md:text-2xl md:h-9  font-bold h-7 px-5 text-white bg-blue-400 pt-0.5 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300"
              onClick={resetScore}
            >
              Reset Score
            </button>
            {displayScore && <DisplayResetScore />}
          </div>

          <button
            className="text-sm md:text-2xl md:h-9 font-bold
            h-7 text-white bg-blue-400 px-3 pt-0.5 rounded-md cursor-pointer flex justify-center align-middle transition-all hover:bg-blue-500 hover:scale-105 active:bg-blue-300 "
            onClick={() => {
              setRuleFlag(!ruleFlag);
            }}
          >
            Rules
          </button>
          {ruleFlag === true ? (
            <DisplayRules animationType={animationType.fadeIn} display="" />
          ) : (
            <DisplayRules
              animationType={animationType.fadeIn}
              display="hidden"
            />
          )}
          <button className="cursor-pointer z-20 max-sm:w-10 md:h-15 flex justify-center items-center">
            <img
              src={HamburgerLogo}
              alt=""
              className="w-10 h-5 px-2 max-sm:w-10 md:h-10 md:w-15 "
              onClick={showHideSidebar}
            />
          </button>
          {sidebarFlag == true ? <SideBar /> : null}
        </div>
      </div>
    </>
  );
}
