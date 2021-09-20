import React from "react";
import styled from "styled-components";

const Confirmation = () => {
  return (
    <Container>
      <h4>You have successfully subscribed to the newsletter.</h4>
      <h3>Thank you!</h3>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  min-width: fit-content;
  height: 10%;
  min-height: fit-content;
  background-color: #f8f3f37d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 16px 1px rgb(174 164 164);
  border: none;
  padding: 3%;
  text-align: center;
`;

export default Confirmation;
