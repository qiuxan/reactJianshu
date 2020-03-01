import React, { Component } from "react";
import {
  SearchWrapper,
  Button,
  Addition,
  NavSearch,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem
} from "./style";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }
  render() {
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
            <NavSearch
              className={this.state.focused ? "focused" : ""}
            ></NavSearch>{" "}
            <span className="iconfont">&#xe62b;</span>
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
export default Header;
