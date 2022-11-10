import React from "react";
import { AppWrapper, Logo, Main } from "./stylesApp";
import logoShape from "./assets/logo-shape.png";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <AppWrapper>
      <Logo>
        <img src={logoShape} alt="logo-shape" />
      </Logo>
      <Main>
        <Form />
      </Main>
    </AppWrapper>
  );
};
