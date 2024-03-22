import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const ErrorMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #dc3545;
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Essa página não existe</ErrorMessage>
    </ErrorContainer>
  );
};

export default ErrorPage;
