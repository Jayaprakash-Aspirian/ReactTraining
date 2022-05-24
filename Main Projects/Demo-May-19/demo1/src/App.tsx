import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MainRoutes from './routes/MainRoutes';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  const myStyle={ backgroundImage:  "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fpayment&psig=AOvVaw3tNfrKC1rLFCwy7yTYqRJb&ust=1653409958184000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCLDwrJ6G9vcCFQAAAAAdAAAAABAO')",
    
};
  return (
    <div style={myStyle}>
      {/* <div className="container mt-4"> */}
      <div>
          <div className="row" >

            <Topbar />

            <div id="main-body" >
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
