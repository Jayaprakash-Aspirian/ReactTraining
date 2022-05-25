import axios from 'axios';
import { createLogic } from 'redux-logic';


export const userLogic= createLogic({
    type:"usersdata" , 
    cancelType: "", 
    latest: true, 
    process({ getState, action }, dispatch, done) {
      console.log("yes1");
      axios.get('http://localhost:3000/users')
        .then(resp => resp.data.user)
        .then(amount => dispatch({ type: "deposit_success",
                                  payload: amount }))
        .catch(err => {
               console.error(err); 
               dispatch({ type: "deposit_failed", payload: err  `qsxdfc`,
                          error: true })
        })
        .then(() => done());
    
    }
    
  });


// const usernLogic = createLogic({
//     type: ADD_USER,
//     validate({ getState, action }, allow, reject) {
//       const user = action.payload;
//       if (!getState().users[user.id]) { // can also hit server to check
//         allow(action);
//       } else {
//         reject({ type: USER_EXISTS_ERROR, payload: user, error: true })
//       }
//     }
//   });

//   export default userLogic;
