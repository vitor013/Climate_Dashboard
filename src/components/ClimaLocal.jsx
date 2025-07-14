import { useEffect, useState } from "react";
import "./ClimaLocal.css";

export default function ClimaLocal() {
  const [localClima, setLocalClima] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const res = await fetch(
            `http://localhost:3001/clima-coordenadas?lat=${lat}&lon=${lon}`
          );
          const data = await res.json();
          setLocalClima(data);
        } catch (error) {
          console.error("Erro ao buscar clima local", error);
        }
      },
      (error) => {
        console.error("Erro na geolocalização", error);
      }
    );
  }, []);

  if (!localClima) return null;

  return (
    <div className="clima-local">
      <strong>{localClima.name}</strong>
      <span>{localClima.main.temp.toFixed(1)} °C</span>
      <img
        src={`https://openweathermap.org/img/wn/${localClima.weather[0].icon}.png`}
        alt={localClima.weather[0].description}
      />
    </div>
  );
}
