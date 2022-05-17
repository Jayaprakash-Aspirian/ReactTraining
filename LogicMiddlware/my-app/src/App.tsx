import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { State, store } from './state';
import depositMoney from './state/middleware/logic';

function App() {

  const dispatch = useDispatch()

  // const { depositMoney, withdrawMoney , bankrupt } = bindActionCreators(actionCreators,dispatch);\

  const addMoney = (amount:number) =>{
    dispatch(depositMoney(amount))
  };

  const amount = useSelector((state:State) => state.bank)

  return (
    <div className="App">
      <h1>Demo Bank Account</h1><br />

      <h3>{ amount }</h3>
      <button  onClick={() => addMoney(1000)}> Deposite</button>
      {/* <button  onClick={() => withdrawMoney(500)}> Withdraw</button>
      <button  onClick={() => bankrupt()}> Bankrupt</button> */}
    </div>
  );
}

export default App;