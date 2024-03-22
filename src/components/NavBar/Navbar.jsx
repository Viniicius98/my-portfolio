import { Link } from "react-router-dom";
import { Navcontainer, Nav, Navli } from ".";
const Navbar = () => {
  return (
    <Navcontainer>
      <Nav>
        <Navli>
          <Link to="/home">Saber Mais</Link>
        </Navli>
      </Nav>
    </Navcontainer>
  );
};
export default Navbar;
