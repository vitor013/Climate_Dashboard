import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as loginAPI } from "../api/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await loginAPI(email, senha);

      if (resposta.msg === "Login realizado com sucesso") {
        login("usuario-autenticado");
        navigate("/dashboard");
      } else {
        setErro(resposta.msg || "Erro ao fazer login");
      }
    } catch (err) {
      setErro("Erro na conexão com o servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {erro && <p className="erro">{erro}</p>}
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
