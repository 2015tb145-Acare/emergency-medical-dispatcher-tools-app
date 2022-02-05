import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ApiContext } from "../context";

import styled from "styled-components/macro";
import { theme } from "../styles";
const { colors, fontSizes } = theme;

const SignInForm = ({ closeModal }) => {
  const inputs = useRef([]);
  const { signIn } = useContext(ApiContext);
  const [inputValidation, setInputValidation] = useState("");
  const navigate = useNavigate();

  const addInput = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signIn(inputs.current[0].value, inputs.current[1].value);
    if (closeModal) {
      closeModal();
    }
    setInputValidation("");
    navigate("/dashboard");
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <FormGroup>
        <label htmlFor="signInUsername">Username</label>
        <input
          ref={addInput}
          id="signInUsername"
          name="username"
          type="text"
          required
          autoFocus
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="signInPassword">Mot de passe</label>
        <input
          ref={addInput}
          id="signInPassword"
          name="password"
          type="password"
          required
        />
      </FormGroup>
      <p>{inputValidation}</p>
      <button>Envoyer</button>
    </FormWrapper>
  );
};

export default SignInForm;

const FormWrapper = styled.form`
  display: block;
  width: 380px;
  margin: 0 0 2em;
  padding: 1rem;
  p {
    width: 100%;
    margin-top: 0.25rem;
    font-size: ${fontSizes.sm};
    color: ${colors.warning};
  }
  button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: ${colors.white};
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: ${colors.primary};
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  button:hover {
    color: ${colors.white};
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 100%;
    margin: 0px;
    padding: 0.375rem 0.75rem;
    font-size: ${fontSizes.base};
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: ${colors.white};
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  input:focus-visible {
    outline: 4px solid darkorange;
  }
`;
