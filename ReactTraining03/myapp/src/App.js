import logo from './logo.svg';
import './App.css';
import StateAndLifecycle from './StateAndLifecycle';
import JsxProgram from './JsxProgram';
import ConditionalRendering from './ConditionalRendering';
import EventDemo from './EventDemo';
function App() {
  return (
    <div className="App">
      <JsxProgram />
      <ConditionalRendering />
      <StateAndLifecycle />
      <eventHandling />
      <EventDemo />
    </div>
  );
}

export default App;
