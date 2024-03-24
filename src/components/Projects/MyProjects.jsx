import { MyProjectsContainer, Project, Title, Text, SubTitle } from ".";

const MyProjectsComponents = () => {
  return (
    <MyProjectsContainer>
      <Project>
        <Title>
          <a href="https://github.com/Viniicius98/Five-Knuckle-Shuffle">
            Five-Knuckle-Shuffle
          </a>
        </Title>
        <Text>
          O Five Knuckle Shuffle é uma ferramenta simples que permite embaralhar
          mensagens rapidamente.
        </Text>
        <SubTitle>Tecnologias utilizadas</SubTitle>
        <>
          <img src="/img/html-5.png" alt="html-5" />
          <img src="/img/css.png" alt="css" />
          <img src="/img/js.png" alt="javascript" />
        </>
      </Project>
      <Project>
        <Title>
          <a href="https://github.com/Viniicius98/gamer_journey">
            Gamer Journey
          </a>
        </Title>
        <Text>
          Gamer Journey é uma aplicação web feita em PHP com Laravel, projetada
          para registrar e organizar os jogos zerados durante a jornada do
          usuário como gamer.
        </Text>
        <SubTitle>Tecnologias utilizadas</SubTitle>
        <>
          <img src="/img/php.svg" alt="php" />
          <img src="/img/laravel.svg" alt="laravel" />
          <img src="/img/sass.svg" alt="sass" />
          <img src="/img/bootstrap.svg" alt="bootstrap" />
          <img src="/img/mysql.svg" alt="mysql" />
        </>
      </Project>
      <Project>
        <Title>
          <a href="https://github.com/Viniicius98/super-gestao">Super Gestão</a>
        </Title>
        <Text>
          O Super Gestão é uma plataforma que melhora processos de gestão,
          permitindo que você crie, edite e exclua suas demandas de forma
          eficiente.
        </Text>
        <SubTitle>Tecnologias utilizadas</SubTitle>
        <>
          <img src="/img/php.svg" alt="php" />
          <img src="/img/laravel.svg" alt="laravel" />
          <img src="/img/css.png" alt="css" />
          <img src="/img/mysql.svg" alt="mysql" />
        </>
      </Project>
    </MyProjectsContainer>
  );
};

export default MyProjectsComponents;
