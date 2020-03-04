const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === "search_focused") {
    return {
      focused: true
    };
  }

  if (action.type === "search_blured") {
    return {
      focused: false
    };
  }
  return state;
};
