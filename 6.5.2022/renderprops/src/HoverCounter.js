import React, { Component } from 'react'

export default class HoverCounter extends Component {
  render() {
    const { count,incrementCount} =this.props
    return (
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    )
  }
}
