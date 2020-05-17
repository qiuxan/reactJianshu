import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { IconlStyle } from "./statics/iconfont/iconfont";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";

import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <IconlStyle />
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
