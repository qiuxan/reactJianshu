import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";

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
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            Hot Keywords
            <SearchinforSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe606;
              </span>
              Switch Words
            </SearchinforSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
            {/* {list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            })} */}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  };

  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

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
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>{" "}
            <span
              className={
                this.props.focused ? "iconfont focused zoom" : "iconfont zoom"
              }
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
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),

    // focused: state.get("header").get("focused")
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      console.log(list);
      list.size === 0 && dispatch(actionCreators.getList());

      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
