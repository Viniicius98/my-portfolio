import ImageComponent from "../components/ImageComponent/Image";
import { Analytics } from "@vercel/analytics/react";
// import { Outlet } from "react-router-dom";
import styled from "styled-components";
// import ApresentationComponent from "../components/Apresentation/Apresentation";
import HardSkillComponent from "../components/Skills/HardSkill";
import MyNameComponent from "../components/MyName/MyName";
import Contact from "../components/Contact/Contact";
import ProjectsComponent from "../components/Projects/Projects";
import SoftSkillComponent from "../components/Skills/SoftSkill";
import ExperienceComponent from "../components/Experiences/Experiences";
import MyProjectsComponents from "../components/Projects/MyProjects";
import Dropdown from "../components/Dropdown/Dropdown";
import AboutMeComponent from "../components/AboutMe/AboutMe";

const AppContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: #deefea;
  border-top: 4px solid black;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
`;

const AppCardContact = styled.div`
  width: 25%;
  height: 130vh;
  display: flex;
  margin: 2%;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 2%;
  background: #c8d8db;
  color: #fff;
  @media (min-width: 320px) and (max-width: 767px) {
    height: 100vh;
  }
`;
const AppCard = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 2px solid black;
  border-radius: 2%;
  background: #c8d8db;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 68%;
    height: 100vh;
  }
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
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 100vh;
  }
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

// const Title = styled.h3`
//   border-bottom: 1px solid black;
// `;

const App = () => {
  return (
    <AppContainer>
      <Analytics />
      <AppCardContact>
        <ImgContainer>
          <ImageComponent photo="/img/eu2.jpg" />
        </ImgContainer>
        <MyNameComponent />
        <Contact />
        <ProjectsComponent />
      </AppCardContact>

      <AppCard>
        <AppCardContent>
          <AboutMeComponent />
          <Dropdown title="Hard Skills">
            <HardSkillComponent />
          </Dropdown>
          <Dropdown title="Soft Skills">
            <SoftSkillComponent />
          </Dropdown>
          <Dropdown title="Experiências">
            <ExperienceComponent />
          </Dropdown>
          <Dropdown title="Projetos">
            <MyProjectsComponents />
          </Dropdown>
        </AppCardContent>

        {/* <Outlet />  */}
      </AppCard>
    </AppContainer>
  );
};

export default App;
