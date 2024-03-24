import styled from "styled-components";

export const MyProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #34464b;
  border: 2px solid white;
  border-bottom-right-radius: 5%;
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    height: 40vh;
    overflow-x: auto;
  }
`;

export const Project = styled.div`
  width: auto;
  height: auto;
  margin: 2%;
  padding: 2%;
  border: 1px solid black;
  border-radius: 5%;
  border: 1px solid white;

  img {
    width: 50px;
    height: 50px;
    margin: 2%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    margin-top: 340px;
    img {
      width: 40px;
      height: 40px;
      margin: 2%;
    }
  }
`;
export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  font-family: Verdana, sans-serif;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 14px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 14px;
  text-align: center;
  font-family: Verdana, sans-serif;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  font-family: Verdana, sans-serif;
`;
//

export const ProjectsContainer = styled.div`
  width: 80%;
  height: 60vh;
  margin-top: 5%;
  margin-right: 4%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 5%;
  align-items: center;
  background: #5f6c6f;

  ul {
    margin-top: 5%;
    width: 75%;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 45%;
    }

    li {
      margin: 5%;
      margin-right: 22%;
      list-style-type: none;
      background: #5f6c6f;
      border-radius: 15%;
      padding: 10%;
      text-align: center;
      border: 2px ridge #0d1111;
      @media (min-width: 320px) and (max-width: 767px) {
        padding: 0%;
        margin-right: 35px;
        font-size: 12px;
      }
    }
  }
`;
export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  font-weight: bold;
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
