import React, { Fragment } from "react";
import Router from "./router";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import colors from "./styles/colors";

const GlobalStyles = createGlobalStyle`

${styledNormalize}

html {
   box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: ${colors.grey1};
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}

`;

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Router />
    </Fragment>
  );
}

export default App;
