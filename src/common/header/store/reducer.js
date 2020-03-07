import * as actionTypes from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEAECH_FOCUS) {
    return state.set("focused", true);
  }

  if (action.type === actionTypes.SEAECH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};
