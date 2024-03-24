import styled from "styled-components";

export const ExperiencesContainer = styled.div`
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
  border: 2px solid white;
  background: #34464b;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 40vh;
    overflow-y: auto;
  }
`;
export const Experiences = styled.p`
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
    text-align: center;
  }
`;
