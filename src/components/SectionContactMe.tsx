import React from "react";
import styled from "styled-components";
import { EnvelopeIcon } from "./common/icons";

// @ts-ignore
import GithubLogo from "../images/GitHub.png";
// @ts-ignore
import LinkedInLogo from "../images/LinkedIn.png";

import { Footer } from "./Footer";
import { Section } from "./Section";
import { H2 } from "./common/tags";

const ReferenceContainer = styled.div`
  justify-content: space-around;
  display: flex;
  margin: 0 35%;
  padding: 0 3%;
  @media (orientation: portrait) {
    flex-wrap: wrap;
  }
`;

const Reference = styled.a`
  padding: 0 -45px;
  @media (max-width: 768px) {
    margin: 15% 0;
  }
`;

const ReferenceLinkedIn = styled(Reference)`
  @media (orientation: portrait) {
    margin: 15% -12% 15% 0;
  }
`;

const LogoImg = styled.img`
  height: 8vh;
  width: auto;
`;

export default () => {
  return (
    <Section textColor={"black"}>
      <H2>Contact me</H2>
      <ReferenceContainer>
        <Reference rel="noopener" href="mailto:kontakt@rafaljusiak.pl">
          <EnvelopeIcon />
        </Reference>
        <Reference
          rel="noopener"
          href="https://github.com/rafaljusiak"
          target="_blank"
        >
          <LogoImg src={GithubLogo} alt="Github logo" />
        </Reference>
        <ReferenceLinkedIn
          rel="noopener"
          href="https://www.linkedin.com/in/rafa%C5%82-jusiak-6b243a111/"
          target="_blank"
        >
          <LogoImg src={LinkedInLogo} alt="LinkedIn logo" />
        </ReferenceLinkedIn>
      </ReferenceContainer>
      <Footer />
    </Section>
  );
};
