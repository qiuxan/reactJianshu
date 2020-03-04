import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { IconlStyle } from "./statics/iconfont/iconfont";
import Header from "./common/header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconlStyle />
      <Header />
    </Provider>
  );
}

export default App;
