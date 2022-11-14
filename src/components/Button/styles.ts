import styled from "styled-components";
const StyledButton = styled.button`
  width: 100%;
  border: none;
  background-color: #2ed2c9;
  height: 60px;
  font-size: 24px;
  color: #fff;
  :hover,
  :focus {
    cursor: pointer;
    background-color: #24a8a0;
  }
  :disabled {
    background-color: #092a28;
    :hover {
      cursor: default;
    }
  }
`;

export { StyledButton };
