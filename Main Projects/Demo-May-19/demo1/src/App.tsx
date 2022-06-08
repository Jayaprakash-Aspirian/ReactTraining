import { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar";
import { loadingMarkup } from "./loading-markup";
import MainRoutes from "./routes/mainRoutes";
import "./translation";
import configureStore from "./store/store";

function App() {
  return (
    <>
      <Suspense fallback={loadingMarkup}>
        <Provider store={configureStore()}>
          <Router>
            <div className="row">
              <Topbar />
              <div id="main-body">
                <MainRoutes />
              </div>
            </div>
          </Router>
        </Provider>
      </Suspense>
    </>
  );
}

export default App;
