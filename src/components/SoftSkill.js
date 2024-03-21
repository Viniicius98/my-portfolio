import styled from "styled-components";

const SoftSkillContainer = styled.div`
  width: 100%;
  height: 25vh;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    li {
      list-style-type: none;
      background-color: #f0f0f0;
      padding: 8px;
      border-radius: 5px;
    }
  }
`;
const SoftSkillComponent = () => {
  return (
    <SoftSkillContainer>
      <ul>
        <li>Proatividade</li>
        <li>Comunicação eficaz</li>
        <li>Habilidade ágil de adaptação</li>
        <li>Priorização da resolução de problemas</li>
        <li>Otimização do tempo</li>
        <li>Trabalho em equipe</li>
        <li>Estudo contínuo</li>
      </ul>
    </SoftSkillContainer>
  );
};

export default SoftSkillComponent;
