import { useState } from "react";

function QuizQuestion({ index, question, handleCorrectAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleOptionClick(option) {
    if (selectedOption) return;

    setSelectedOption(option);

    if (option === question.correctAnswer) {
      handleCorrectAnswer();
    }
  }

  function getButtonClass(option) {
    if (!selectedOption) return "btn-outline-primary";

    if (option === question.correctAnswer) {
      return "btn-success";
    }

    if (option === selectedOption && option !== question.correctAnswer) {
      return "btn-danger";
    }

    return "btn-outline-secondary";
  }

  return (
    <div className="quiz-question">
      <div className="text-center">
        <h4 className="question-title">
          {index + 1}. {question.question}
        </h4>
      </div>

      <div className="row">
        {question.options.map((option, i) => (
          <div className="col-md-6" key={i}>
            <button
              className={`option-btn w-100 btn ${getButtonClass(option)}`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizQuestion;
