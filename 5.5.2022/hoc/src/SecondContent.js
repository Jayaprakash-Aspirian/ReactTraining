import React, { Component } from 'react'
import HocFirstDemo from './HocFirstDemo';

export class SecondContent extends Component {
  render() {
    return (
      <div>SecondContent</div>
    )
  }
}
export default HocFirstDemo(SecondContent);
