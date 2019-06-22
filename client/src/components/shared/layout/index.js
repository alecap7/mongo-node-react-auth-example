import React from "react";
import Nav from "./nav";
import { Wrapper, Header, Main, Footer } from "./styles";

const Layout = ({ children }) => (
  <Wrapper>
    <Header>
      <Nav />
    </Header>
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

export default Layout;
