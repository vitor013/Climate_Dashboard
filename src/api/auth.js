const BASE_URL = "http://localhost:3001/api/auth";

export async function login(email, senha) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  });

  return res.json();
}

export async function register(nome, email, senha) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email, senha })
  });

  return res.json();
}

export async function logout() {
  const res = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include"
  });

  return res.json();
}

export async function getUsuarioLogado() {
  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    credentials: "include"
  });

  if (!res.ok) return null;
  return res.json();
}
