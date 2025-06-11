module.exports = function (api) {
    api.cache(true); // Permite que o Babel cacheie a configuração para melhor desempenho
    return {
        presets: ['babel-preset-expo'], // O preset padrão para projetos Expo
        plugins: [
            // Plugin para o react-native-dotenv. Isso permite que você importe variáveis do .env
            ["module:react-native-dotenv", {
                "envName": "APP_ENV", // Nome do ambiente (opcional, pode ser padrão)
                "moduleName": "@env", // Onde suas variáveis de ambiente serão importadas (ex: import { MY_VAR } from '@env';)
                "path": ".env",      // Caminho para o seu arquivo .env
                "blocklist": null,   // Variáveis para ignorar
                "allowlist": null,   // Variáveis para permitir (se blocklist estiver null)
                "safe": false,       // Se true, vai gerar um erro se alguma variável não estiver no .env
                "allowUndefined": true, // Permite que variáveis indefinidas sejam undefined em vez de gerar um erro
                "verbose": false     // Mostra mensagens de depuração
            }]
        ]
    };
};
  