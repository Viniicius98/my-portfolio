import { MyProjectsContainer, Project, Title, Text, SubTitle } from ".";

const MyProjectsComponents = () => {
  return (
    <MyProjectsContainer>
      <Project>
        <Title>Five-Knuckle-Shuffle</Title>
        <Text>
          O Five Knuckle Shuffle é uma ferramenta simples que oferece uma
          maneira rápida de embaralhar suas mensagens, adicionando uma camada de
          diversão e criatividade à sua comunicação. Inspirado no termo
          popularmente conhecido no contexto da luta livre profissional, o
          embaralhador de mensagens proporciona uma abordagem única para
          transformar suas palavras.
        </Text>
        <SubTitle>Tecnologias utilizadas</SubTitle>
        <>
          <img src="/img/html-5.png" alt="html-5" />
          <img src="/img/css.png" alt="css" />
          <img src="/img/js.png" alt="javascript" />
        </>
      </Project>
      <Project>
        <Title>Gamer Journey</Title>
        <Text>
          Gamer Journey é uma aplicação web criada em PHP com Laravel, com o
          objetivo de ser o lugar ideal para registrar e manter um histórico
          organizado de todos os jogos zerados ao longo da sua jornada gamer.
          Este projeto está em constante evolução, e novas funcionalidades estão
          sendo adicionadas para aprimorar a experiência do usuário.
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
        <Title>Super Gestão</Title>
        <Text>
          O Super Gestão é uma plataforma desenvolvida para melhorar e otimizar
          processos de gestão em diversos contextos. Seja você um pequeno
          empreendedor, gerente de equipe ou líder de projeto, o Super Gestão
          oferece ferramentas poderosas para facilitar o acompanhamento e
          aprimoramento das atividades do dia a dia.
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
