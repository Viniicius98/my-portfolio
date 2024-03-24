import styled from "styled-components";

export const ApresentationContainer = styled.p`
  width: 90%;
  height: auto;
  font-size: 18px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`;
export const Apresentation = styled.p`
  font-size: 25px;
  font-family: Arial, sans-serif;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 15px;
    line-height: 1.5;
    padding: 2%;
  }
`;
