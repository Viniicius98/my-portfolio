import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const DropdownContent = styled.div`
  width: 550px;
  margin-top: -5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 550px;
  margin: 5%;
  background: #34464b;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #141a1a;
    color: #fff;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 70%;
  }
`;
