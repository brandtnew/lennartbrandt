import React from "react";
import styled from "styled-components";
import { fontSize, lineHeight, textAlign } from "styled-system";

const StyledSubtitle = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  ${fontSize};
  ${lineHeight};
  ${textAlign};
  color: #0a64ff;
  text-transform: uppercase;
  margin: 0;
`;

const Subtitle = props => (
  <StyledSubtitle {...props} fontSize={"0.75rem"} lineHeight={"1rem"} />
);

export default Subtitle;
