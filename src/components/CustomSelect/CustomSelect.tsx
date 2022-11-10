import React from "react";
import { StyledCustomSelect } from "./styles";

export const CustomSelect = () => {
  return (
    <StyledCustomSelect>
      <option selected value="0">
        10%
      </option>
      <option value="1">15%</option>
      <option value="2">20%</option>
    </StyledCustomSelect>
  );
};
