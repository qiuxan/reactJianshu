import * as actionTypes from "./constants";

import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEAECH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEAECH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage,
      });

    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);

    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
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
