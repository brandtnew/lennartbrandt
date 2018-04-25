import React from "react";
import { Router, Link } from "react-static";
import styled, { injectGlobal } from "styled-components";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

injectGlobal`
  body {
    font-family: 'Montserrat', 'sans-serif';
    font-weight: 400;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    align: 'center';
  }
`;

const AppStyles = styled.div``;

const App = () => (
  <Router>
    <AppStyles>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
);

export default hot(module)(App);
