import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import "./Register.css";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }
    setErro(null);

    try {
      const resposta = await register(email, senha, nome);

      if (resposta.msg === "Usuário registrado com sucesso") {
        navigate("/login");
      } else {
        setErro(resposta.msg || "Erro ao cadastrar");
      }
    } catch (err) {
      setErro("Erro na conexão com o servidor");
    }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@exemplo.com"
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
            />
          </label>

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
