import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <button onClick={handleLogout} style={{
      padding: "0.5rem 1rem",
      backgroundColor: "#ef4444",
      border: "none",
      color: "white",
      borderRadius: "6px",
      cursor: "pointer"
    }}>
      Sair
    </button>
  );
}
