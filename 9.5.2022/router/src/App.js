import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './component/Contact';
import About from './About';
import Pen from './component/Pen';
import Shop from './component/Shop';

function App() {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/shop/*' element={<Shop/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/shop/pen/' element={<Pen/>}></Route>
        </Routes>       
      </Router>
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Aboutpage, Homepage } from './component/contents';
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contact';


// function App() {
//   return (
//     < >
//       <Router>
//         <h1>Router Demo</h1>
//         <Route path="/" component={Home} />
//         <Route path="about/" component={About} />
//         <Route path="contact/" component={Contact} />
//       </Router>
//     </ >
//   );
// }

// export default App;
