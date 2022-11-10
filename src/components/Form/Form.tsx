import React from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm, Subtitle, Title, TotalBill } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title> Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input placeholder="Enter bill" type="text" />
        <Input placeholder="Enter persons" type="number" />
        <CustomSelect />
      </InputGroup>
      <TotalBill>Total:</TotalBill>
      <Button />
    </StyledForm>
  );
};
