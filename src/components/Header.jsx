import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "#2563eb",
      color: "white",
      alignItems: "center"
    }}>
      <h1>Dashboard de Clima</h1>
      <LogoutButton />
    </header>
  );
}
