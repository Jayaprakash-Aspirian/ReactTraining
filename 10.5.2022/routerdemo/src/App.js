// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
// import Profile from './mainpages/Profile';
// import LoginOne from './mainpages/LoginOne';

// function App() {
//   return (
//     < >
//     <BrowserRouter> 
//       <Routes>
//         <Route>
//           <Route path="/login" element={<LoginOne />} />
//           <Route path="/profile" element={<Profile />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }

// export default App;


import './App.css';
import { Router,Routes,Route ,Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';

function App(){
  return(
    <Router>
      <nav>
        <Link to="" style={{ display: "block", margin: "1rem 0" }}>Home</Link>
        <Link to="/about" style={{ display: "block", margin: "1rem 0" }}>About</Link>
        <Link to="/profile" style={{ display: "block", margin: "1rem 0" }}>Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile/:username" element={<Profile/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <br />
      <div>Footer</div>
    </Router>
  )
}

export default App;