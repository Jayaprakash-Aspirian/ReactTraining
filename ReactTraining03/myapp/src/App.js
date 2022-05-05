import logo from './logo.svg';
import './App.css';
import StateAndLifecycle from './StateAndLifecycle';
import JsxProgram from './JsxProgram';
import ConditionalRendering from './ConditionalRendering';
// import EventDemo from './EventDemo';
import ListsAndKeys from './ListsAndKeys';
import FormDemo from './FormDemo';
import FormMultipleField from './FormMultipleField';
import FraagmentsDemo from './FragmentsDemo';
import RefDemo from './RefDemo';
import ForwardRef from './ForwardRef';

function App() {
  const posts = [
    {id: 1, title: 'The Book1', content: 'XYZ'},
    {id: 2, title: 'The Book2', content: 'ABC'}
  ];
  return (
    <div className="App">
      {/* <JsxProgram />
      <ConditionalRendering />
      <StateAndLifecycle />
      <eventHandling />
      <br />
      <hr />
      <ListsAndKeys posts={posts} />
      <FormMultipleField />
      <FormDemo /> */}
      <FraagmentsDemo posts={posts} />
      {/* <RefDemo /> */}
      {/* <ForwardRef /> */}
    </div>
  );
}

export default App;
