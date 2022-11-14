import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, placeholder, onChange }: IProps) => {
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={handleValue}
      type="number"
    />
  );
};
