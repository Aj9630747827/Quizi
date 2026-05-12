import { createContext, useState } from "react";

export const RoleContext = createContext({
  role: "null",
  setRole: () => {},
});
function RoleContextProvider({ children }) {
  const [role, setRole] = useState("null");
  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}
export default RoleContextProvider;
