import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos!");
      return;
    }3

    setErro(null);
    setTimeout(() => {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    }, 1500);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", fontFamily: "Arial" }}>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Nome:</label><br />
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            placeholder="Seu nome"
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            placeholder="email@exemplo.com"
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Senha:</label><br />
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            style={{ width: "100%", padding: 8 }}
            placeholder="Senha"
          />
        </div>

        {erro && <p style={{ color: "red" }}>{erro}</p>}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#2563eb",
            border: "none",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: 6
          }}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
