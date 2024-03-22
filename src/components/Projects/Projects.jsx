import React, { useState, useEffect } from "react";
import { ProjectsContainer, ProjectLink } from ".";

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
    <ProjectsContainer>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <ProjectLink href={repo.html_url} target="_blank">
              {repo.name}
            </ProjectLink>
          </li>
        ))}
      </ul>
    </ProjectsContainer>
  );
};

export default ProjectsComponent;
