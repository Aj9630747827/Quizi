import { createContext, useState } from "react";

export const QuestionContext = createContext({
  questionList: [],
  setQuestionList: () => {},
});
function QuestionContextProvider({ children }) {
  const [questionList, setQuestionList] = useState([
    {
      question:
        "What is the name of the empire that ruled the Middle East from 883 to 627 BC?",
      options: [
        "The Babylonian Empire",
        "The Merovingian Empire",
        "The Persian Empire",
        "The Assyrian Empire",
      ],
      correctAnswer: "The Assyrian Empire",
    },
    {
      question: "Whose adopted son was Emperor Augustus?",
      options: ["Diogenes", "Julius Caesar", "Nero", "Mark Antony"],
      correctAnswer: "Julius Caesar",
    },
    {
      question:
        "Which major city put the first urban tram line into service in 1832?",
      options: ["New York", "London", "Berlin", "Vienna"],
      correctAnswer: "New York",
    },
    {
      question: "In what year did the reunification of Germany take place?",
      options: ["1989", "1990", "1991", "1992"],
      correctAnswer: "1990",
    },
    {
      question:
        "Which was the last country to join the European Union in the year 2013?",
      options: ["Croatia", "Romania", "Bulgaria", "Estonia"],
      correctAnswer: "Croatia",
    },
  ]);
  return (
    <QuestionContext.Provider value={{ questionList, setQuestionList }}>
      {children}
    </QuestionContext.Provider>
  );
}
export default QuestionContextProvider;
