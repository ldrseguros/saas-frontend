import { ENV_CONFIG } from '@/config/environment';

export const getSubdomainFromUrl = (): string | null => {
  const hostname = window.location.hostname;
  const baseDomain = ENV_CONFIG.BASE_DOMAIN; // Ex: "meusaas.com.br"

  // Remover porta, se existir
  const cleanHostname = hostname.split(":")[0];

  // Verifica se é localhost
  if (cleanHostname === "localhost" || cleanHostname === "127.0.0.1") {
    return "esteticaas"; // ou o tenant padrão de dev
  }

  // Verifica se o hostname termina com o domínio base
  if (cleanHostname.endsWith(baseDomain)) {
    const parts = cleanHostname.replace(`.${baseDomain}`, "").split(".");
    const subdomain = parts.join(".");
    if (subdomain && subdomain !== "www") {
      return subdomain;
    }
  }

  return null;
};

export const buildTenantLoginUrl = (subdomain: string): string => {
    const protocol = window.location.protocol;
    const port = window.location.port ? `:${window.location.port}` : '';
    const baseDomain = ENV_CONFIG.BASE_DOMAIN;

    if (ENV_CONFIG.IS_PRODUCTION) {
        return `${protocol}//${subdomain}.${baseDomain}/login`;
    } else {
        return `${protocol}//${subdomain}.${baseDomain}${port}/login`;
    }
};