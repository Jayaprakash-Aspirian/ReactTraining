import React from 'react';
import './styles.css';
import MainRoutes from './Routes';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="app">
      {/* Sidebar */}

      <Sidebar />
     
      {/* Inner Container */}
      <MainRoutes />

      
      
    </div>
  );
}

export default App;
