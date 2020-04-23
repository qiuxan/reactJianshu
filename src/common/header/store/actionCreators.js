import * as actionTypes from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
export const searchFocus = () => ({
  type: actionTypes.SEAECH_FOCUS,
});
export const searchBlur = () => ({
  type: actionTypes.SEAECH_BLUR,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        // console.log(res);
        const data = res.data;
        dispatch(changeList(data.data));
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };
};
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
});
