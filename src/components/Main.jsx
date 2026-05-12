import { use, useContext, useState } from "react";
import { TabContext } from "../store/TabContext";
import Hero from "./Home/Hero";
import QuizPage from "./QuizPage";
import { RoleContext } from "../store/RoleContext";
import QuestionForm from "./QuestionForm";
import QuestionContextProvider from "../store/QuestionContext";

function Main() {
  const { role, setRole } = useContext(RoleContext);
  const { currentTab } = useContext(TabContext);

  return (
    <>
      <QuestionContextProvider>
        <div className="container">
          {currentTab === "home" ? (
            <Hero />
          ) : currentTab === "quiz" ? (
            <QuizPage />
          ) : (
            <QuestionForm />
          )}
        </div>
      </QuestionContextProvider>
    </>
  );
}
export default Main;
