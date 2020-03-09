import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

import {
  SearchWrapper,
  Button,
  Addition,
  NavSearch,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchInfo,
  SearchInfoTitle,
  SearchinforSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

const getListArea = show => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          Hot Keywords
          <SearchinforSwitch>Switch Words</SearchinforSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
          <SearchInfoItem>Education</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
};

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">Home Page</NavItem>
        <NavItem className="left">Download App</NavItem>
        <NavItem className="right">Login</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>

        <SearchWrapper>
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch
              // key="transition-group-content"
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>{" "}
          <span className={props.focused ? "iconfont focused" : "iconfont"}>
            &#xe62b;
          </span>
          {getListArea(props.focused)}
        </SearchWrapper>
      </Nav>

      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe6e5; </span>
          Write Something
        </Button>

        <Button className="reg">Register</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
    // focused: state.get("header").get("focused")
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
