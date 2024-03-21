import styled from "styled-components";

const AboutMe = styled.text`
  font-size: 20px;
`;

const AboutMeComponent = () => {
  return (
    <div>
      <h1>Sobre Mim</h1>
      <AboutMe>
        Apaixonado por jogos, amante do heavy metal e entusiasta de tecnologias.
      </AboutMe>
    </div>
  );
};

export default AboutMeComponent;
