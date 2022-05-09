import logo from './logo.svg';
import './App.css';
import DetailsGet from './components/DetailsGet';
import DetailsPost from './components/DetailsPost';
import DetailsPut from './components/DetailsPut';
import DetailsDelete from './components/DetailsDelete';
import HandlingError from './components/HandlingError';
import CreateInstance from './components/CreateInstance';
import AsyncAwait from './components/AsyncAwait';


function App() {
  return (
    <div className="App">
      <DetailsGet />
      {/* <hr />
      <DetailsPost />
      <hr />
      <DetailsPut />
      <hr />
      <DetailsDelete />
      <hr />
      <HandlingError />
      <hr />
      <CreateInstance />
      <hr />
      <AsyncAwait /> */}
    </div>
  );
}

export default App;
