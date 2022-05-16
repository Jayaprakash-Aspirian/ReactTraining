import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators,State } from './state';

function App() {

  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney , bankrupt } = bindActionCreators(actionCreators,dispatch);

//   import { createLogic } from 'redux-logic';

// const validationLogic = createLogic({
//   type: ADD_USER,
//   validate({ getState, action }, allow, reject) {
//     const user = action.payload;
//     if (!getState().users[user.id]) { // can also hit server to check
//       allow(action);
//     } else {
//       reject({ type: USER_EXISTS_ERROR, payload: user, error: true })
//     }
//   }
// });


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
