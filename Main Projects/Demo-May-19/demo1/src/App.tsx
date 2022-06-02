import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Topbar from './components/Topbar';
import { loadingMarkup } from "./loading-markup";
import MainRoutes from './routes/MainRoutes';
// import { store } from "./store";

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import { store } from "./store/store";
import Sidebar from "./components/Sidebar";
import WithPermission from "./routes/WithPermission";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

function App() {
  
  
  return (
    < >
     <Suspense fallback={loadingMarkup}>
      <Provider store={store}>
       <Router>
        <div className="row">
          <Topbar />
          <div id="main-body">
          {/* <WithPermission roleRequired="USER" message="">
            <Sidebar />
          </WithPermission> */}
            <MainRoutes/>
          </div>
        </div>
       </Router>
      </Provider>
     </Suspense>
    </ >
  );
}

export default App;
