import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IsRoleSelected from "./components/IsRoleSelected";
import RoleContextProvider from "./store/RoleContext";
import TabContextProvider from "./store/TabContext";

function App() {
  return (
    <>
      <TabContextProvider>
        <RoleContextProvider>
          <div className="d-flex flex-column min-vh-100">
            <Header />

            <div className="flex-grow-1">
              <IsRoleSelected />
            </div>

            <Footer />
          </div>
        </RoleContextProvider>
      </TabContextProvider>
    </>
  );
}

export default App;
