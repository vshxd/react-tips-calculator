import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { InputGroup, StyledForm, Subtitle, Title, TotalBill } from "./styles";

export const Form = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [bill, setBill] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [tips, setTips] = useState<string>("10");
  const [total, setTotal] = useState<number>(0);

  const handeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalTips = (+bill * +tips) / 100;
    const totalBill = +bill + totalTips;
    setTotal(+(totalBill / +persons));
  };
  useEffect(() =>
    bill && persons && tips && +bill > 0 && +persons > 0
      ? setIsDisabled(false)
      : setIsDisabled(true)
  );

  return (
    <StyledForm onSubmit={handeSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <InputGroup>
        <Input value={bill} onChange={setBill} placeholder="Enter bill" />
        <Input
          value={persons}
          onChange={setPersons}
          placeholder="Enter persons"
        />
        <CustomSelect value={tips} onSelect={setTips} />
      </InputGroup>
      <TotalBill>Total:{total.toFixed(2)} $</TotalBill>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
