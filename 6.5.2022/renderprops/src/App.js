import logo from './logo.svg';
import './App.css';
import SampleRenderProps from './SampleRenderProps';
import SampleDemoone from './SampleDemoone';
import SampleDemotwo from './SampleDemotwo';
import React,{ Component } from 'react';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Render Props on APP</h1>
        <SampleRenderProps name={ () => "react"}/>
        <SampleDemoone name={(isLoggedIn)=>  isLoggedIn ? 'react' :"no user"}/>
        <SampleDemotwo render={(isLoggedIn)=>  isLoggedIn ? 'react' :"no user"}/>
        <hr />

        {/* demo1 */}

        <Counter
          render={(count,incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter 
          render={(count,incrementCount) => (
              <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        />
        
        

        {/* demo2 */}

        {/* <Counter>{(count,incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount} />
          )}</Counter> */}


      </div>

    )
  }
}

export default App;
