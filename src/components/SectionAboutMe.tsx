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
        I am a Product Engineer with commercial experience since 2016, specializing in Python, Django, and AWS. I don't just write code; I build products that drive business value.
      </P>
      <P>
        As a co-founder and backend architect at <StyledLink href="https://mojamatura.edu.pl" target="_blank" rel="noopener">Moja Matura</StyledLink>, I designed and scaled a platform to a user base of 50,000+ registered users. This journey taught me how to handle everything from high-traffic system optimization to translating user needs into technical features.
      </P>
      <P>
        My experience spans across fintech, e-commerce, and education, where I focus on building high-quality, AI-ready backend solutions. With a Master's degree in Computer Science and an entrepreneurial mindset, I bridge the gap between technical precision and practical business outcomes — whether leading a team or building an MVP from scratch.
      </P>
      <CVButton to="/cv">View CV</CVButton>
    </Section>
  );
};
