import { createContext, useState } from "react";

export const TabContext = createContext({
  currentTab: "home",
  setCurrentTab: () => {},
});
function TabContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
}
export default TabContextProvider;
