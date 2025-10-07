import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Section, SectionProps } from "./Section";
import { H2, OnlyHorizontalP, P, Strong } from "./common/tags";

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 1000;
  font-size: 2.8vh;

  &:hover {
    text-decoration: underline;
  }
`;

const CVButton = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  padding: 15px 40px;
  background: #60a5fa;
  color: #0d1117;
  border: 2px solid #60a5fa;
  text-decoration: none;
  font-size: 2.5vh;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #3b82f6;
    border-color: #3b82f6;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
  }
`;

export default ({ fullpageApi }: SectionProps) => {
  return (
    <Section>
      <H2>About me</H2>
      <P>
        I've been working with Python professionally since 2016 and continue to enjoy exploring new approaches and technologies in software development.
      </P>
      <P>
        As a co-founder and backend developer at <StyledLink href="https://mojamatura.edu.pl" target="_blank" rel="noopener">Moja Matura</StyledLink>, I focus on creating reliable and scalable backend solutions while keeping a close eye on the business value they deliver. I enjoy bridging technical excellence with practical outcomes - whether building large, high-traffic systems or lightweight MVPs.
      </P>
      <P>
        My background in Computer Science (M.Eng.) from the Warsaw University of Life Sciences and my experience across team and freelance projects have shaped a balanced mindset: technical precision combined with an entrepreneurial perspective.
      </P>
      <CVButton to="/cv">View CV</CVButton>
    </Section>
  );
};
