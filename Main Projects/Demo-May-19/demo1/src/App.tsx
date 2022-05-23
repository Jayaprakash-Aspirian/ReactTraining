import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './routes/MainRoutes';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div >
      {/* <div className="container mt-4"> */}
      <div>
          <div className="row">

            <Topbar />

            <div id="main-body">
              {/* <Sidebar /> */}

              <MainRoutes/>
            </div>
          </div>
      </div>
{/*      
      <div className='footer'>
        @
      </div> */}

    </div>
  );
}

export default App;
