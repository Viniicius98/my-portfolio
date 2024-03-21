import styled from "styled-components";
const ApresentationContainer = styled.p`
  width: 90%;
  height: 20vh;
  font-size: 20px;
  font-family: Arial, sans-serif;
  color: #ffffff;
  text-align: center;
`;
const Apresentation = styled.p`
  font-size: 20px;
  font-family: Arial, sans-serif;
`;

const ApresentationComponent = () => {
  return (
    <ApresentationContainer>
      <Apresentation>
        Olá! Sou Vinícius Silva, recém-graduado em Ciência da Computação,
        desenvolvedor Full-stack e gamer nas horas vagas. Abaixo você encontrará
        mais detalhes sobre minhas habilidades e experiência. Fique à vontade
        para conhecer um pouco mais sobre mim!
      </Apresentation>
    </ApresentationContainer>
  );
};

export default ApresentationComponent;
