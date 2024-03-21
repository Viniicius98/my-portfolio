import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MyProjectsContainer = styled.div`
  width: 80%;
  height: 70vh;
  margin-top: 5%;
  margin-right: 4%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5%;
  align-items: center;
  ul {
    margin-top: -2%;
    width: 75%;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      width: 80%;
      margin: 5%;
      margin-right: 22%;
      list-style-type: none;

      border-radius: 15%;
      padding: 2%;
      text-align: center;
    }
  }
`;
const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ProjectsComponent = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/Viniicius98/repos`)
      .then((response) => response.json())
      .then((repos) => {
        // Filtrando apenas os repositórios desejados
        const filteredRepos = repos.filter(
          (repo) =>
            repo.name === "Five-Knuckle-Shuffle" ||
            repo.name === "gamer_journey" ||
            repo.name === "super-gestao"
        );
        setRepos(filteredRepos);
      })
      .catch((error) =>
        console.error("Ocorreu um erro ao recuperar os repositórios:", error)
      );
  }, [username]);

  return (
    <MyProjectsContainer>
      <h2>Meus Projetos</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <ProjectLink href={repo.html_url} target="_blank">
              {repo.name}
            </ProjectLink>
          </li>
        ))}
      </ul>
    </MyProjectsContainer>
  );
};

export default ProjectsComponent;
