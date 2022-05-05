import React,{Component} from 'react'


const HocFirstDemo=(DemoComponent)=> {
  return class NewComponet extends Component {
      constructor(){
          super();
          this.state={
              count:0
          }
      }
      render(){
          return(
              <div>
                  <h1>I am from base component</h1>
                  <DemoComponent />
              </div>
          )
        
      }
    }
}



export default HocFirstDemo;