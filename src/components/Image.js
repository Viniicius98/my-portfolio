import styled from "styled-components";

const Img = styled.img`
  margin-top: 2%;
  height: 250px;
  border: 2px solid black;
  border-radius: 3%;
`;

const ImageComponent = () => {
  return <Img src="/img/eu2.jpg" alt="Minha foto" />;
};

export default ImageComponent;
