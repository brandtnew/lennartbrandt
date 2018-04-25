import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  height: 4rem;
  width: 16rem;
  border: 1px solid #11213d;
  border-radius: 1px;
  background-color: #ffffff;
  color: #11213d;
  font-family: Montserrat;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: center;
  outline: none;

  :active {
    color: #ffffff;
    background-color: #11213d;
  }
`;

const Button = props => (
  <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
);

export default Button;
