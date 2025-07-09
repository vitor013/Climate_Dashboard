import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const sidebarStyle = {
    width: "220px",
    height: "100vh",
    backgroundColor: "#1e293b",
    color: "white",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    marginBottom: "0.5rem",
    borderRadius: "4px",
  };

  const activeLinkStyle = {
    backgroundColor: "#2563eb",
  };

  return (
    <nav style={sidebarStyle}>
      <h2 style={{ marginBottom: "1rem" }}>Menu</h2>

      <NavLink
        to="/dashboard"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/perfil"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
        }
      >
        Perfil
      </NavLink>

      <NavLink
        to="/configuracoes"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
        }
      >
        Configurações
      </NavLink>
    </nav>
  );
}
