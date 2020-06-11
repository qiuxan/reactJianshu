import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import List from "./components/List";

import { actionCreator } from "./store";

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F70148525%2F330398487425%2F1%2Foriginal.20190828-041400?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C1920%2C960&s=868a1520a578bb7c349672aa1c962128"
            alt=""
          ></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>

        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>Top</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreator.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreator.toggleTopShow(true));
    } else {
      dispatch(actionCreator.toggleTopShow(false));
    }
  },
});

export default connect(mapState, mapDispatch)(Home);
