import styled from "styled-components";

const MyContactContainer = styled.div`
  width: 80%;
  height: 10vh;
  margin-right: 4%;
  display: flex;
  margin-top: 5%;
  border: 1px solid black;
  border-radius: 5%;
  align-items: center;
  justify-content: center;
`;
const MyContacts = styled.img`
  height: 35px;
  padding: 3%;
  background: white;
  border: 2px solid black;
  border-radius: 50%;
`;
const MyLinks = styled.a`
  margin: 5%;
`;
const Contact = () => {
  return (
    <MyContactContainer>
      <MyLinks
        href="https://www.linkedin.com/in/viniciusssilvMyLinks98/"
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
