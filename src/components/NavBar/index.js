import styled from "styled-components";

export const Navcontainer = styled.div`
  width: 50%;
  height: 15vh;
  border: 2px solid black;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #125f38;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 80%;
  }
`;
export const Nav = styled.ul`
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Navli = styled.li`
  white-space: nowrap;
  margin: 2%;
  list-style-type: none;
  font-size: 35px;
  transition: transform 0.3s ease;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    font-weight: bold;
    transform: scale(1.2);
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    margin-right: 30px;
    font-size: 35px;
  }
`;
