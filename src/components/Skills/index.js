import styled from "styled-components";

export const HardSkillContainer = styled.div`
  width: 90%;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid white;
  background: #34464b;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
`;
export const SkillsImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 2%;
`;

export const SoftSkillContainer = styled.div`
  width: 100%;
  height: 25vh;
  border: 2px solid white;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
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
  background: #34464b;
`;
