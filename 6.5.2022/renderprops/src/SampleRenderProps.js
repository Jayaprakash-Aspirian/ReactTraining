import React, { Component } from 'react'
import RenderPropsComponent from './RenderPropsComponent'

export default class SampleRenderProps extends Component {
  render() {
    return (
        
        <RenderPropsComponent
        render={() => {
          return (
            <div>
              
              <h3> SampleRenderProps ,Name is {this.props.name(false)}</h3>
            </div>
          )
        }}   />
    )
  }
}

