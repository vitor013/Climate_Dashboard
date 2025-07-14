import LogoutButton from "./LogoutButton";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Dashboard de Clima</h1>
      <LogoutButton />
    </header>
  );
}
