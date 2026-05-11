import QuizQuestion from "./QuizQuestion";

function QuizPage({ questionList }) {
  return (
    <>
      <div className="container">
        {questionList.map((question, index) => (
          <QuizQuestion key={index} index={index} question={question} />
        ))}
      </div>
    </>
  );
}
export default QuizPage;
