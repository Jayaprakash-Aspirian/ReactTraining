import React, { Component } from 'react'

export default class RenderPropsComponent extends Component {
  render() {
    return (
      <div>        
        <h2>Child Component</h2>
        {this.props.render()}
      </div>
    )
  }
}
