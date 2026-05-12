import { useContext, useState } from "react";
import { QuestionContext } from "../store/QuestionContext";

function QuestionForm() {
  const { questionList, setQuestionList } = useContext(QuestionContext);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  function handleSubmit() {
    if (
      !question ||
      !options.every((option) => option.trim()) ||
      !correctAnswer
    ) {
      alert("Please fill in all fields.");
      return;
    }
    // Handle form submission logic here
    const newQuestion = {
      question,
      options,
      correctAnswer,
    };
    setQuestionList([...questionList, newQuestion]);
    // Clear the form
    setQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer("");
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row g-3">
          <div className="col">
            <textarea
              rows="4"
              cols="50"
              className="form-control"
              placeholder="Enter your question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option 1"
              value={options[0]}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[0] = e.target.value;
                setOptions(newOptions);
              }}
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option 2"
              value={options[1]}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[1] = e.target.value;
                setOptions(newOptions);
              }}
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option 3"
              value={options[2]}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[2] = e.target.value;
                setOptions(newOptions);
              }}
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option 4"
              value={options[3]}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[3] = e.target.value;
                setOptions(newOptions);
              }}
              required
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the correct answer"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="btn btn-primary mt-4" onClick={() => handleSubmit()}>
          Add Question
        </button>
      </div>
    </>
  );
}
export default QuestionForm;
