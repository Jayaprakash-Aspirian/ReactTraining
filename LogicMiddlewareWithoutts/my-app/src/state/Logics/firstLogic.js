import axios from 'axios';
import { createLogic } from 'redux-logic';


const depositMoney = createLogic({
    type: "deposit", 
    cancelType: "bankrupt", 
    latest: true, 
    process({ getState, action }, dispatch, done) {
      console.log("yes1");
      axios.get('')
        .then(resp => resp.data.amount)
        .then(amount => dispatch({ type: "deposit_success",
                                  payload: amount }))
        .catch(err => {
               console.error(err); 
               dispatch({ type: "deposit_failed", payload: err,
                          error: true })
        })
        .then(() => done());
    
    }
  });

  export default depositMoney;


  // import axios from 'axios';
  // import { createLogic } from 'redux-logic';
  
  
  // const depositMoney = createLogic({
  //     type: "deposit", 
  //     // cancelType: "bankrupt", 
  //     latest: true, 
  
  //     processOptions : {
  //       dispatchReturn:true,
  //       successType:"deposit"
  //       failType : "bankrupt"
  //     }
  //     process({action } ) {
  //       // axios.get('http://localhost:3000/')
  //       //   .then(resp => resp.data.amount)
  //       //   .then(amount => dispatch({ type: "deposit_success",
  //       //                             payload: amount }))
  //       //   .catch(err => {
  //       //          console.error(err); 
  //       //          dispatch({ type: "deposit_failed", payload: err,
  //       //                     error: true })
  //       //   })
  //       //   .then(() => done());
  //       amount => dispatch({ type: "deposit_success", payload: amount })
  
  //     }
  //   });
  
  //   export default depositMoney;