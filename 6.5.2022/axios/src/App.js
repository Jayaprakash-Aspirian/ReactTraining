import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import AioaGet from './AioaGet';

function App() {
  return (
    <div>
      <PersonList />
      <PersonAdd />
      <hr />
      <AioaGet />
    </div>
  );
}

export default App;
