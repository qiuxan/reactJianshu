import React from "react";
import { GlobalStyle } from "./style";
import { IconlStyle } from "./statics/iconfont/iconfont";
import Header from "./common/header";

function App() {
  return (
    <div>
      <GlobalStyle />
      <IconlStyle />
      <Header />
    </div>
  );
}

export default App;
