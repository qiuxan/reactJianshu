import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlr = this.handleInputBlr.bind(this);
  }
  handleInputFocus() {
    this.setState({
      focused: true
    });
  }
  handleInputBlr() {
    this.setState({
      focused: false
    });
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
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                // key="transition-group-content"
                className={this.state.focused ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlr}
              ></NavSearch>
            </CSSTransition>{" "}
            <span
              className={this.state.focused ? "iconfont focused" : "iconfont"}
            >
              &#xe62b;
            </span>
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
