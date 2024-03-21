import styled from "styled-components";

const MyNameContainer = styled.div`
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

const MyNameComponent = () => {
  return <MyNameContainer>Vinicius Silva</MyNameContainer>;
};

export default MyNameComponent;
