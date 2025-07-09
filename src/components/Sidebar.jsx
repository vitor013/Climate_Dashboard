export default function Sidebar({ abaAtiva, setAbaAtiva }) {
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
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "1rem",
  };

  const activeLinkStyle = {
    backgroundColor: "#2563eb",
  };

  return (
    <nav style={sidebarStyle}>
      <h2 style={{ marginBottom: "1rem" }}>Menu</h2>

      <button
        onClick={() => setAbaAtiva("clima")}
        style={
          abaAtiva === "clima"
            ? { ...linkStyle, ...activeLinkStyle }
            : linkStyle
        }
      >
        Dashboard
      </button>

      <button
        onClick={() => setAbaAtiva("perfil")}
        style={
          abaAtiva === "perfil"
            ? { ...linkStyle, ...activeLinkStyle }
            : linkStyle
        }
      >
        Perfil
      </button>
    </nav>
  );
}
