// import logo from './logo.svg';
// import './App.css';
// import Login from './Login';
// import { Router,Route,Routes} from 'react-router-dom';
// import Nav from './Nav';


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Nav />
//         <Routes>
//           <Route path='/login' element={<Login/>}></Route>
//           <Route path='/login' element={<Login/>}></Route>
//         </Routes>       
//       </Router>
//     </div>
//   );
// }

// export default App;



import './App.css';
import { BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom';
import Login from './Login';

function App(){
  return(
    <Router>
      <nav>
        <Link to="" style={{ display: "block", margin: "1rem 0" }}>Home</Link>
        <Link to="/about" style={{ display: "block", margin: "1rem 0" }}>About</Link>
        <Link to="/profile" style={{ display: "block", margin: "1rem 0" }}>Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<signup />} />
        
      </Routes>
      <br />
      <div>Footer</div>
    </Router>
  )
}

export default App;
