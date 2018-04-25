import React from "react";
import styled from "styled-components";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledText = styled.p`
  font-family: "Lora";
  font-weight: 400;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  color: #243552;
  margin: 0;
`;

const Text = props => (
  <StyledText
    {...props}
    fontSize={["1rem", "1rem", "1.25rem"]}
    lineHeight={["1.5rem", "1.5rem", "2rem"]}
  />
);

export default Text;
