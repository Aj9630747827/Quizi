import { useContext } from "react";
import { TabContext } from "../store/TabContext";
import { RoleContext } from "../store/RoleContext";

function Header() {
  const { setCurrentTab } = useContext(TabContext);
  const { role } = useContext(RoleContext);
  return (
    <>
      <div className="container header" style={{ width: "100vw" }}>
        {" "}
        <header className="d-flex justify-content-center py-3">
          {" "}
          <ul className="nav nav-pills">
            {" "}
            <li className="nav-item header-item">
              <a
                href="#"
                className="nav-link text-white"
                aria-current="page"
                onClick={() => setCurrentTab("home")}
              >
                Home
              </a>
            </li>{" "}
            {role === "null" ? (
              <></>
            ) : (
              <li className="nav-item header-item">
                <a
                  href="#"
                  className="nav-link text-white"
                  onClick={() => setCurrentTab("quiz")}
                >
                  Start Quiz
                </a>
              </li>
            )}
            {role === "admin" && (
              <li className="nav-item header-item">
                <a
                  href="#"
                  className="nav-link text-white"
                  onClick={() => setCurrentTab("addQuestion")}
                >
                  Add Question
                </a>
              </li>
            )}
          </ul>{" "}
        </header>{" "}
      </div>
    </>
  );
}
export default Header;
