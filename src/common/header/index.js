import React, { Component } from "react";
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
  SearchInfoList,
} from "./style";

class Header extends Component {
  getListArea = () => {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Hot Keywords
            <SearchinforSwitch>Switch Words</SearchinforSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch
                // key="transition-group-content"
                className={focused ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>{" "}
            <span
              className={this.props.focused ? "iconfont focused" : "iconfont"}
            >
              &#xe62b;
            </span>
            {this.getListArea()}
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
  }
}

// const Header = this.props => {
//   return (
//   );
// };

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),

    list: state.getIn(["header", "list"]),
    // focused: state.get("header").get("focused")
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
