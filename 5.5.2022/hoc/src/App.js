import logo from './logo.svg';
import './App.css';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import HocFirstDemo from './HocFirstDemo';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import HocCounter from './HocCounter';
import ComponentDidMountDemo from './ComponentDidMount';

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
      {/* <UpdatedClickCounter  name="Kavin"/>
      <UpdatedHoverCounter /> */}
      <div className='horedstr'> </div>
      <div className='ukflag'></div>
      <ComponentDidMountDemo />

    </div>
  ); 
}

export default App;
