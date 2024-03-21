import styled from "styled-components";
const ExperiencesContainer = styled.div`
  width: 90%;
  height: auto;
  h3 {
    width: 90%;
    margin-left: 5%;
    border-bottom: 1px solid #000;
  }
  h5 {
    width: 90%;
    margin-left: 5%;
    border-bottom: 1px solid #000;
  }
`;
const Experiences = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const ExperienceComponent = () => {
  return (
    <ExperiencesContainer>
      <Experiences>
        <h3>Estágio de Desenvolvimento de Software</h3>
        <h5> Escola da Magistratura do Estado do Rio de Janeiro</h5>

        <p>
          <strong>Principais Atividades:</strong>
          <br />
          - Prestação de suporte aos usuários, garantindo a resolução eficiente
          de suas demandas.
          <br />
          - Experiência sólida no gerenciamento de banco de dados SQL para
          otimização e manipulação eficaz de dados.
          <br />
          - Desenvolvimento de sistemas, principalmente utilizando a linguagem
          PHP, com aquisição de conhecimentos adicionais em JavaScript,
          TypeScript e Node.js.
          <br />- Contribuição ativa para a criação de soluções funcionais e
          inovadoras.
        </p>
      </Experiences>
    </ExperiencesContainer>
  );
};

export default ExperienceComponent;
