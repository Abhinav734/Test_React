import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Overview from "../Overview";
import Create from "../Create";
import View from "../View";
import { AppWrapper, GlobalStyle } from "../styled";

WebFont.load({
  google: {
    families: ["Open Sans:400,600,700", "sans-serif"],
  },
});

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route path="/create" exact element={<Create />} />
          <Route path="/view" exact element={<View />} />
          <Route path="/" exact element={<Overview />} />
        </Routes>
      </AppWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
