import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      },
      fr: {
        translation: {
          "Welcome to React": "Bienvenue a React et react-i18next"
        }
      }
    },
    // lng: document.querySelector('html').lang,
    fallbackLng: "en",
    detection : { 
      order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
      caches : ['cookie'],
  
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}


const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);