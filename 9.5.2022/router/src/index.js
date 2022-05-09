import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/Contact';


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// const routing=(
//   <Router>
//     <div>
//       <h1>Router Demo</h1>
//       <Route path="/" component={Home} />
//       <Route path="about/" component={About} />
//       <Route path="contact/" component={Contact} />
//     </div>
// </Router>
// )
// ReactDOM.render(routing,document.getElementById('root'))