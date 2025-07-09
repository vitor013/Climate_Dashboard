import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Perfil() {
  const { usuario, logout } = useAuth();

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleTrocarSenha(e) {
    e.preventDefault();

    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setMensagem("A nova senha e confirmação não conferem.");
      return;
    }

    setMensagem("Senha alterada com sucesso!");
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  }

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2>Perfil do Usuário</h2>

      {usuario ? (
        <>
          <p>
            <strong>Token:</strong> {usuario.token}
          </p>

          <h3>Trocar senha</h3>
          <form onSubmit={handleTrocarSenha}>
            <div>
              <label>Senha Atual:</label>
              <br />
              <input
                type="password"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.3rem",
                  marginBottom: "0.5rem",
                }}
              />
            </div>
            <div>
              <label>Nova Senha:</label>
              <br />
              <input
                type="password"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.3rem",
                  marginBottom: "0.5rem",
                }}
              />
            </div>
            <div>
              <label>Confirmar Nova Senha:</label>
              <br />
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.3rem",
                  marginBottom: "0.5rem",
                }}
              />
            </div>
            <button type="submit" style={{ padding: "0.5rem 1rem" }}>
              Alterar Senha
            </button>
          </form>

          {mensagem && (
            <p style={{ marginTop: "0.5rem", color: "green" }}>{mensagem}</p>
          )}

          <button
            onClick={logout}
            style={{
              marginTop: "2rem",
              backgroundColor: "#e53e3e",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Sair
          </button>
        </>
      ) : (
        <p>Usuário não autenticado.</p>
      )}
    </div>
  );
}
