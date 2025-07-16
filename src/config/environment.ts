const VITE_STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY; // Mantenha, se a chave Stripe estiver em .env no Vercel

// Remova ou ajuste as linhas de DEBUG relacionadas a 'from .env' se não houver .env
// console.log("ENV DEBUG: VITE_BASE_DOMAIN from .env =", import.meta.env.VITE_BASE_DOMAIN); // Remova esta linha
// console.log("ENV DEBUG: VITE_BACKEND_PORT from .env =", import.meta.env.VITE_BACKEND_PORT);   // Remova esta linha
console.log("ENV DEBUG: VITE_STRIPE_PUBLISHABLE_KEY from .env =", VITE_STRIPE_PUBLISHABLE_KEY); // Ajuste para usar a variável local


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

// NOVO: Defina a URL da API para usar a variável de ambiente do Vite
// O Vite automaticamente injeta variáveis de ambiente que começam com VITE_
export const ENV_CONFIG: EnvConfig = {

    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000', 
    FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || "http://localhost:8080", 
    STRIPE_PUBLISHABLE_KEY: VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_...", 
    BASE_DOMAIN: import.meta.env.VITE_BASE_DOMAIN || 'meusaas.com.br', 
    BACKEND_PORT: parseInt(import.meta.env.VITE_BACKEND_PORT || '3000', 10), 
    ENVIRONMENT: import.meta.env.MODE || 'development', 
    IS_DEVELOPMENT: import.meta.env.DEV,
    IS_PRODUCTION: import.meta.env.PROD,
};

// Remova os console.logs antigos de debug que não apareceram,
// mas pode deixar este para ver se funciona.
console.log("VERCEL BUILD DEBUG: API_URL LIDA DO AMBIENTE:", ENV_CONFIG.API_URL);

export const API_BASE_URL = ENV_CONFIG.API_URL;
export const FRONTEND_URL = ENV_CONFIG.FRONTEND_URL;
export const STRIPE_PUBLISHABLE_KEY = ENV_CONFIG.STRIPE_PUBLISHABLE_KEY;

export default ENV_CONFIG;