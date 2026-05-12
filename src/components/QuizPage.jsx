import { useContext, useState } from "react";
import QuizQuestion from "./QuizQuestion";
import { QuestionContext } from "../store/QuestionContext";

function QuizPage() {
  const { questionList } = useContext(QuestionContext);

  const [score, setScore] = useState(0);

  function handleCorrectAnswer() {
    setScore((prev) => prev + 1);
  }

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Score: {score}/{questionList.length}
      </h2>

      {questionList.map((question, index) => (
        <QuizQuestion
          key={index}
          index={index}
          question={question}
          handleCorrectAnswer={handleCorrectAnswer}
        />
      ))}
    </div>
  );
}

export default QuizPage;
