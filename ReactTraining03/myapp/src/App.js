import logo from './logo.svg';
import './App.css';
import StateAndLifecycle from './StateAndLifecycle';
import JsxProgram from './JsxProgram';
import ConditionalRendering from './ConditionalRendering';
import eventHandling from './eventHandling';

function App() {
  return (
    <div className="App">
      <JsxProgram />
      <ConditionalRendering />
      <StateAndLifecycle />
      <eventHandling />
    </div>
  );
}

export default App;
