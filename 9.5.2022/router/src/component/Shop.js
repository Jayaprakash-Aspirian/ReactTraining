import React, { Component } from 'react'
import Stationary from './Stationary'
import Pen from './Pen';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

export default class Shop extends Component {
  render() {
    return (
      <div>
          <Stationary />
            {/* <Routes> 
                <Route path='/shop/pen/' element={<Pen/>}></Route>
            </Routes>        */}

      </div>

    )
  }
}
