import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LogoutButton.css";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <button className="logout-button" onClick={handleLogout}>
      Sair
    </button>
  );
}
