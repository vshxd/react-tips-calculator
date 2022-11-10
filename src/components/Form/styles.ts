import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  gap: 45px;
  width: 95%;
  max-width: 331px;
  @media (max-width: 768px) and (min-width: 426px) {
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 17px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000000;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 24px;
  color: rgba(117, 108, 108, 0.57);
`;

const TotalBill = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;
export { StyledForm, InputGroup, Title, Subtitle, TotalBill };
