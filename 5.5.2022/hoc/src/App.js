import logo from './logo.svg';
import './App.css';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import HocFirstDemo from './HocFirstDemo';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import HocCounter from './HocCounter';

const CallComponent=HocFirstDemo(FirstContent)

const UpdatedClickCounter = HocCounter(ClickCounter)
const UpdatedHoverCounter = HocCounter(HoverCounter)

function App() {
  return (
    <div class Name="App">
      {/* <FirstContent />
      <SecondContent /> */}
      <hr />
      {/* <CallComponent /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      <hr />
      <UpdatedClickCounter  name="Kavin"/>
      <UpdatedHoverCounter />
    </div>
  ); 
}

export default App;
