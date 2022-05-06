import React, { Component } from 'react'

export default class SampleDemotwo extends Component {
  render() {
    return (
      <div>
          SampleDemotwo : {this.props.render(true)}
      </div>
    )
  }
}
