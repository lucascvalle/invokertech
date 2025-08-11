import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Carrega traduções de um servidor (neste caso, a pasta /public)
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    supportedLngs: ['pt', 'en'],
    fallbackLng: 'pt', // Idioma padrão caso a tradução não seja encontrada
    debug: true, // Ativa logs no console para depuração (útil durante o desenvolvimento)
    interpolation: {
      escapeValue: false, // React já faz o escape para previnir XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho para os arquivos de tradução
    },
  });

export default i18n;
