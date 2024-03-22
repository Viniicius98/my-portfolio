import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ApresentationComponent from "../components/Apresentation/Apresentation";
import Navbar from "../components/NavBar/Navbar";
import ImageComponent from "../components/ImageComponent/Image";

const ApresentationContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #144647;
`;
const Apresentation = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  margin-top: 2%;
`;
const ContainerMore = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;
const ContainerOutlet = styled.div`
  width: 100%;
  height: 20vh;
  margin-top: 2%;
`;

const ApresentationScreen = () => {
  return (
    <ApresentationContainer>
      <Apresentation>
        <ImageComponent photo="/img/eu.jpg" />
        <ApresentationComponent />
      </Apresentation>
      <ContainerMore>
        <Navbar />
      </ContainerMore>
      <ContainerOutlet>
        <Outlet />
      </ContainerOutlet>
    </ApresentationContainer>
  );
};

export default ApresentationScreen;
