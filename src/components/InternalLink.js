import React from "react";
import styled from "styled-components";
import { Link } from "react-static";
import { fontSize, textAlign } from "styled-system";
import lineHeight from "../helper/lineHeight";

const StyledInternalLink = styled(Link)`
  font-family: "Montserrat", "sans-serif";
  font-weight: 400;
  ${fontSize};
  line-height:"1.5rem";
  ${textAlign};
  color: #243552;
  margin: 0;
  text-decoration: none;

  :hover {
    color: #0a64ff;
  }
`;

const InternalLink = props => (
  <StyledInternalLink
    {...props}
    fontSize={["1rem"]}
    // lineHeight-={["1.5rem"]}
    href={props.to}
    target="_blank"
  />
);

export default InternalLink;
