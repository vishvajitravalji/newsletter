import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const defaultState = { name: "", company: "", email: "", validate: false };

const NewsletterForm = () => {
  const formHistory = useHistory();
  const [formValue, setFormValue] = useState(defaultState);
  const [error, setError] = useState("");

  const handleChange = (val, item) => {
    setFormValue({ ...formValue, [item]: val });

    if (item === "validate") {
      setFormValue({ ...formValue, [item]: !formValue.validate });
    }
  };

  const validateName = () => {
    return formValue.name !== "";
  };

  const validateCompany = () => {
    return formValue.company !== "";
  };

  const validateEmail = () => {
    const emailBreakouts = formValue.email.split("@");
    return (
      emailBreakouts.length === 2 &&
      emailBreakouts[0].length > 0 &&
      emailBreakouts[1].length > 0 &&
      emailBreakouts[1].includes(".")
    );
  };

  const validateCheckbox = () => {
    return formValue.validate === true;
  };

  const handleSubmit = () => {
    if (!validateName()) {
      setError("Enter a name please");
    } else if (!validateCompany()) {
      setError("Enter a company please");
    } else if (!validateCheckbox()) {
      setError("Please agree to subscribe");
    } else if (!validateEmail()) {
      setError("Enter a valid email please");
    } else formHistory.push("/subscribed");
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setFormValue(defaultState);
    setError("");
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormDetails>
        <Title>Subscribe to our newsletter!</Title>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          handleChange={handleChange}
          value={formValue.name}
        />
        <Input
          name="company"
          type="text"
          placeholder="Company"
          handleChange={handleChange}
          value={formValue.company}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          handleChange={handleChange}
          value={formValue.email}
        />
        <div>
          <Label>
            <Input
              name="validate"
              type="checkbox"
              handleChange={handleChange}
              checked={formValue.validate}
            />
            I Agree to Subscribe!
          </Label>
        </div>
        <ButtonContainer>
          <Button handleClick={handleSubmit} type="submit" />
          <Button handleClick={handleReset} type="reset" />
        </ButtonContainer>
        {error !== null ? <ErrorMessage>{error}</ErrorMessage> : null}
      </FormDetails>
    </Form>
  );
};

const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  min-width: fit-content;
  min-height: fit-content;
  background-color: #f8f3f37d;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 16px 1px rgb(174 164 164);
  border: none;

  @media (min-width: 1440px) {
    width: 450px;
    height: fit-content;
  }
  @media (max-width: 1024px) {
    height: fit-content;
  }
  @media (max-width: 767px) {
    height: fit-content;
  }
`;

const FormDetails = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  .name,
  .email,
  .company {
    height: 10%;
    padding: 0.7rem;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const Label = styled.label`
  margin-left: 5px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  width: 75%;
  height: 15%;

  .submit {
    background-color: #3b3b3b;
    color: white;
    width: 50%;
    border: 1px solid gray;
    :hover {
      background-color: black;
      cursor: pointer;
    }
  }

  .reset {
    background-color: #fffdfd;
    min-width: fit-content;
    color: #6b5d5d;
    width: 30%;
    border: 1px solid gray;

    :hover {
      background-color: #e7e7e7;
      cursor: pointer;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

export default NewsletterForm;
