import React from "react";
import styled from "styled-components";

const Button = ({ handleClick, type }) => {
  return (
    <ButtonContainer onClick={handleClick} className={type}>
      {type === "submit" ? "Subscribe" : "Reset" }
    </ButtonContainer>
    
  );
};

const ButtonContainer = styled.button`
  border-radius: 0.2rem;
  margin-right: 1rem;
  padding: 4%;
  font-size: large;
`;

export default Button;
