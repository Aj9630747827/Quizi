import { useContext } from "react";
import logo from "../../assets/logo.png";
import { TabContext } from "../../store/TabContext";
function Hero() {
  const { currentTab, setCurrentTab } = useContext(TabContext);
  return (
    <>
      <div
        class="px-4 py-5 my-5 text-center hero-section"
        style={{ backgroundColor: "#212529" }}
      >
        {" "}
        <div class="col-lg-6 mx-auto">
          {" "}
          <img src={logo} alt="Logo" className="img-fluid hero-logo" />{" "}
          <h1 class="display-5 fw-bold text-white">
            Challenge Your Brain With Fun Quizzes
          </h1>{" "}
          <p class="lead mb-4">
            Test your knowledge across multiple categories, compete with
            friends, track your scores, and learn something new every day.
          </p>{" "}
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
              onClick={() => setCurrentTab("quiz")}
            >
              Start Quiz{" "}
            </button>{" "}
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Explore Categories
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
export default Hero;
