import React from "react";
import styled from "styled-components";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledTextLink = styled.a`
  font-family: "Lora", "serif";
  font-weight: 400;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  color: #0a64ff;
  margin: 0;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const TextLink = props => (
  <StyledTextLink
    {...props}
    fontSize={["1rem", "1rem", "1.25rem"]}
    lineHeight={["1.5rem", "1.5rem", "2rem"]}
    href={props.to}
    target="_blank"
  />
);

export default TextLink;
