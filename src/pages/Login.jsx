import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Entrar no Painel</h2>
        <LoginForm />

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Não tem conta?{" "}
          <Link to="/Register" style={{ color: "#2563eb", textDecoration: "none" }}>
            Cadastre-se aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
