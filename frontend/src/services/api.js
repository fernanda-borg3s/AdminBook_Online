import axios from "axios";

const api = axios.create({
  // Tenta ler do arquivo .env, senão usa a url configurada
  baseURL: import.meta.env.API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Útil para debugging ou para injetar tokens de autenticação automaticamente
api.interceptors.request.use(
  (config) => {
    // console.log(`Tentando conectar em: ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;