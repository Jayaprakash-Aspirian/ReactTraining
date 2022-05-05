import React, { Component } from 'react'
import HocFirstDemo from './HocFirstDemo'

class FirstContent extends Component {
  render() {
    return (
          <h1>FirstContent</h1>
    )
  }
}

export default HocFirstDemo(FirstContent);
