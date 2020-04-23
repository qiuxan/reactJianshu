import * as actionTypes from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEAECH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEAECH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      return state.set("list", action.data);
    default:
      return state;
  }
  // if (action.type === actionTypes.SEAECH_FOCUS) {
  //   return state.set("focused", true);
  // }

  // if (action.type === actionTypes.SEAECH_BLUR) {
  //   return state.set("focused", false);
  // }

  // if (action.type === actionTypes.CHANGE_LIST) {
  //   return state.set("list", action.data);
  // }
  // return state;
};
