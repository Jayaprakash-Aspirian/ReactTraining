import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection : { 
      order: ['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
      caches : ['cookie'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json'
    },
    react : { useSuspese:false },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('welcome to react')}</h2>;
}


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);