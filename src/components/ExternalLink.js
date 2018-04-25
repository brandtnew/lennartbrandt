import React from "react";
import styled from "styled-components";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledExternalLink = styled.a`
  font-family: 'Montserrat', 'sans-serif';
  font-weight: 400;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  color: #243552;
  margin: 0;
  text-decoration: none;

  :hover {
    color: #0a64ff;
  }
`;

const ExternalLink = props => (
  <StyledExternalLink
    {...props}
    fontSize={["1rem"]}
    lineHeight={["1.5rem"]}
    href={props.to}
    target="_blank"
  />
);

export default ExternalLink;
