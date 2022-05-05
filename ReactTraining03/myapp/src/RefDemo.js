import React from 'react';

class RefDemo extends React.Component {
    constructor(props) {
      super(props);
      this.textInput = React.createRef();    
      this.secondText=React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
      this.focusSecondTextInput=this.focusSecondTextInput.bind(this);
    }
  
    focusTextInput() {
      this.textInput.current.focus();  
    }
    focusSecondTextInput(){
      this.secondText.current.focus();  
    }
    componentDidMount(){
      this.focusTextInput();
    }
    render() {
      return (
        <div>
          <input type="text" ref={this.textInput} /> 
          <input type="text" ref={this.secondText}/>       
          <input type="button" value="Focus the 1st input" onClick={this.focusTextInput} />
          <input type="button" value="Focus the 2nd input" onClick={this.focusSecondTextInput} />
        </div>
      );
    }
}

export default RefDemo;