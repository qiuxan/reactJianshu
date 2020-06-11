import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: "Donald Trump",
  content:
    '<img src="https://media.vanityfair.com/photos/5d4db35f0f044a0009664e82/master/w_2560%2Cc_limit/trump-el-paso-baby.jpg" alt="" /> <p> <b> Donald John Trump is the 45th and current president of the United States. </b> Before entering politics, he was a businessman and television personality. Trump was born and raised in Queens, a borough of New York City, and received a bachelors degree in economics from the Wharton School </p> <p> Donald John Trump is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality. Trump was born and raised in Queens, a borough of New York City, and received a bachelors degree in economics from the Wharton School </p> <p> Donald John Trump is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality. Trump was born and raised in Queens, a borough of New York City, and received a bachelors degree in economics from the Wharton School </p> <p> Donald John Trump is the 45th and current president of the United States. Before entering politics, he was a businessman and television personality. Trump was born and raised in Queens, a borough of New York City, and received a bachelors degree in economics from the Wharton School </p>',
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
