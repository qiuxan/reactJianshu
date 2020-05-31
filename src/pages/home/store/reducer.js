import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  topicList: [],

  articleList: [],
  recommentList: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),

        recommentList: fromJS(action.recommentList),
      });

    // console.log(action);

    default:
      return state;
  }
};
