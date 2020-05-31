import axios from "axios";
import * as constants from "./constants";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommentList: result.recommentList,
  articleList: result.articleList,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      // console.log(result);
      dispatch(changeHomeData(result));
    });
  };
};
