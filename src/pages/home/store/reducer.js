import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "hot topic",
      imgUrl: "https://i.stack.imgur.com/adATT.jpg",
    },

    {
      id: 2,
      title: "painting",
      imgUrl:
        "https://image.shutterstock.com/image-photo/brushes-paints-accessories-drawing-260nw-1113880988.jpg",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
