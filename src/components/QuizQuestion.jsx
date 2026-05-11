function QuizQuestion({ index, question }) {
  return (
    <div className="quiz-question">
      <div className="text-center">
        <h4 className="question-title">
          {index + 1}. {question.question}
        </h4>
      </div>

      <div className="row">
        <div className="col-md-6">
          <li className="list-group-item option-item">
            <input
              className="form-check-input me-2"
              type="radio"
              name={`question-${index}`}
              id={`firstRadio${index}`}
            />

            <label
              className="form-check-label option-label"
              htmlFor={`firstRadio${index}`}
            >
              {question.options[0]}
            </label>
          </li>

          <li className="list-group-item option-item">
            <input
              className="form-check-input me-2"
              type="radio"
              name={`question-${index}`}
              id={`secondRadio${index}`}
            />

            <label
              className="form-check-label option-label"
              htmlFor={`secondRadio${index}`}
            >
              {question.options[1]}
            </label>
          </li>
        </div>

        <div className="col-md-6">
          <li className="list-group-item option-item">
            <input
              className="form-check-input me-2"
              type="radio"
              name={`question-${index}`}
              id={`thirdRadio${index}`}
            />

            <label
              className="form-check-label option-label"
              htmlFor={`thirdRadio${index}`}
            >
              {question.options[2]}
            </label>
          </li>

          <li className="list-group-item option-item">
            <input
              className="form-check-input me-2"
              type="radio"
              name={`question-${index}`}
              id={`fourthRadio${index}`}
            />

            <label
              className="form-check-label option-label"
              htmlFor={`fourthRadio${index}`}
            >
              {question.options[3]}
            </label>
          </li>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;
