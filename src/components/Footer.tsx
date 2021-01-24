import React from "react";
import styled from "styled-components";

const FooterP = styled.p`
  bottom: 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

export const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  return <FooterP>Copyright © {currentYear} Rafał Jusiak</FooterP>;
};
