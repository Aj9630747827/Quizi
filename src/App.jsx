import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import TabContextProvider from "./store/TabContext";

function App() {
  return (
    <>
      <TabContextProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />

          <div className="flex-grow-1">
            <Main />
          </div>

          <Footer />
        </div>
      </TabContextProvider>
    </>
  );
}

export default App;
