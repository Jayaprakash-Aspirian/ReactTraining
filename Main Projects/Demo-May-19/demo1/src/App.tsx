import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './routes/MainRoutes';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
          <div className="row">
            <Topbar />
            <Sidebar />
          </div>
      </div>

          
      <MainRoutes/>


    </div>
  );
}

export default App;
