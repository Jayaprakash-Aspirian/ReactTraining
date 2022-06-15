import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators,State } from './state';

function App() {

  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney , bankrupt } = bindActionCreators(actionCreators,dispatch);
  

  const amount = useSelector((state:State) => state.bank)

  return (
    <div className="App">
      <h1>Demo Bank Account</h1><br />

      <h3>{ amount }</h3>
      <button  onClick={() => depositMoney(1000)}> Depoiste</button>
      <button  onClick={() => withdrawMoney(500)}> Withdraw</button>
      <button  onClick={() => bankrupt()}> Bankrupt</button>
    </div>
  );
}

export default App;
