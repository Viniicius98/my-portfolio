import { Link } from "react-router-dom";
import styled from "styled-components";

const Navcontainer = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: -1.2%;
  border-bottom: 2px solid black;
  background-color: #125f38;
`;
const Nav = styled.ul`
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Navli = styled.li`
  margin: 2%;
  list-style-type: none;
  font-size: 20px;
  transition: transform 0.3s ease;
  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    font-weight: bold;
    transform: scale(1.2);
  }
`;

const Navbar = () => {
  return (
    <Navcontainer>
      <Nav>
        <Navli>
          <Link to="/home">Home</Link>
        </Navli>
        <Navli>
          <Link to="/sobre">Sobre</Link>
        </Navli>
        <Navli>
          <Link to="/experiencias">Experiências</Link>
        </Navli>
        <Navli>
          <Link to="/hardskills">Hard Skills</Link>
        </Navli>
        <Navli>
          <Link to="/softskills">Soft Skills</Link>
        </Navli>
        <Navli>
          <Link to="/contatos">Contatos</Link>
        </Navli>
      </Nav>
    </Navcontainer>
  );
};
export default Navbar;
