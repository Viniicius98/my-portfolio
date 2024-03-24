import styled from "styled-components";

export const MyNameContainer = styled.div`
  width: 80%;
  height: 10vh;
  margin-right: 4%;
  padding: 2%;
  display: flex;
  margin-top: 5%;
  border: 3px solid black;
  border-radius: 5%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  background: #5f6c6f;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
