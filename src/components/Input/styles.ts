import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-radius: 50px;
  height: 70px;
  text-align: center;
  font-size: 24px;
  color: #000000;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
  :placeholder-shown {
    text-align: center;
    font-size: 18px;
    color: #756c6c99;
  }
`;
export { StyledInput };
