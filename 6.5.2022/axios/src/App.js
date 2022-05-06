import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';

function App() {
  return (
    <div>
      <PersonList />
      <PersonAdd />
    </div>
  );
}

export default App;
