import styled from "styled-components";

export const AppWrapper = styled.div`
  position: relative;
  width: 1500px;
  margin: 0 auto;
  background-color: #eaf2f2;
  @media (max-width: 768px) and (min-width: 426px) {
    max-width: 100%;
  }
  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

export const Logo = styled.div`
  position: absoulute;
  left: 0;
  top: 0;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  @media (max-width: 425px) {
    padding-top: 40px;
  }
`;
