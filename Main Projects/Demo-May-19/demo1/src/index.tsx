import React,{ Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'fr'],
//     fallbackLng: 'en',
//     debug: false,
//     detection: {
//       order: ['path', 'cookie', 'htmlTag'],
//       caches: ['cookie'],
//     },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/translation.json',
//     },
//   })


// const loadingMarkup = (
//   <div className="py-4 text-center">
//     <h3>Loading..</h3>
//   </div>
// )

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();