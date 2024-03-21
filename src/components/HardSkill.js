import styled from "styled-components";
const HardSkillContainer = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SkillsImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 2%;
`;

const HardSkillComponent = () => {
  return (
    <HardSkillContainer>
      <SkillsImg src="/img/js.png" alt="javascript" />
      <SkillsImg src="/img/typescript.svg" alt="typescript" />
      <SkillsImg src="/img/react.svg" alt="react-js" />
      <SkillsImg src="/img/node.js.svg" alt="node-js" />
      <SkillsImg src="/img/php.svg" alt="php" />
      <SkillsImg src="/img/laravel.svg" alt="laravel" />
      <SkillsImg src="/img/vue.js.svg" alt="vue-js" />
      <SkillsImg src="/img/mysql.svg" alt="mysql" />
    </HardSkillContainer>
  );
};

export default HardSkillComponent;
