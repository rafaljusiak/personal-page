import React from "react";
import styled from "styled-components";

import { Footer } from "./Footer";
import { Section } from "./Section";
import { H2 } from "./common/tags";

const ReferenceContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 2rem;
  @media (orientation: portrait) {
    flex-wrap: wrap;
  }
`;

const Reference = styled.a`
  color: #f1f5f9;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default () => {
  return (
    <Section textColor={"#f1f5f9"}>
      <H2>Contact me</H2>
      <ReferenceContainer>
        <Reference rel="noopener" href="mailto:kontakt@rafaljusiak.pl">
          Email
        </Reference>
        <Reference
          rel="noopener"
          href="https://github.com/rafaljusiak"
          target="_blank"
        >
          GitHub
        </Reference>
        <Reference
          rel="noopener"
          href="https://www.linkedin.com/in/rafal-jusiak/"
          target="_blank"
        >
          LinkedIn
        </Reference>
      </ReferenceContainer>
      <Footer />
    </Section>
  );
};
