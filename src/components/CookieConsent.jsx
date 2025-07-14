import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [aceitou, setAceitou] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      setAceitou(true);
    }
  }, []);

  function aceitarCookies() {
    localStorage.setItem("cookieConsent", "true");
    setAceitou(true);
  }

  if (aceitou) return null;

  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Usamos cookies para melhorar sua experiência. Ao continuar, você aceita nossa política de cookies.
      </p>
      <button style={styles.button} onClick={aceitarCookies}>
        Li e aceito
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#001e2b",
    color: "white",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
  },
  text: {
    margin: 0,
    flex: 1,
  },
  button: {
    marginLeft: "1rem",
    padding: "0.5rem 1rem",
    background: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
