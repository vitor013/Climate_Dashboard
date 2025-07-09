import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import Perfil from "../components/Perfil";

export default function Dashboard() {
  const [cidade, setCidade] = useState("");
  const [buscar, setBuscar] = useState("");
  const [dadosDoClima, setDadosDoClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState("clima");

  function handleSubmit(e) {
    e.preventDefault();
    if (cidade.trim() !== "") {
      setBuscar(cidade);
      setCidade("");
    }
  }

  useEffect(() => {
    if (!buscar) return;

    setCarregando(true);
    setErro(null);

    fetch(`http://localhost:3001/clima?cidade=${buscar}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Cidade não encontrada");
        }
        return res.json();
      })
      .then((data) => {
        setDadosDoClima(data);
      })
      .catch((err) => {
        setErro(err.message);
        setDadosDoClima(null);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [buscar]);

  return (
    <>
      <Header />

      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
        <Sidebar abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

        <main
          style={{
            padding: "2rem",
            fontFamily: "Arial",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          {abaAtiva === "clima" && (
            <>
              <h1>🌤️ Dashboard de Clima</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Digite o nome da cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  style={{ padding: "0.5rem", marginRight: "0.5rem" }}
                />
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                  Buscar
                </button>
              </form>

              {carregando && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <ClipLoader color="#2563eb" loading={carregando} size={40} />
                </div>
              )}

              {erro && <p style={{ color: "red" }}>{erro}</p>}

              {dadosDoClima && (
                <div style={{ marginTop: "1rem" }}>
                  <h2>
                    {dadosDoClima.name}, {dadosDoClima.sys.country}
                  </h2>
                  <p>🌡️ Temperatura: {dadosDoClima.main.temp} °C</p>
                  <p>🥵 Sensação térmica: {dadosDoClima.main.feels_like} °C</p>
                  <p>☁️ Clima: {dadosDoClima.weather[0].description}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${dadosDoClima.weather[0].icon}@2x.png`}
                    alt={dadosDoClima.weather[0].description}
                  />
                </div>
              )}
            </>
          )}

          {abaAtiva === "perfil" && <Perfil />}
        </main>
      </div>
    </>
  );
}
