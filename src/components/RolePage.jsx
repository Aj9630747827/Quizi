import { useContext } from "react";
import { RoleContext } from "../store/RoleContext";
import logo from "../assets/logo.png";

function RolePage() {
  const { role, setRole } = useContext(RoleContext);
  return (
    <div className="role-page d-flex justify-content-center align-items-center">
      <div className="role-card text-center">
        <img src={logo} alt="Logo" className="img-fluid hero-logo" />{" "}
        <h1 className="role-title">Select Your Role</h1>
        <p className="role-subtitle">Choose how you want to continue</p>
        <div className="d-grid gap-3 mt-4">
          <button
            className="role-btn admin-btn"
            onClick={() => setRole("admin")}
          >
            Admin
          </button>

          <button className="role-btn user-btn" onClick={() => setRole("user")}>
            User
          </button>
        </div>
      </div>
    </div>
  );
}

export default RolePage;
