import ImageComponent from "../components/Image";

// import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ApresentationComponent from "../components/Apresentation";
import HardSkillComponent from "../components/HardSkill";
import MyNameComponent from "../components/MyName";
import Contact from "../components/Contact";
import ProjectsComponent from "../components/Projects";
import SoftSkillComponent from "../components/SoftSkill";
import ExperienceComponent from "../components/Experiences";
import MyProjectsComponents from "../components/MyProjects";

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a150e;
`;

const AppCardContact = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  margin-top: -50%;
  margin-right: 2%;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 2%;
  background-color: #282828;
  color: #fff;
`;
const AppCard = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid black;
  border-radius: 2%;
  background-color: #282828;
`;

const ImgContainer = styled.div`
  width: 20%;
  height: 55vh;
  margin-top: 1%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AppCardContent = styled.div`
  width: 75%;
  height: auto;
  margin-top: 1%;
  margin-left: 1%;
  margin-bottom: 2%;
  padding: 1%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h3`
  border-bottom: 1px solid black;
`;

const App = () => {
  return (
    <AppContainer>
      <AppCardContact>
        <ImgContainer>
          <ImageComponent />
        </ImgContainer>
        <MyNameComponent />
        <Contact />
        <ProjectsComponent />
      </AppCardContact>
      <AppCard>
        <AppCardContent>
          <ApresentationComponent />
          <Title>Hard Skills</Title>
          <HardSkillComponent />
          <Title>Soft Skills</Title>
          <SoftSkillComponent />
          <Title>Experiências</Title>
          <ExperienceComponent />
          <Title>Projetos</Title>
          <MyProjectsComponents />
        </AppCardContent>
        {/* <Outlet />  */}
      </AppCard>
    </AppContainer>
  );
};

export default App;
