import { useContext } from "react";
import { TabContext } from "../store/TabContext";

function Header() {
  const { setCurrentTab } = useContext(TabContext);
  return (
    <>
      <div class="container header" style={{ width: "100vw" }}>
        {" "}
        <header class="d-flex justify-content-center py-3">
          {" "}
          <ul class="nav nav-pills">
            {" "}
            <li class="nav-item header-item">
              <a
                href="#"
                class="nav-link text-white"
                aria-current="page"
                onClick={() => setCurrentTab("home")}
              >
                Home
              </a>
            </li>{" "}
            <li class="nav-item header-item">
              <a
                href="#"
                class="nav-link text-white"
                onClick={() => setCurrentTab("quiz")}
              >
                Start Quiz
              </a>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </>
  );
}
export default Header;
