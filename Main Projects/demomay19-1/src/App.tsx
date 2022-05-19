import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">

       <Sidebar />

       <MainRoutes />
       
    </div>
  );
}

export default App;
