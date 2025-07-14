import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="form-container">
          <h2 className="title">Login</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="subtitle">Use sua conta</p>

          <LoginForm />

          <p className="register-text">
            Não tem conta?{" "}
            <Link to="/Register" className="register-link">
              Cadastre-se aqui
            </Link>
          </p>
        </div>

        <div className="overlay-container">
          <h2 className="overlay-title">Bem-vindo!</h2>
          <p className="overlay-text">
            Preencha seus dados pessoais e comece sua jornada com a gente.
          </p>
          <Link to="/register">
            <button className="ghost-button">Inscreva-se</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
