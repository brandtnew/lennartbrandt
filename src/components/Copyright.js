import React from "react";
import styled from "styled-components";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledCopyright = styled.p`
  font-family: "Montserrat", "sans-serif";
  font-weight: 400;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  margin: 0;
  color: #838FA3;
`;

const Copyright = props => (
  <StyledCopyright
    {...props}
    fontSize={["1rem"]}
    lineHeight={["1.5rem"]}
  />
);

export default Copyright;
