import DifficultySelectorButtons from "../Components/DifficultySelectorButtons";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
type ScoreAmount = {
  score: number;
  setScore: (value: number) => void;
};
export default function DifficultySelector({ score, setScore }: ScoreAmount) {
  void setScore;
  return (
    <>
      <Header score={score} setScore={setScore} />

      <div className="flex flex-col gap-6 h-screen justify-center items-center">
        <h1 className="text-4xl text-white italic">Score: {score}</h1>
        <Link to="/PlayingComputer" state={{ attempts: 6, range: 30 }}>
          <DifficultySelectorButtons
            text="Easy (6 attempts/1->30)"
            backgroundColor="bg-green-600"
            hoverBackground="hover:bg-green-900"
            activeBackground="active:bg-green-500"
          />
        </Link>
        <Link to="/PlayingComputer" state={{ attempts: 4, range: 50 }}>
          <DifficultySelectorButtons
            text="Medium (4 attempts/1->50)"
            backgroundColor="bg-amber-600"
            hoverBackground="hover:bg-amber-900"
            activeBackground="active:bg-amber-500"
          />
        </Link>
        <Link to="/PlayingComputer" state={{ attempts: 3, range: 100 }}>
          <DifficultySelectorButtons
            text="Hard (3 attempts/1->100)"
            backgroundColor="bg-red-600"
            hoverBackground="hover:bg-red-900"
            activeBackground="active:bg-red-500"
          />
        </Link>
      </div>
    </>
  );
}
