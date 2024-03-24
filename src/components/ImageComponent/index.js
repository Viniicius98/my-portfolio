import styled from "styled-components";

export const Img = styled.img`
  margin-top: 2%;
  width: 250px; /* Largura igual à altura */
  height: 250px; /* Altura */
  border: 1px solid #999999;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 50%;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 90px;
    height: 200px;
    border-radius: 0;
  }
`;
