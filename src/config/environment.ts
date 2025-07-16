interface EnvConfig {
    API_URL: string;
    FRONTEND_URL: string;
    STRIPE_PUBLISHABLE_KEY: string;
    BASE_DOMAIN: string;
    BACKEND_PORT: number;
    ENVIRONMENT: string;
    IS_DEVELOPMENT: boolean;
    IS_PRODUCTION: boolean;
}

// Defina diretamente os valores para produção, ignorando a lógica de desenvolvimento/produção por enquanto
export const ENV_CONFIG: EnvConfig = {
    API_URL: "https://saas-backend-8xdw.onrender.com", // <--- FORÇANDO A URL AQUI!
    FRONTEND_URL: "https://saas-estetica-automotiva.vercel.app",
    STRIPE_PUBLISHABLE_KEY: "pk_live_...", // Use sua chave PUBLISHABLE KEY do Stripe de produção aqui
    BASE_DOMAIN: "saas-estetica-automotiva.vercel.app",
    BACKEND_PORT: 443,
    ENVIRONMENT: "production", // Forçando para production
    IS_DEVELOPMENT: false,
    IS_PRODUCTION: true,
};

export const API_BASE_URL = ENV_CONFIG.API_URL;

export const FRONTEND_URL = ENV_CONFIG.FRONTEND_URL;
export const STRIPE_PUBLISHABLE_KEY = ENV_CONFIG.STRIPE_PUBLISHABLE_KEY;

// DEBUG: Logs para verificar o objeto ENV_CONFIG final (coloque no topo do arquivo para garantir)
console.log("VERCEL BUILD DEBUG: API_URL FINAL SENDO USADA:", ENV_CONFIG.API_URL);
console.log("VERCEL BUILD DEBUG: ENVIRONMENT =", ENV_CONFIG.ENVIRONMENT);
console.log("VERCEL BUILD DEBUG: IS_PRODUCTION =", ENV_CONFIG.IS_PRODUCTION);

export default ENV_CONFIG;