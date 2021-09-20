import React from "react";
import styled from "styled-components";

const Input = ({ name, type, placeholder, handleChange, value, checked }) => {
  return (
    <InputEntry
      type={type}
      name={name}
      placeholder={placeholder}
      className={name}
      value={value}
      checked={checked}
      onChange={(ev) => handleChange(ev.target.value, name)}
      required
    />
  );
};

const InputEntry = styled.input`
  background-color: #e4e4e4;
  margin-top: 1.8rem;
  border: 1px solid #f1e7e7;
  border-radius: 0.5rem;
`;

export default Input;
