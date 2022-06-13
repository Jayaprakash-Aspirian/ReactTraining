import axios from "axios";
import { createLogic } from "redux-logic";
import { ActionType } from "../action-types/action-types";

export const adduserLogic = createLogic({
  type: ActionType.USER_FETCH,
  cancelType: ActionType.USER_FETCH_CANCEL,
  latest: true,

  process({ getState, action }, dispatch, done) {
    console.log("start")
    console.log(action)
    console.log(action)
    console.log("end")
    axios
      .get(`http://localhost:3000/users/`)
      .then((resp) => resp.data.polls)
      .then((polls) =>
        dispatch({
          type: ActionType.USER_FETCH_FULLFILLED,
          payload: polls,
        })
      )
      .catch((err) => {
        console.error(err);
        dispatch({
          type: ActionType.USER_FETCH_REJECTED,
          payload: err,
          error: true,
        });
      })
      .then(() => done());
  },
});
