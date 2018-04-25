import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  margin: 0;
  max-width: 100%;
  height: auto;
`;

const Image = props => <StyledImage {...props} />;

export default Image;
