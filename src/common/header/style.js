import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .slide-enter {
    width: 160 px;
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240 px;
  }

  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 160 px;
  }
  .iconfont {
    position: absolute;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    right: 5px;
    bottom: 5px;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search"
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;