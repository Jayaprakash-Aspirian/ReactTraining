import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import depositMoney from './state/Logics/firstLogic';


function App() {

  const dispatch = useDispatch()


  const addMoney = (amount) =>{

    dispatch(depositMoney(amount))
    console.log("yes2");
  };

  const amount = useSelector((state) => state.bank)

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