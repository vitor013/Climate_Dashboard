import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ClipLoader from "react-spinners/ClipLoader";
import Perfil from "../components/Perfil";
import "./Dashboard.css";

export default function Dashboard() {
  const [cidade, setCidade] = useState("");
  const [buscar, setBuscar] = useState("");
  const [dadosDoClima, setDadosDoClima] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState("clima");
  const [climaLocal, setClimaLocal] = useState(null);

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

  useEffect(() => {
    if (!navigator.geolocation) {
      console.warn("Geolocalização não suportada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(
          `http://localhost:3001/clima-coordenadas?lat=${latitude}&lon=${longitude}`
        )
          .then((res) => res.json())
          .then((data) => {
            setClimaLocal({
              cidade: data.name,
              temp: data.main.temp,
              icon: data.weather[0].icon,
              description: data.weather[0].description,
            });
          })
          .catch((err) => console.error("Erro ao obter clima local:", err));
      },
      (err) => {
        console.warn("Permissão negada para localização:", err);
      }
    );
  }, []);

  return (
    <>
      <Header />

      {abaAtiva === "clima" && climaLocal && (
        <div className="clima-local">
          <strong>{climaLocal.cidade}</strong>
          <br />
          {climaLocal.temp.toFixed(1)} °C
        </div>
      )}

      <div className="dashboard-layout">
        <Sidebar abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} />

        <main className="dashboard-main">
          {abaAtiva === "clima" && (
            <div className="dashboard-content">
              <h1>🌤️ Dashboard de Clima</h1>

              <form onSubmit={handleSubmit} className="city-form">
                <input
                  type="text"
                  placeholder="Digite o nome da cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
                <button type="submit">Buscar</button>
              </form>

              {carregando && (
                <div className="loading">
                  <ClipLoader color="#2563eb" loading={carregando} size={40} />
                </div>
              )}

              {erro && <p className="erro">{erro}</p>}

              {dadosDoClima && (
                <div className="clima-box">
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
            </div>
          )}

          {abaAtiva === "perfil" && <Perfil />}
        </main>
      </div>
    </>
  );
}
