import "./Sidebar.css";

export default function Sidebar({ abaAtiva, setAbaAtiva }) {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Menu</h2>

      <button
        className={`sidebar-btn ${abaAtiva === "clima" ? "active" : ""}`}
        onClick={() => setAbaAtiva("clima")}
      >
        Dashboard
      </button>

      <button
        className={`sidebar-btn ${abaAtiva === "perfil" ? "active" : ""}`}
        onClick={() => setAbaAtiva("perfil")}
      >
        Perfil
      </button>
    </nav>
  );
}
