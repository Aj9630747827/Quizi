import { useContext } from "react";
import { RoleContext } from "../store/RoleContext";
import RolePage from "./RolePage";
import Main from "./Main";

function IsRoleSelected() {
  const { role } = useContext(RoleContext);
  {
    return role === "null" ? <RolePage /> : <Main />;
  }
}
export default IsRoleSelected;
