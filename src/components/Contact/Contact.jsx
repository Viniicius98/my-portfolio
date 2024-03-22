import { MyContactContainer, MyContacts, MyLinks } from ".";

const Contact = () => {
  return (
    <MyContactContainer>
      <MyLinks
        href="https://www.linkedin.com/in/viniciusssilva98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MyContacts src="/img/linkedin.svg" alt="linkedin"></MyContacts>
      </MyLinks>
      <MyLinks
        href="https://github.com/Viniicius98"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MyContacts src="/img/github-mark.svg" alt="github" />
      </MyLinks>
      <MyLinks href="mailto:viniciuspa_silva@yahoo.com.br">
        <MyContacts src="/img/email.svg" alt="email" />
      </MyLinks>
    </MyContactContainer>
  );
};

export default Contact;
