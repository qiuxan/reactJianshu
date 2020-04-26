import React from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style";
import { IconlStyle } from "./statics/iconfont/iconfont";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <IconlStyle />
        <Header />
        <BrowserRouter>
          <div>
            <Route path="/" exact render={() => <div>home</div>}></Route>
            <Route
              path="/detail"
              exact
              render={() => <div>detail</div>}
            ></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
