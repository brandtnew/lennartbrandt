import React from "react";
import styled from "styled-components";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledTitle = styled.h1`
  font-family: "Montserrat", "sans-serif";
  font-weight: 600;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  margin: 0;
  color: #11213d;
`;

const Title = props => (
  <StyledTitle
    {...props}
    fontSize={["2rem", "2.25rem", "3rem"]}
    lineHeight={["2.5rem", "3rem", "4rem"]}
  />
);

export default Title;
